import { Product, productToSave } from "../Types/types";
import moment from "moment";
import { API_CONSTANTS } from "../constants/apiConstants";
import { useState } from "react";

const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_CONSTANTS.BASE_URL_API}/bp/products/`, {
      method: API_CONSTANTS.METHOD_GET,
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    const data = await response.json();
    return data;
  } catch (err: any) {
    alert(err.message);
    return [];
  }
};

const deleteProduct = async (productId: string): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_CONSTANTS.BASE_URL_API}/bp/products/${productId}`, {
      method: API_CONSTANTS.METHOD_DELETE,
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
    const data = await response.json();
    location.reload();
    return data;
  } catch (err: any) {
    alert(err.message);
    return [];
  }
};

const createProduct = async (product: productToSave): Promise<Product> => {
  try {
    const { productName, ...modifiedProduct } = product;
    const updatedProduct = {
      ...modifiedProduct,
      name: productName,
      date_release: moment
        .utc(product.date_release)
        .format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
      date_revision: moment
        .utc(product.date_revision)
        .format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
    };

    const response = await fetch(`${API_CONSTANTS.BASE_URL_API}/bp/products/`, {
      method: API_CONSTANTS.METHOD_POST,
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    alert("¡Guardado!");
    const data = await response.json();
    location.reload();
    return data;
  } catch (err: any) {
    alert(err.message);
    throw err;
  }
};

const updateProduct = async (product: productToSave): Promise<Product> => {
  try {
    const { productName, id, ...modifiedProduct } = product;
    const updatedProduct = {
      ...modifiedProduct,
      name: productName,
      date_release: moment
        .utc(product.date_release)
        .format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
      date_revision: moment
        .utc(product.date_revision)
        .format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
    };

    const response = await fetch(`${API_CONSTANTS.BASE_URL_API}/bp/products/${id}`, {
      method: API_CONSTANTS.METHOD_PUT,
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    alert("¡Actualizado!");
    const data = await response.json();
    location.reload();
    return data;
  } catch (err: any) {
    alert(err.message);
    throw err;
  }
};

export const useProducts = () => {
  const [apiInteracted, setApiInteracted] = useState('');

  const getProductsQuery = async () => {
    const data = await getProducts();
    return data;
  };

  const deleteProductMutation = async (productId: string) => {
    await deleteProduct(productId);
    setApiInteracted(API_CONSTANTS.METHOD_DELETE); 
  };

  const createProductMutation = async (product: productToSave) => {
    await createProduct(product);
    setApiInteracted(API_CONSTANTS.METHOD_POST);};

  const updateProductMutation = async (product: productToSave) => {
    await updateProduct(product);
    setApiInteracted(API_CONSTANTS.METHOD_PUT); };

  return {
    productsQuery: getProductsQuery,
    deleteProduct: deleteProductMutation,
    createProduct: createProductMutation,
    updateProduct: updateProductMutation,
    apiInteracted,
  };
};
