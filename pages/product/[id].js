import DefaultLayout from "@/components/layouts/DefaultLayout";
import ProductDetails from "@/components/shop/product/ProductDetails";
import React from "react";

const ProductDetailsPage = ({ id }) => {
  return (
    <DefaultLayout header={true} footer={false}>
      <ProductDetails productId={id} />
    </DefaultLayout>
  );
};

export const getServerSideProps = ({ query: { id } }) => {
  return { props: { id } };
};

export default ProductDetailsPage;
