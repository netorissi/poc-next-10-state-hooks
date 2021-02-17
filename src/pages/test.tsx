import React from 'react';
import { useRouter } from 'next/router';

import useStoreCheckout from '@store/checkout';

export default function Test() {
  const router = useRouter();
  const { state: { prices }, setPrices } = useStoreCheckout();

  return (
    <>
    <div>Amount: {prices.amount}</div>
      <button onClick={() => setPrices({ amount: 500 })}>SETAR NO AMOUNT NO STATE</button>
      <button onClick={() => router.push("/")}>MUDAR ROTA</button>
    </>
  )
}
