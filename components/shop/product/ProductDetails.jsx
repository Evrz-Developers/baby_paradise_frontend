import PRODUCT_API from "@/utilities/shop/product.api";
import React, { useEffect, useState } from "react";
import ProductDetailModal from "@/components/shop/product/ProductDetailModal";

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchData = async (productId) => {
      try {
        // Fetch product details
        const response = await PRODUCT_API.getProduct(productId);
        setProduct(response?.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched (success or error)
      }
    };
    fetchData(productId);
  }, [productId]);
  return (
    <>
      {loading ? ( // Check loading state
        <div className="loader-container">
          {/* Add your loader component or animation here */}
          Loading...
        </div>
      ) : product &&
        typeof product === "object" &&
        Object.keys(product).length > 0 ? (
        <ProductDetailModal product={product} />
      ) : (
        <div>
          <h2 className="title flex justify-center text-heading-4 pb-2">
            No details to show!
          </h2>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
