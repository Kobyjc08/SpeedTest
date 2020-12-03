const bulkPurchases = tshirts => {
  let totalPrice = 0; // declaramos he inicializamos el precio total de las tshirts

  // recorremos todos las tshirts y vamos sumando suprecio al total
  for (const tshirt of tshirts) {
    totalPrice += tshirt.price;
  }

  // si es menor a 3 NO aplicamos el descuento retornamos el total
  if (tshirts.length < 3) return totalPrice;

  // de lo contrario se le aplica un descuento del 5% (20 - (20 * 0.05) = 19)
  const discount = (totalPrice * 5) / 100;
  return totalPrice - discount; // retornamos el total con descuento
};

export { bulkPurchases };
