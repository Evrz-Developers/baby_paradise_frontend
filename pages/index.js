import React from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Dashboard from "@/components/shop/Dashboard/Dashboard";
import Head from 'next/head';

const Home = () => {
  return (
    <DefaultLayout header={true} footer={false}
      className={
        // min-h-[calc(100vh-89px)]
        "min-h-[calc(100vh-1px)]  flex flex-col items-center justify-center h-full w-full"
      }
    >
      <Head>
        <meta property="og:title" content="Baby Paradise" />
        <meta property="og:description" content="Baby Paradise is a one stop shop for all your kids' needs." />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://babyparadisestore.netlify.app" />
        <meta property="og:type" content="website" />
      </Head>
      <Dashboard />
    </DefaultLayout>
  );
};

export default Home;
