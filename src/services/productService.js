import axios from 'axios';
import { mapFertilizerType, formatPrice } from '@/productUtils.js';

export async function getProductDetails(productId) {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/${productId}`);
    const product = response.data;
    product.fertilizerType = mapFertilizerType(product.fertilizerType);
    product.price = formatPrice(product.price);
    return product;
  } catch (error) {
    console.error('Error al cargar los detalles del producto:', error);
    throw error;
  }
}

export async function getProducts() {
  try {
    const response= await axios.get(`${import.meta.env.VITE_API_URL}/product`);
    const productList= response.data;
    const productListMapped = productList.map(product => {
        return {
            binomialName: product.binomialName,
            id: product.id,
            imgUrl: product.imgUrl,
            name: product.name,
            price: formatPrice(product.price)
        };
    });
    return productListMapped;
  } catch (error) {
    console.error('Error al cargar los productos:', error);
    throw error;
  }
}
