import URLS from "../urls";

const getDocument = async (name) => {
  try {
    const response = await fetch(URLS.DOCUMENT.DOWNLOAD(name));
    response.data = await response.json();
    return response;
  } catch (error) {
    console.error("Error fetching category details:", error);
    throw error;
  }
};

const DOCUMENT_API = {
  getDocument,
};

export default DOCUMENT_API;
