import React from 'react';
import Image from "next/image";
import { CustomimageLoader } from '@/components/common/CustomImageLoader';

const ProductGrid = ({ items, handleListItemClick, clickable, showImage, title, className }) => {
    return (
        <div className={`m-2 max-h-[calc(100vh-10px)] xxs:max-h-[calc(100vh-150px)] overflow-y-auto ${className}`}>
            <h2>{title}</h2>
            <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"}>
                {items.map((product) => (
                    <div key={product.id} className="flex flex-col p-4 bg-white items-center rounded-[4px] cursor-pointer" onClick={() => handleListItemClick(product.id)}>
                        <div className='relative w-40 h-40'>
                            <Image
                                src={product.product_image ?? "/images/shop/noImageplacholder.jpg"}
                                alt="product image"
                                sizes="160px"
                                fill
                                style={{
                                    objectFit: 'cover',
                                }}
                                loader={CustomimageLoader}
                                unoptimized
                                className="rounded-[4px]"
                            />
                        </div>
                        <div className="mt-2">
                            <p className="text-lg font-semibold">{product.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
