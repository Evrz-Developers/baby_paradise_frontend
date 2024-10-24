import DefaultLayout from "@/components/layouts/DefaultLayout";
import Product from "@/components/shop/product/Product";
import React from "react";

const ProductPage = () => {
  return (
    <DefaultLayout header={true} footer={false}>
      <div className="h-full w-full xxs:mt-11 md:mt-9 fixed top-0">
        {/* <div className={"w-full h-full"}> */}
        {/* <h2 className="title flex justify-center text-heading-6 pt-3 "> */}
            All Products
        {/* </h2> */}
          <Product />
        {/* </div> */}
      </div>
    </DefaultLayout>
  );
};

export default ProductPage;
