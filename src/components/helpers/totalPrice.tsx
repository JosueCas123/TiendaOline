import { Products } from "../../interface/products";

// la funcion resibe un arreglo
export const totalPrice = (products:Products[]):number => {
    let suma = 0;
    
    products.forEach((product:Products) => (suma += product.price));
  return suma;
    
}