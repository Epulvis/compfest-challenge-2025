"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Navbar from '@/components/organisms/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const subscriptionSchema = z.object({
  fullName: z.string().min(2, 'Nama lengkap minimal 2 karakter'),
  phoneNumber: z.string()
    .regex(/^08\d{8,12}$/, 'Nomor telepon harus dimulai dengan 08 dan berisi 10-14 digit'),
  planType: z.string().min(1, 'Pilih rencana langganan'),
  mealTypes: z.array(z.string()).min(1, 'Pilih minimal 1 jenis makanan'),
  deliveryDays: z.array(z.string()).min(1, 'Pilih minimal 1 hari pengiriman'),
  allergies: z.string().optional(),
});

type SubscriptionFormData = z.infer<typeof subscriptionSchema>;

export default function SubscriptionPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      planType: '',
      mealTypes: [],
      deliveryDays: [],
      allergies: '',
    },
  });

  const planOptions = [
    { value: 'diet', label: 'Diet Plan – Rp30.000,00 / meal', price: 30000 },
    { value: 'protein', label: 'Protein Plan – Rp40.000,00 / meal', price: 40000 },
    { value: 'royal', label: 'Royal Plan – Rp60.000,00 / meal', price: 60000 },
  ];

  const mealTypeOptions = [
    { value: 'breakfast', label: 'Breakfast 🍳' },
    { value: 'lunch', label: 'Lunch 🍱' },
    { value: 'dinner', label: 'Dinner 🍽️' },
  ];

  const weekdays = [
    { value: 'monday', label: 'Mon' },
    { value: 'tuesday', label: 'Tue' },
    { value: 'wednesday', label: 'Wed' },
    { value: 'thursday', label: 'Thu' },
    { value: 'friday', label: 'Fri' },
    { value: 'saturday', label: 'Sat' },
    { value: 'sunday', label: 'Sun' },
  ];

  const calculateTotalPrice = () => {
    const selectedPlan = planOptions.find(plan => plan.value === form.watch('planType'));
    const mealTypesCount = form.watch('mealTypes').length;
    const deliveryDaysCount = form.watch('deliveryDays').length;
    
    if (!selectedPlan || mealTypesCount === 0 || deliveryDaysCount === 0) {
      return 0;
    }
    
    // Calculate: price per meal × number of meal types × number of delivery days
    return selectedPlan.price * mealTypesCount * deliveryDaysCount;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const onSubmit = async (data: SubscriptionFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Subscription data:', data);
      toast({
        title: "Langganan Berhasil!",
        description: "Terima kasih! Tim kami akan menghubungi Anda segera.",
      });
      setIsSubmitting(false);
      form.reset();
    }, 2000);
  };

  const handleMealTypeChange = (mealType: string, checked: boolean) => {
    const currentMealTypes = form.getValues('mealTypes');
    if (checked) {
      form.setValue('mealTypes', [...currentMealTypes, mealType]);
    } else {
      form.setValue('mealTypes', currentMealTypes.filter(type => type !== mealType));
    }
  };

  const handleDeliveryDayChange = (day: string, checked: boolean) => {
    const currentDays = form.getValues('deliveryDays');
    if (checked) {
      form.setValue('deliveryDays', [...currentDays, day]);
    } else {
      form.setValue('deliveryDays', currentDays.filter(d => d !== day));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Langganan Paket Makanan Anda
            </h1>
            <p className="text-lg text-gray-600">
              Pilih rencana makan sehat sesuai kebutuhan dan gaya hidup Anda.
            </p>
          </div>

          {/* Subscription Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Personal Info Section */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    Informasi Pribadi
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Lengkap</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Masukkan nama lengkap Anda" 
                            {...field} 
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nomor Telepon Aktif</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="08xxxxxxxxxx" 
                            {...field} 
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Plan Selection */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    Pilihan Paket
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="planType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pilih Rencana Langganan Anda</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Pilih paket langganan" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {planOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Meal Type Selection */}
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="mealTypes"
                    render={() => (
                      <FormItem>
                        <FormLabel>Pilih Jenis Makanan</FormLabel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {mealTypeOptions.map((option) => (
                            <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={form.watch('mealTypes').includes(option.value)}
                                  onCheckedChange={(checked) => 
                                    handleMealTypeChange(option.value, checked as boolean)
                                  }
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal cursor-pointer">
                                {option.label}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Delivery Days */}
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="deliveryDays"
                    render={() => (
                      <FormItem>
                        <FormLabel>Pilih Hari Pengiriman</FormLabel>
                        <div className="grid grid-cols-7 gap-2">
                          {weekdays.map((day) => (
                            <Button
                              key={day.value}
                              type="button"
                              variant={form.watch('deliveryDays').includes(day.value) ? "default" : "outline"}
                              className="h-12 text-sm"
                              onClick={() => {
                                const isSelected = form.watch('deliveryDays').includes(day.value);
                                handleDeliveryDayChange(day.value, !isSelected);
                              }}
                            >
                              {day.label}
                            </Button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Allergies Section */}
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="allergies"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Alergi / Pantangan Makanan</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Contoh: Kacang, gluten, susu sapi…"
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Section */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold bg-sky-600 hover:bg-sky-700"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Mengirim...
                      </div>
                    ) : (
                      'Kirim Langganan'
                    )}
                  </Button>
                </div>

                {/* Total Price Display */}
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-100">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Total Harga Langganan
                    </h3>
                    <div className="text-3xl font-bold text-sky-600 mb-2">
                      {formatPrice(calculateTotalPrice())}
                    </div>
                    <p className="text-sm text-gray-600">
                      {calculateTotalPrice() > 0 && (
                        <>
                          {form.watch('mealTypes').length} jenis makanan × {form.watch('deliveryDays').length} hari pengiriman
                        </>
                      )}
                      {calculateTotalPrice() === 0 && "Pilih paket dan preferensi untuk melihat harga"}
                    </p>
                  </div>
                </div>

              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};