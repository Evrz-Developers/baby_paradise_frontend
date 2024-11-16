// Import necessary modules
import React, { useState, useEffect } from "react";
import CATEGORY_API from "../../../utilities/shop/category.api";
import { useRouter } from "next/router";
import CategoryNavbar from "./CategoryNavbar";
import Loader from "@/components/common/Loader";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const router = useRouter();

  // const handleClick = (categoryId) => {
  //   router.push(`/category/${categoryId}`);
  // };

  // Fetch categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CATEGORY_API.getAllCategories();
        setCategories(response?.data); //set categories in zustand store
        console.log('response?.data', response?.data)
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? ( // Check loading state
        <Loader className="bg-opacity-30" />
      ) : categories && Array.isArray(categories) && categories.length > 0 ? (
        // <div className="w-[90%] lg:w-[40%] md:w-[60%] mt-16">
        <div className="w-full xxs:mt-14 md:mt-12">
          <CategoryNavbar categories={categories} />
          {/* <List
            items={categories}
            handleListItemClick={handleClick}
            title={"CATEGORIES"}
          /> */}
        </div>
      ) : (
        <div>
          <h2 className="title flex justify-center text-heading-4 pb-2">
            No categories to show!
          </h2>
        </div>
      )}
    </>
  );
};

export default Category;
