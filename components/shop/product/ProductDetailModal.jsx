import React from "react";
import Image from "next/image";
import { CustomimageLoader } from "@/components/common/CustomImageLoader";
const ProductDetailModal = ({ product }) => {
  const formatCurrency = (value) => {
    // Use the Intl.NumberFormat to format the currency with the rupee symbol
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return formatter.format(value);
  };
  return (
    <div className="w-[80%] lg:w-[30%] md:w-[50%] bg-gray-100 p-6 pt-0 rounded-lg shadow-md lg:mt-12">
      <h2 className="title flex justify-center text-heading-4 py-4">
        {product.name}
      </h2>
      <div className="flex justify-center text-heading-4 pb-2">
        <Image
          src={
            product.product_image
              ? product.product_image
              : "/images/shop/noImageplacholder.jpg"
          }
          alt={product.name + "image"}
          width={200}
          height={200}
          loader={CustomimageLoader}
          className="rounded-lg"
        />
      </div>
      <div className="mt-4 bg-gray-50 p-2 rounded-lg opacity-90">
        <h2 className="text-label-info font-semibold mb-1">
          Item code: {product.item_code}
        </h2>
        <p className="text-base text-gray-600 mb-1">
          Category: {product.category.name}
        </p>
        <div className="text-base text-gray-700">
          MRP: {formatCurrency(product.mrp)}
        </div>
        <div className="text-base text-emerald-700 mb-2">
          Retail Price: {formatCurrency(product.retail_price)}
        </div>
        <p className="text-base text-gray-800 mb-4">
          Description: {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetailModal;
