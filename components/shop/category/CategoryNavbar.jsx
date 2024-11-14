import React from 'react';
import Link from 'next/link';

const CategoryNavbar = ({ categories }) => {
    return (
        <nav className="flex bg-white px-4 py-2 md:text-base xxs:text-xs border-2 border-gray-300 overflow-hidden">
            <div className="flex justify-between items-center overflow-x-auto ">
                <div className="flex space-x-4 ">
                    {categories.map((category) => (
                        <Link key={category.id} href={`/category/${category.id}`} className="text-gray-700 hover:text-gray-950 transition duration-300 whitespace-nowrap">
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default CategoryNavbar;
