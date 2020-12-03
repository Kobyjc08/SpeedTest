import { useState } from 'react';

const useCheckout = () => {
  const [total, setTotal] = useState(0);
  const scan = sku => {
    console.log(sku);
  };
  let data = { total, scan };
  return data;
};

export { useCheckout };

/*
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Code</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </Table>
  )
  */
