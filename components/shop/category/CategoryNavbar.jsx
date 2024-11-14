import React from 'react';
import Link from 'next/link';

const CategoryNavbar = ({ categories }) => {
    return (
        <nav className="flex bg-white px-4 pt-2 py-1 md:text-base xxs:text-xs border-b-2 border-gray-200 overflow-hidden">
            <div className="flex justify-between items-center overflow-x-auto ">
                <div className="flex space-x-4 ">
                    {categories.map((category) => (
                        <Link key={category.id} href={`/category/${category.id}`} className="bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-950 transition duration-300 whitespace-nowrap rounded-full px-4 py-2">
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default CategoryNavbar;
