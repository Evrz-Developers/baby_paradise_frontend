import CATEGORY_API from "@/utilities/shop/category.api";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useCategoryStore from "@/store/categoryStore";
import CategoryNavbar from "./CategoryNavbar";
import ProductGrid from "../product/ProductGrid";

const CategoryDetails = ({ categoryId }) => {
  const router = useRouter();
  const { categories } = useCategoryStore();
  const [products, setProducts] = useState();
  const [isLoading, setLoading] = useState(true);

  const handleClick = (id) => {
    router.push(`/product/${id}`);
  };

  useEffect(() => {
    const fetchData = async (categoryId) => {
      try {
        // Fetch category details(products)
        const response = await CATEGORY_API.getCategory(categoryId);
        setProducts(response?.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched (success or error)
      }
    };
    fetchData(categoryId);
  }, [categoryId]);

  return (
    <>
      {isLoading ? ( // Check loading state
        <div className="loader-container">
          {/* Add your loader component or animation here */}
          Loading...
        </div>
      ) : (
        <div className="h-full w-full xxs:mt-16 md:mt-14 fixed top-0">
          <CategoryNavbar categories={categories} />
          {products && Array.isArray(products) && products.length > 0 ? (
            <div className={"w-full h-full pt-4"}>
              <div className="px-4 overflow-y-auto overscroll-y-none">
                <ProductGrid
                  items={products}
                  handleListItemClick={handleClick}
                  clickable={true}
                  showImage={true}
                  className={""} />
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full pb-60">
              <h2 className="text-xl font-semibold text-gray-800">
                 No Products to Show!
              </h2>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CategoryDetails;
