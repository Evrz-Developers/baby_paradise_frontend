import DefaultLayout from "@/components/layouts/DefaultLayout";
import CategoryDetails from "@/components/shop/category/CategoryDetails";

const CategoryDetailsPage = ({ id }) => {
  return (
    <DefaultLayout>
      <CategoryDetails categoryId={id} />;
    </DefaultLayout>
  );
};

export const getServerSideProps = ({ query: { id } }) => {
  return { props: { id } };
};

export default CategoryDetailsPage;
