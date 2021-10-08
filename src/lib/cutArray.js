export  function cutArray(array) {

  let arrayOfarrays = []; // add new array
  
  const lengthCut = 25; // Partir en arreglo de 25

  for (let i = 0; i < array.length; i += lengthCut) {
    let pedazo = array.slice(i, i + lengthCut);
    arrayOfarrays.push(pedazo);
  }
  return arrayOfarrays;
}
