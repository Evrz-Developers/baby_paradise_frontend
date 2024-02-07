import CATEGORY_API from "@/utilities/shop/category.api";
import React, { useEffect, useState } from "react";
import List from "@/components/common/List";
import { useRouter } from "next/router";

const CategoryDetails = ({ categoryId }) => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true); // Added loading state
  const router = useRouter();

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
      {loading ? ( // Check loading state
        <div className="loader-container">
          {/* Add your loader component or animation here */}
          Loading...
        </div>
      ) : products && Array.isArray(products) && products.length > 0 ? (
        <div className="w-[90%] lg:w-[40%] md:w-[60%]">
          <h2 className="title flex justify-center text-heading-4">PRODUCTS</h2>
          <List
            items={products}
            handleListItemClick={handleClick}
            clickable={true}
            showImage={true}
          />
        </div>
      ) : (
        <div>
          <h2 className="title flex justify-center text-heading-4 pb-2">
            No Products to Show!
          </h2>
        </div>
      )}
    </>
  );
};

export default CategoryDetails;
