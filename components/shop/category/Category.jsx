// Import necessary modules
import React, { useState, useEffect } from "react";
import CATEGORY_API from "../../../utilities/shop/category.api";
import List from "../../common/List";
import { useRouter } from "next/router";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const router = useRouter();

  const handleClick = (categoryId) => {
    router.push(`/category/${categoryId}`);
  };

  // Fetch categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CATEGORY_API.getAllCategories();
        setCategories(response?.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
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
      ) : categories && Array.isArray(categories) && categories.length > 0 ? (
        <div className="w-[90%]">
          <h2 className="title flex justify-center text-4xl">CATEGORIES</h2>
          <List items={categories} handleListItemClick={handleClick} />
        </div>
      ) : (
        <div>
          <h2 className="title flex justify-center text-4xl pb-2">
            No categories to show!
          </h2>
        </div>
      )}
    </>
  );
};

export default Category;
