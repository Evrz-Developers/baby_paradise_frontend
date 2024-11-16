// Import necessary modules
import React, { useState, useEffect } from "react";
import CATEGORY_API from "../../../utilities/shop/category.api";
import List from "../../common/List";
import { useRouter } from "next/router";
import Product from "../product/Product";
import CategoryNavbar from "../category/CategoryNavbar";
import useCategoryStore from "@/store/categoryStore";
import Loader from "@/components/common/Loader";

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
        <Loader className="bg-opacity-30" />
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
        <div className="flex justify-center items-center h-full pb-60">
          <h2 className="text-xl font-semibold text-gray-800">
            No Products to Show!
          </h2>
        </div>
      )}
    </>
  );
};

export default Dashboard;
