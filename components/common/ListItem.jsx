import Image from "next/image";
import { CustomimageLoader } from "./CustomImageLoader";
const ListItem = ({ name, image, showImage = false, className, onClick }) => {
  return (
    <div
      className={`flex justify-center items-center text-slate-950 text-[2rem] bg-slate-100 m-2 p-2 rounded-md cursor-pointer text-body-lg leading-10 ${className}`}
      onClick={onClick}
    >
      <div className="flex rounded-lg mx-2">
        {showImage && (
          <Image
            src={image ? image : "/images/shop/noImageplacholder.jpg"}
            alt="product image"
            width={50}
            height={50}
            loader={CustomimageLoader}
            className="rounded-lg"
          />
        )}
      </div>
      <div className={showImage ? `pl-2 mx-3` : ""}>{name}</div>
    </div>
  );
};

export default ListItem;
