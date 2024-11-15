import React, { useState } from "react";
import Image from "next/image";
import { CustomimageLoader } from "@/components/common/CustomImageLoader";
import WhatsAppButton from "@/components/common/WhatsappButton";

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
        <h2 className="title flex justify-normal text-heading-4 font-semibold py-2">
          {product.name} <span className="text-sm">[{product.item_code}]</span>
        </h2>
        <p className="text-lg font-medium line-through"><span className="text-sm" style={{ verticalAlign: 'top' }}>₹</span>{product?.mrp}</p>
        <p className="text-2xl font-medium"><span className="text-base" style={{ verticalAlign: 'top' }}>₹</span>{product?.retail_price}</p>
        {product.description &&
          <><h3 className="text-lg font-medium py-1">Product Details</h3><p className="text-lg text-gray-800 break-words py-1">
            {product.description}
          </p></>}
        {/* <p className="text-base text-gray-600 mb-1">
          Category: {product?.category?.name}
        </p> */}
        <WhatsAppButton product={product} />
      </div>
    </div >
  );
};

export default ProductDetailModal;
