import PRODUCT_API from "@/utilities/shop/product.api";
import React, { useEffect, useState } from "react";
import ListItem from "@/components/common/ListItem";

const ProductDetails = ({ categoryId }) => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchData = async (categoryId) => {
      try {
        // Fetch category details(products)
        const response = await PRODUCT_API.getProduct(categoryId);
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
        <div>
          <h2 className="title flex justify-center text-4xl pb-2">Products</h2>

          {products?.map((product) => (
            <ListItem
              key={product.id}
              name={product.name}
              image={product.product_image}
              showImage={true}
              className={"justify-between p-3 pl-1"}
            />
          ))}
        </div>
      ) : products.length === 0 (
        <div>
          <h2 className="title flex justify-center text-4xl pb-2">
            No Products to Show!
          </h2>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
