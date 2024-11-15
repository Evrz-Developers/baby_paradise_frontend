import React from 'react';
import Image from "next/image";
import { CustomimageLoader } from '@/components/common/CustomImageLoader';

const ProductGrid = ({ items, handleListItemClick, title, className }) => {
    return (
        <div className={`xxs:max-h-[calc(100vh-150px)] md:max-h-[calc(100vh-100px)] overflow-y-auto overscroll-y-none ${className}`}>
            <h2>{title}</h2>
            <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"}>
                {items.map((product) => (
                    <div key={product.id} className="flex flex-col p-4 bg-white items-center rounded-[4px] cursor-pointer" onClick={() => handleListItemClick(product.id)}>
                        <div className='relative w-48 md:w-full h-60'>
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
                        <div className="flex flex-col items-center xxs:items-start mt-2 mb-1 ">
                            <p className="text-lg font-medium">{product.name}</p>
                            <p className="text-xl font-medium"><span className="text-base" style={{ verticalAlign: 'top' }}>₹</span>{product.retail_price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
