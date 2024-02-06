import DefaultLayout from "@/components/layouts/DefaultLayout";
import Category from "@/components/shop/category/Category";

const CategoryPage = () => {
  return (
    <DefaultLayout header={true} footer={false}>
      <Category />;
    </DefaultLayout>
  );
};

export default CategoryPage;
