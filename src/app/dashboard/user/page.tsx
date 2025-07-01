"use client"

import React, { useState } from 'react';
import Navbar from '@/components/organisms/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, DollarSign, Package, Pause, X } from 'lucide-react';
import PauseSubscriptionModal from '@/components/molecules/PauseSubscriptionModal';
import CancelSubscriptionModal from '@/components/molecules/CancelSubscriptionModal';

const mockSubscription = {
  id: 'sub_123',
  planName: 'Protein Plan',
  planPrice: 40000,
  mealTypes: ['Breakfast', 'Lunch'],
  deliveryDays: ['Monday', 'Wednesday', 'Friday'],
  totalPrice: 240000,
  status: 'active',
  startDate: '2024-01-01',
  nextBilling: '2024-07-15',
  isPaused: false,
  pausedUntil: null,
};

const UserDashboard = () => {
  const [subscription, setSubscription] = useState(mockSubscription);
  const [isPauseModalOpen, setIsPauseModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handlePauseSubscription = (startDate: string, endDate: string) => {
    setSubscription(prev => ({
      ...prev,
      isPaused: true,
      pausedUntil: endDate,
      status: 'paused'
    }));
    setIsPauseModalOpen(false);
  };

  const handleCancelSubscription = () => {
    setSubscription(prev => ({
      ...prev,
      status: 'cancelled'
    }));
    setIsCancelModalOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Aktif';
      case 'paused':
        return 'Dijeda';
      case 'cancelled':
        return 'Dibatalkan';
      default:
        return 'Tidak Diketahui';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard Pengguna
            </h1>
            <p className="text-gray-600">
              Kelola langganan makanan sehat Anda
            </p>
          </div>

          {/* Subscription Overview Card */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-sky-600" />
                  Langganan Aktif
                </CardTitle>
                <Badge className={`${getStatusColor(subscription.status)} border-0`}>
                  {getStatusText(subscription.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Plan Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Detail Paket</h3>
                    <p className="text-lg font-medium text-sky-600">{subscription.planName}</p>
                    <p className="text-sm text-gray-600">
                      {formatPrice(subscription.planPrice)} per makanan
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Jenis Makanan</h4>
                    <div className="flex flex-wrap gap-2">
                      {subscription.mealTypes.map((meal, index) => (
                        <Badge key={index} variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
                          {meal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Hari Pengiriman</h4>
                    <div className="flex flex-wrap gap-2">
                      {subscription.deliveryDays.map((day, index) => (
                        <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Total Harga</h4>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatPrice(subscription.totalPrice)}
                    </p>
                    <p className="text-sm text-gray-600">per minggu</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Subscription Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Mulai Berlangganan</p>
                    <p className="font-medium">{formatDate(subscription.startDate)}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Tagihan Berikutnya</p>
                    <p className="font-medium">{formatDate(subscription.nextBilling)}</p>
                  </div>
                </div>
              </div>

              {subscription.isPaused && subscription.pausedUntil && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-medium text-yellow-800">Langganan Dijeda</h4>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Langganan Anda dijeda hingga {formatDate(subscription.pausedUntil)}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              {subscription.status === 'active' && (
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsPauseModalOpen(true)}
                    className="flex items-center gap-2"
                  >
                    <Pause className="w-4 h-4" />
                    Jeda Langganan
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => setIsCancelModalOpen(true)}
                    className="flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Batalkan Langganan
                  </Button>
                </div>
              )}

              {subscription.status === 'cancelled' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-medium">
                    Langganan Anda telah dibatalkan
                  </p>
                  <p className="text-sm text-red-600 mt-1">
                    Terima kasih telah menggunakan layanan SEA Catering
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Modals */}
          <PauseSubscriptionModal
            isOpen={isPauseModalOpen}
            onClose={() => setIsPauseModalOpen(false)}
            onConfirm={handlePauseSubscription}
          />

          <CancelSubscriptionModal
            isOpen={isCancelModalOpen}
            onClose={() => setIsCancelModalOpen(false)}
            onConfirm={handleCancelSubscription}
            subscriptionDetails={{
              planName: subscription.planName,
              totalPrice: subscription.totalPrice,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;