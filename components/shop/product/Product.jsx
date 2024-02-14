import React, { useState, useEffect } from "react";
import PRODUCT_API from "@/utilities/shop/product.api";
import List from "../../common/List";
import { useRouter } from "next/router";
import ProductGrid from "./ProductGrid";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const router = useRouter();

  const handleClick = (productId) => {
    router.push(`product/${productId}`);
  };

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PRODUCT_API.getAllProducts();
        setProducts(response?.data);
        console.log('response?.data', response?.data)
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
      {loading ? (
        <div className="loader-container">
          Loading...
        </div>
      ) : (
        <div className="">
          <ProductGrid
            items={products}
            handleListItemClick={handleClick}
            clickable={true}
            showImage={true}
            className={""} />
          {/* <List
            handleListItemClick={handleClick}
            clickable={true}
            items={products}
            showImage={true}
            title={"PRODUCTS"}
            className={""}
          /> */}
        </div>
      )}
    </>
  );
};

export default Product;
