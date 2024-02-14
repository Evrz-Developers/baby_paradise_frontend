import React from "react";
import DefaultFooter from "@/components/layouts/DefaultFooter";
import DefaultHeader from "@/components/layouts/DefaultHeader";

const DefaultLayout = ({
  children,
  className,
  header = true,
  footer = true,
}) => {
  return (
    <>
      {header && <DefaultHeader />}
      <div
      // min-h-[calc(100vh-1px)]
        className={`bg-gray-100 flex flex-col items-center justify-center ${className}`}
      >
        {children}
      </div>
      {footer ?? <DefaultFooter />}
    </>
  );
};

export default DefaultLayout;
