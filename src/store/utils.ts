import { useState } from 'react';

export function useStateUpdate() {
  const [, tick] = useState(0);
  return () => tick(Date.now());
}