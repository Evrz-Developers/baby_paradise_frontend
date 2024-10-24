import DefaultLayout from "@/components/layouts/DefaultLayout";
import Category from "@/components/shop/category/Category";

const CategoryPage = () => {
  return (
    // min-h-[calc(100vh-1px)]
    <DefaultLayout header={true} footer={false} className={"w-full h-full"}>
      <Category />
    </DefaultLayout>
  );
};

export default CategoryPage;
