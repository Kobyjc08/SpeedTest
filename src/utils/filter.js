// ver https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const filter = (shoppingCarItems, word) => shoppingCarItems.filter(product => product.code === word);

export { filter };
