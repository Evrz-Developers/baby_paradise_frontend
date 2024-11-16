import React from "react";
import Image from "next/image";
import { CustomimageLoader } from "@/components/common/CustomImageLoader";
import OrderViaWhatsappButton from "@/components/common/OrderViaWhatsappButton";

const ProductDetailModal = ({ product }) => {

  return (
    <div className="flex xxs:flex-col sm:flex-row h-[calc(100vh-50px)]  w-full p-2 pt-0 rounded-lg shadow-md lg:mt-12 mt-14">
      <div className="flex justify-center items-center xxs:h-1/2 md:h-full flex-grow lg:w-2/5">
        <div className="flex justify-center text-heading-4 p-4 relative w-[97%] h-full md:h-[97%]">
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
      <div className="xxs:h-3/5 md:h-full flex-grow lg:w-3/5 px-2">
        <h2 className="title flex justify-normal text-heading-4 font-semibold py-2">
          {product.name} <span className="text-sm">[{product.item_code}]</span>
        </h2>
        <p className="text-lg font-medium line-through"><span className="text-sm" style={{ verticalAlign: 'top' }}>₹</span>{product?.mrp}</p>
        <p className="text-2xl font-medium"><span className="text-base" style={{ verticalAlign: 'top' }}>₹</span>{product?.retail_price}</p>
        {product.description &&
          <><h3 className="text-lg font-medium py-1">Product Details</h3><p className="text-lg text-gray-800 break-words py-1">
            {product.description}
          </p></>}
        <OrderViaWhatsappButton product={product} className="mt-4" />
      </div>
    </div >
  );
};

export default ProductDetailModal;
