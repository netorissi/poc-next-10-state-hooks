import { useMemo } from 'react';
import { useStateUpdate } from './utils';

type Prices = {
  amount: number;
}

export type CheckoutStore = {
  prices: Prices;
}

interface ICheckoutStore {
  state: Readonly<CheckoutStore>;

  setPrices(prices: Prices): void;
}

const initialState: CheckoutStore = {
  prices: {
    amount: 0
  }
}

let state = { ...initialState };

export default function useStore(): ICheckoutStore {
  const updateState = useStateUpdate();
  const memoizedState = useMemo(() => state, [state]);

  function setPrices(prices: Prices): void {
    state = { ...state, prices };
    updateState();
  }

  return {
    state: memoizedState,
    setPrices
  }
}