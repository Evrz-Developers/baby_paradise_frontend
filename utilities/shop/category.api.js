import URLS from "../urls";

const getAllCategories = async () => {
  try {
    const response = await fetch(URLS.CATEGORY.READ_MANY());
    response.data = await response.json();
    return response;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const getCategory = async (id) => {
  try {
    const response = await fetch(URLS.CATEGORY.READ_ONE(id));
    response.data = await response.json();
    return response;
  } catch (error) {
    console.error("Error fetching category details:", error);
    throw error;
  }
};

const CATEGORY_API = {
  getAllCategories,
  getCategory,
};

export default CATEGORY_API;
