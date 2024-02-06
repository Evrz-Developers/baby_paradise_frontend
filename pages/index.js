import React from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Category from "@/components/shop/category/Category";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /category when the component mounts
    router.push("/category");
  });

  return (
    <DefaultLayout
      className={
        "min-h-[calc(100vh-89px)] bg-slate-400 flex flex-col items-center justify-center"
      }
    >
      <Category />
    </DefaultLayout>
  );
};

export default Home;
