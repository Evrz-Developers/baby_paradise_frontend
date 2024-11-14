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
        className={`bg-white flex flex-col items-center justify-center mt-4 ${className}`}
      >
        {children}
      </div>
      {footer ?? <DefaultFooter />}
    </>
  );
};

export default DefaultLayout;
