const voucherPromotion = vouchers => {
  let totalPrice = 0; // declaramos he inicializamos el precio total de los vouchers

  // recorremos todos los vouchers y vamos sumando suprecio al total
  for (const voucher of vouchers) {
    totalPrice += voucher.price;
  }

  // si los vouchers en el carrito son par se le aplica la promocion de 2 x 1
  if (vouchers.length % 2 === 0) {
    return (totalPrice = totalPrice / 2); // retornamos el precio total con la promocion
  }

  return totalPrice; // retornamos el precio total sin promocion
};

export { voucherPromotion };
