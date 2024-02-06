import URLS from "../urls";

const getAllProducts = async () => {
  try {
    const response = await fetch(URLS.PRODUCT.READ_MANY());
    response.data = await response.json();
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const getProduct = async (id) => {
  try {
    const response = await fetch(URLS.PRODUCT.READ_ONE(id));
    response.data = await response.json();
    return response;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};

const PRODUCT_API = {
  getAllProducts,
  getProduct,
};

export default PRODUCT_API;
