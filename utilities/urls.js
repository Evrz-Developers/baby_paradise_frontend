// NEXT_PUBLIC_API_HOST = "https://marginpoint.pythonanywhere.com";
const DEFAULT_HOST = process.env.NEXT_PUBLIC_API_HOST;
// const DEFAULT_HOST = "https://marginpoint.pythonanywhere.com";
const API_BASE_URL = DEFAULT_HOST;

// Product url templates
const productReadManyUrl = (categoryId) =>
  `${API_BASE_URL}/api/v1/shop/product`;

const productReadOneUrl = (productId) => `${API_BASE_URL}/api/v1/shop/product/${productId}`;

// category url templates
const categoryReadManyUrl = () => `${API_BASE_URL}/api/v1/shop/category/`;

const categoryReadOneUrl = (categoryId) =>
  `${API_BASE_URL}/api/v1/shop/product/category/${categoryId}`;

const categoryCreateUrl = () => `${API_BASE_URL}/api/v1/shop/category`;

// document url templates
const documentDownloadUrl = (documentName) => `${API_BASE_URL}/api/v1/shop/document/download/${documentName}`;

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

const DOCUMENT = {
  DOWNLOAD: documentDownloadUrl,
};

const URLS = {
  CATEGORY,
  PRODUCT,
  DOCUMENT,
};

export default URLS;
