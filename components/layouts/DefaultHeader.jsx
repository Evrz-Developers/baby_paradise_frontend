import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import DOCUMENT_API from "@/utilities/shop/document.api";

const DefaultHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [documentUrl, setDocumentUrl] = useState();
  const router = useRouter();
  const [tapCount, setTapCount] = useState(0);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleTap = () => {
    setTapCount(prevCount => prevCount + 1);
  };

  // fetching the app url
  useEffect(() => {
    const fetchData = async (name) => {
      try {
        const response = await DOCUMENT_API.getDocument(name);
        setDocumentUrl(response?.data?.file);
      } catch (error) {
        console.error("Error fetching Document details:", error);
      }
    };
    fetchData("app");
  }, []);

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

  useEffect(() => {
    if (tapCount >= 5) {
      // Redirect to the admin page
      window.location.href = "https://marginpoint.pythonanywhere.com/admin/";
    }
  }, [tapCount]);

  return (
    <header className="w-full px-4 py-4 shadow-md fixed top-0 bg-white z-10">
      <ContentWrapper>
        <div className="flex justify-between items-center">
          {/* Title */}
          <Link href="/" className="xxs:text-sm md:text-md">Baby Paradise</Link>
          <div onClick={handleTap} className="cursor-pointer text-center md:ml-28 xxs:mr-20">
            ⠀⠀⠀⠀
          </div>
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
                className="absolute top-full  mt-2 right-0 bg-white border border-gray-300 rounded-md shadow-lg"
              >
                <ul className="py-2 px-4">
                  {/* <li>
                    <Link
                      href={"https://marginpoint.pythonanywhere.com/admin/"}
                    >
                      Admin
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href={"/category"}>Categories</Link>
                  </li> */}
                  <li>
                    <Link href={"/product"} className={router.pathname === "/product" ? "font-bold" : ""}>Products</Link>
                  </li>
                  <li>
                    <Link href={`${documentUrl}`}>Get App</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Navbar */}
          <div className={`lg:flex pr-3 items-center hidden`}>
            <ul className="flex gap-5 text-xs">
              {/* <li>
                <Link href={"https://marginpoint.pythonanywhere.com/admin/"}>
                  Admin
                </Link>
              </li> */}
              {/* <li>
                <Link href={"/category"}>Categories</Link>
              </li> */}
              <li>
                <Link href={"/product"} className={router.pathname === "/product" ? "font-bold" : ""}>Products</Link>
              </li>
              <li>
                <Link href={`${documentUrl}`}>Get App</Link>
              </li>
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default DefaultHeader;
