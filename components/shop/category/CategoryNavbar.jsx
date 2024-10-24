import React from 'react';
import Link from 'next/link';

const CategoryNavbar = ({ categories }) => {
    return (
        <nav className="flex bg-gray-800s bg-slate-400 px-3 py-2 md:text-base xxs:text-xs">
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    {categories.map((category) => (
                        <Link key={category.id} href={`/category/${category.id}`} className="text-white hover:text-gray-300 transition duration-300">
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default CategoryNavbar;
