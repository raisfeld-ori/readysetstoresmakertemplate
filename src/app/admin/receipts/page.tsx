'use client';

import React, { useState, useEffect } from 'react';
import RecieptsAdmin from "@/recieptsAdmin/recieptsAdmin";
import LoadingErrorPage from "@/Loading/LoadingAdmin";
import { Config, Coupon, DefaultConfig, GetConfig, GetCoupons, GetReceipts, Receipt } from '@/util';

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [config, setConfig] = useState<Config>(DefaultConfig()); 
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  useEffect(() => {
    const fetchReceipts = async () => {
      try {
        const fetchedReceipts = await GetReceipts();
        setReceipts(fetchedReceipts);
        setConfig(await GetConfig());
        setCoupons(await GetCoupons());
      } catch (err) {
        console.error('Error fetching receipts:', err);
        setError('אירעה שגיאה בטעינת ההזמנות. אנא נסה שוב מאוחר יותר.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReceipts();
  }, []);

  const handleRetry = () => {
    setIsLoading(true);
    setError(null);
    setReceipts([]);
    // Re-fetch receipts
    const fetchReceipts = async () => {
      try {
        const fetchedReceipts = await GetReceipts();
        setReceipts(fetchedReceipts);
      } catch (err) {
        console.error('Error fetching receipts:', err);
        setError('אירעה שגיאה בטעינת ההזמנות. אנא נסה שוב מאוחר יותר.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReceipts();
  };

  if (isLoading || error) {
    return <LoadingErrorPage isLoading={isLoading} error={error} onRetry={handleRetry} />;
  }

  return (
    <>
      <RecieptsAdmin coupons={coupons} receipts={receipts} config={config}/>
    </>
  );
}
