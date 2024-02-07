import Link from "next/link";
import React, { useEffect, useState } from "react";
import ContentWrapper from "@/components/layouts/ContentWrapper";

const DefaultHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const dropdown = document.getElementById("dropdown"); // Replace "dropdown" with the actual ID of your dropdown container
      if (dropdown && !dropdown.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full p-3 shadow-md fixed top-0 bg-white z-10">
      <ContentWrapper>
        <div className="flex justify-between">
          {/* Title */}
          <Link href="/">Margin Point</Link>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden relative">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div
                id="dropdown"
                className="absolute top-full  mt-2 -right-3 bg-white border border-gray-300 rounded-md shadow-lg"
              >
                <ul className="py-2 px-4">
                  <li>
                    <Link
                      href={"https://marginpoint.pythonanywhere.com/admin/"}
                    >
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link href={"/category"}>Categories</Link>
                  </li>
                  <li>
                    <Link href={"/product"}>Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Navbar */}
          <div className={`lg:flex items-center hidden`}>
            <ul className="flex gap-5 text-xs">
              <li>
                <Link href={"https://marginpoint.pythonanywhere.com/admin/"}>
                  Admin
                </Link>
              </li>
              <li>
                <Link href={"/category"}>Categories</Link>
              </li>
              <li>
                <Link href={"/product"}>Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default DefaultHeader;
