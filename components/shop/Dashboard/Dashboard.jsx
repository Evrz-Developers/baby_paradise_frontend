// Import necessary modules
import React, { useState, useEffect } from "react";
import CATEGORY_API from "../../../utilities/shop/category.api";
import List from "../../common/List";
import { useRouter } from "next/router";
import Product from "../product/Product";
import CategoryNavbar from "../category/CategoryNavbar";
import useCategoryStore from "@/store/categoryStore";

const Dashboard = () => {
  const { categories, setCategories, setLoading, isLoading } = useCategoryStore();
  const router = useRouter();
  const handleClick = (categoryId) => {
    router.push(`/category/${categoryId}`);
  };

  // Fetch categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CATEGORY_API.getAllCategories();
        setCategories(response?.data); //set categories in zustand store
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
      {isLoading ? (
        <div className="loader-container">
          Loading...
        </div>
      ) : categories && Array.isArray(categories) && categories.length > 0 ? (
        <>
          <div className="h-full w-full xxs:mt-16 md:mt-14 fixed top-0">
            <CategoryNavbar categories={categories} />
            <div className={"w-full h-full pt-4"}>
              <Product />
            </div>
          </div>
        </>
      ) : (
        <div>
          <h2 className="title flex justify-center text-heading-4">
            Nothing to show!
          </h2>
        </div>
      )}
    </>
  );
};

export default Dashboard;
