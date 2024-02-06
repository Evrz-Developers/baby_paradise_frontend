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
        className={`min-h-[calc(100vh-89px)] bg-slate-400 flex flex-col items-center justify-center ${className}`}
      >
        {children}
      </div>
      {footer ?? <DefaultFooter />}
    </>
  );
};

export default DefaultLayout;
