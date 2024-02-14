import React, { useState } from "react";
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

  const [showRetailPrice, setShowRetailPrice] = useState(false);
  const toggleRetailPrice = () => {
    setShowRetailPrice((prev) => !prev);
  };

  return (
    <div className="flex xxs:flex-col sm:flex-row h-[calc(100vh-50px)]  w-full p-2 pt-0 rounded-lg shadow-md lg:mt-12 mt-16">
      <div className="flex justify-center items-center xxs:h-1/2 md:h-full flex-grow lg:w-2/5">
        <div className="flex justify-center text-heading-4 p-5 relative xxs:w-96 xxs:h-96 md:w-[95%] md:h-[95%] ">
          <Image
            src={
              product.product_image
                ? product.product_image
                : "/images/shop/noImageplacholder.jpg"
            }
            alt={product.name + "image"}
            sizes="384px"
            fill
            style={{
              objectFit: 'cover',
            }}
            loader={CustomimageLoader}
            unoptimized
            className="rounded-[4px]"
          />
        </div>
      </div>
      <div className="xxs:h-3/5 md:h-full flex-grow lg:w-3/5 px-4">
        <h2 className="title flex justify-normal text-heading-3 py-4">
          {product.name}
        </h2>
        {product.description &&
          <p className="text-lg text-gray-800">
            {product.description}
          </p>}
        <h2 className="text-label-info text-[20px] font-semibold mb-1">
          Item code: {product.item_code}
        </h2>
        <p className="text-base text-gray-600 mb-1">
          Category: {product?.category?.name}
        </p>
        <div className="text-base text-gray-700">
          MRP: {formatCurrency(product.mrp)}
        </div>
        <div className="text-base text-emerald-700 mt-2">
          {`Retail Price: ${showRetailPrice ? formatCurrency(product?.retail_price) : 'N/A'}`}
        </div>
        <div onClick={toggleRetailPrice}>
          ({showRetailPrice ? (
            "Hide"
          ) : (
            "Show"
          )})
        </div>

      </div>
    </div >
  );
};

export default ProductDetailModal;
