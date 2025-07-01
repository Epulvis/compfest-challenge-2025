import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AlertTriangle, X } from 'lucide-react';

interface CancelSubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  subscriptionDetails: {
    planName: string;
    totalPrice: number;
  };
}

const CancelSubscriptionModal: React.FC<CancelSubscriptionModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  subscriptionDetails,
}) => {
  const [reason, setReason] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isConfirmed) {
      onConfirm();
      setReason('');
      setIsConfirmed(false);
    }
  };

  const handleClose = () => {
    setReason('');
    setIsConfirmed(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="w-5 h-5" />
            Batalkan Langganan
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-medium text-red-800 mb-2">Anda akan membatalkan:</h4>
              <p className="text-red-700 text-sm">
                <strong>{subscriptionDetails.planName}</strong><br />
                {formatPrice(subscriptionDetails.totalPrice)} per minggu
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reason">Alasan Pembatalan (Opsional)</Label>
              <Textarea
                id="reason"
                placeholder="Bantu kami memahami alasan Anda membatalkan langganan..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            
            <div className="space-y-3">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  <strong>Konsekuensi pembatalan:</strong>
                </p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Pengiriman makanan akan dihentikan</li>
                  <li>• Tagihan bulanan akan dibatalkan</li>
                  <li>• Akses ke layanan premium akan berakhir</li>
                  <li>• Data langganan akan dihapus secara permanen</li>
                </ul>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="confirmCancel"
                  checked={isConfirmed}
                  onChange={(e) => setIsConfirmed(e.target.checked)}
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <label htmlFor="confirmCancel" className="text-sm text-gray-700">
                  Saya memahami konsekuensi dan ingin membatalkan langganan
                </label>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button type="button" variant="outline" onClick={handleClose} className="w-full sm:w-auto">
              Kembali
            </Button>
            <Button 
              type="submit" 
              variant="destructive" 
              disabled={!isConfirmed}
              className="w-full sm:w-auto"
            >
              <X className="w-4 h-4 mr-2" />
              Batalkan Langganan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CancelSubscriptionModal;