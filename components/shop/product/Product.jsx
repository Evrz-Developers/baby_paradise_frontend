// Import necessary modules
import React, { useState, useEffect } from "react";
import PRODUCT_API from "@/utilities/shop/product.api";
import List from "../../common/List";
import { useRouter } from "next/router";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const router = useRouter();

  const handleClick = (categoryId) => {
    router.push(`/${categoryId}`);
  };

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PRODUCT_API.getAllProducts();
        setProducts(response?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched (success or error)
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? ( // Check loading state
        <div className="loader-container">
          {/* Add your loader component or animation here */}
          Loading...
        </div>
      ) : (
        <div className="w-[90%]">
          <h2 className="title flex justify-center text-4xl">PRODUCTS</h2>
          <List
            items={products}
            handleListItemClick={handleClick}
            clickable={false}
          />
        </div>
      )}
    </>
  );
};

export default Product;
