// NEXT_PUBLIC_API_HOST = "https://marginpoint.pythonanywhere.com";
const DEFAULT_HOST = process.env.NEXT_PUBLIC_API_HOST;
// const DEFAULT_HOST = "https://marginpoint.pythonanywhere.com";
const API_BASE_URL = DEFAULT_HOST;

// Product url templates
const productReadManyUrl = (categoryId) =>
  `${API_BASE_URL}/api/v1/shop/product`;

const productReadOneUrl = (productId) => `api/v1/shop/product/${productId}`;

// category url templates
const categoryReadManyUrl = () => `${API_BASE_URL}/api/v1/shop/category/`;

const categoryReadOneUrl = (categoryId) =>
  `${API_BASE_URL}/api/v1/shop/product/category/${categoryId}`;

const categoryCreateUrl = () => `${API_BASE_URL}/api/v1/shop/category`;

const CATEGORY = {
  READ_MANY: categoryReadManyUrl,
  CREATE: categoryCreateUrl,
  READ_ONE: categoryReadOneUrl,
  // UPDATE: categoryUpdateUrl,
  // DELETE: categoryDeleteUrl,
  // CHANGE_STATUS: categoryChangeStatusUrl
};

const PRODUCT = {
  READ_MANY: productReadManyUrl,
  READ_ONE: productReadOneUrl,
};

const URLS = {
  CATEGORY,
  PRODUCT,
};

export default URLS;
