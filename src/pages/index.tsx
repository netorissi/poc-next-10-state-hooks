import React from 'react';
import { useRouter } from 'next/router';

import useStoreCheckout from '@store/checkout';

const Index: React.FC = () => {
  const router = useRouter();
  const { state: { prices }, setPrices } = useStoreCheckout();

  return (
    <>
    <div>Amount: {prices.amount}</div>
      <button onClick={() => setPrices({ amount: 33 })}>SETAR NO AMOUNT NO STATE</button>
      <button onClick={() => router.push("/test")}>MUDAR ROTA</button>
    </>
  )
}

export default Index;