import React from "react";
import Image from "next/image";
import { CustomimageLoader } from "./CustomImageLoader";
const ListItem = ({ name, image, showImage = false, className, onClick }) => {
  return (
    <div
      className={`flex justify-center items-center text-slate-950 text-[2rem] bg-gray-200 m-2 rounded-md cursor-pointer ${className}`}
      onClick={onClick}
    >
      {showImage && (
        <Image
          src={image ? image : "/images/shop/noImageplacholder.jpg"}
          alt="product image"
          width={50}
          height={50}
          loader={CustomimageLoader}
        />
      )}
      {name}
    </div>
  );
};

export default ListItem;
