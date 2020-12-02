import { useState } from 'react';

const useCheckout = () => {
  const [total, setTotal] = useState(5);
  const res = {
    scan: sku => {},
    total: () => total,
  };
  return [scan, total];
};

export { useCheckout };
