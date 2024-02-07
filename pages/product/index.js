import DefaultLayout from "@/components/layouts/DefaultLayout";
import Product from "@/components/shop/product/Product";
import React from "react";

const ProductPage = () => {
  return (
    <DefaultLayout header={true} footer={false}>
      <Product />
    </DefaultLayout>
  );
};

export default ProductPage;
