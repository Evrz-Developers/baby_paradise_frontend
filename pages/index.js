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
      <Dashboard />
    </DefaultLayout>
  );
};

export default Home;
