import React, { useState, useEffect } from 'react';

import db from './data/db.json';

import { filter } from './utils/filter';
import { voucherPromotion } from './utils/voucherPromotion';
import { bulkPurchases } from './utils/bulkPurchases';

function App() {
  const [total, setTotal] = useState(0); // Creamos un estado que almacena el total de la cuenta
  const [shoppingCar, setShoppingCar] = useState([]); // almacenamos los items del carrito

  useEffect(() => {
    const vouchers = filter(shoppingCar, 'VOUCHER'); // buscaremos dentro del carrito todos los vouchers
    const tshirts = filter(shoppingCar, 'TSHIRT'); // buscaremos dentro del carrito todos las tshirts
    const mugs = filter(shoppingCar, 'MUG'); // buscaremos dentro del carrito todos los mugs

    let totalMugsPrice = 0; // declaramos he inicializamos el precio total de los mugs

    // recorremos todos los mugs y vamos sumando suprecio al total
    for (const mug of mugs) {
      totalMugsPrice += mug.price;
    }

    const totalVouchers = voucherPromotion(vouchers); // llamamos la funcion de la promocion de vouchers
    const totalTshirts = bulkPurchases(tshirts); // llamamos la funcion de compras al granel

    setTotal(totalVouchers + totalTshirts + totalMugsPrice); // lo sumamos todo y lo agregamos al estado total
  }, [shoppingCar]); // cuando el estado del carrito cambien hara lo de adentro

  // funcion para agregar un producto al carrito segun el codigo ingresado
  const scan = sku => {
    // obtenemos la posicion del producto ingresado en el arreglo de la base de datos
    const idx = db.map(product => product.code).indexOf(sku);

    // editamos el estado del carrito haciendo una destructuracion de lo que ya tiene y agregando el producto ingresado al final
    setShoppingCar([...shoppingCar, db[idx]]);
  };

  return (
    <div className="min-h-screen bg-gray-200 px-4">
      <h1>Cofi-test</h1>

      <div className="grid grid-cols-3 gap-4">
        {db.map((product, idx) => (
          <button
            key={`${idx}-${product.code}`}
            className="bg-blue-500 text-white py-4 rounded-2xl"
            onClick={() => scan(product.code)}
          >
            {product.name} - {product.price}€
          </button>
        ))}
      </div>

      <h2>total {total}€</h2>

      <ul>
        {shoppingCar.map((item, idx) => (
          <li key={`${idx}`}>
            {idx + 1} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
