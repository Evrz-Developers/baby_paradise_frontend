import Head from 'next/head';
import { useRouter } from 'next/router';
import DefaultLayout from "@/components/layouts/DefaultLayout";
import ProductDetails from "@/components/shop/product/ProductDetails";
import React from "react";

const ProductDetailsPage = ({ id, product }) => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Product Inquiry" />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.product_image} />
        <meta property="og:url" content={`https://babyparadisestore.netlify.app/product/${id}`} />
        <meta property="og:type" content="product" />
      </Head>
      <DefaultLayout header={true} footer={false}>
        <ProductDetails productId={id} />
      </DefaultLayout>
    </>
  );
};

export const getServerSideProps = async ({ query: { id } }) => {
  const product = await fetch(`https://marginpoint.pythonanywhere.com/api/v1/shop/product/${id}`)
    .then(res => res.json());

  return { props: { id, product } };
};

export default ProductDetailsPage;
