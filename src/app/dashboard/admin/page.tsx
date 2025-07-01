"use client"

import React, { useState } from 'react';
import Navbar from '@/components/organisms/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Users, DollarSign, RefreshCw, TrendingUp } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

// Mock data - in real app, this would come from an API
const mockAnalyticsData = {
  newSubscriptions: 24,
  monthlyRecurringRevenue: 2400000,
  reactivations: 8,
  activeSubscriptions: 156,
  previousNewSubscriptions: 18,
  previousMRR: 2100000,
  previousReactivations: 5,
  previousActiveSubscriptions: 148,
};

const AdminDashboard = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [analytics, setAnalytics] = useState(mockAnalyticsData);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const calculatePercentageChange = (current: number, previous: number) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? '↗' : '↘';
  };

  const handleDateRangeFilter = () => {
    // In a real app, this would make an API call with the date range
    console.log('Filtering data from', startDate, 'to', endDate);
    // For demo purposes, we'll just simulate new data
    setAnalytics({
      ...mockAnalyticsData,
      newSubscriptions: Math.floor(Math.random() * 50) + 10,
      monthlyRecurringRevenue: Math.floor(Math.random() * 1000000) + 2000000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">
              Monitor subscription analytics and business metrics
            </p>
          </div>

          {/* Date Range Selector */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-sky-600" />
                Filter by Date Range
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Start Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : <span>Pick start date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">End Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !endDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : <span>Pick end date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                        disabled={(date) => startDate ? date < startDate : false}
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <Button 
                  onClick={handleDateRangeFilter}
                  className="bg-sky-600 hover:bg-sky-700"
                  disabled={!startDate || !endDate}
                >
                  Apply Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* New Subscriptions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.newSubscriptions}</div>
                <p className={cn("text-xs", getChangeColor(calculatePercentageChange(analytics.newSubscriptions, analytics.previousNewSubscriptions)))}>
                  {getChangeIcon(calculatePercentageChange(analytics.newSubscriptions, analytics.previousNewSubscriptions))} {Math.abs(calculatePercentageChange(analytics.newSubscriptions, analytics.previousNewSubscriptions)).toFixed(1)}% from last period
                </p>
              </CardContent>
            </Card>

            {/* Monthly Recurring Revenue */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Recurring Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatPrice(analytics.monthlyRecurringRevenue)}</div>
                <p className={cn("text-xs", getChangeColor(calculatePercentageChange(analytics.monthlyRecurringRevenue, analytics.previousMRR)))}>
                  {getChangeIcon(calculatePercentageChange(analytics.monthlyRecurringRevenue, analytics.previousMRR))} {Math.abs(calculatePercentageChange(analytics.monthlyRecurringRevenue, analytics.previousMRR)).toFixed(1)}% from last period
                </p>
              </CardContent>
            </Card>

            {/* Reactivations */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reactivations</CardTitle>
                <RefreshCw className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.reactivations}</div>
                <p className={cn("text-xs", getChangeColor(calculatePercentageChange(analytics.reactivations, analytics.previousReactivations)))}>
                  {getChangeIcon(calculatePercentageChange(analytics.reactivations, analytics.previousReactivations))} {Math.abs(calculatePercentageChange(analytics.reactivations, analytics.previousReactivations)).toFixed(1)}% from last period
                </p>
              </CardContent>
            </Card>

            {/* Active Subscriptions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Active Subscriptions</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.activeSubscriptions}</div>
                <p className={cn("text-xs", getChangeColor(calculatePercentageChange(analytics.activeSubscriptions, analytics.previousActiveSubscriptions)))}>
                  {getChangeIcon(calculatePercentageChange(analytics.activeSubscriptions, analytics.previousActiveSubscriptions))} {Math.abs(calculatePercentageChange(analytics.activeSubscriptions, analytics.previousActiveSubscriptions)).toFixed(1)}% from last period
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info Card */}
          <Card>
            <CardHeader>
              <CardTitle>Analytics Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Growth Metrics</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• New customers joining regularly</li>
                      <li>• MRR showing positive trend</li>
                      <li>• Customer reactivation rate increasing</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Key Insights</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Total revenue: {formatPrice(analytics.monthlyRecurringRevenue)}</li>
                      <li>• Average revenue per user: {formatPrice(analytics.monthlyRecurringRevenue / analytics.activeSubscriptions)}</li>
                      <li>• Customer retention improving</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;