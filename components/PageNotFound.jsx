import Link from "next/link";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const PageNotFound = () => {
  return (
    <DefaultLayout className={'min-h-[calc(100vh-89px)] bg-red-500 flex flex-col items-center justify-center'}>
      {/* Text */}
      <div className='p-10 w-full h-auto text-white text-[3rem]'>
        <span>Oops! Nothing found here. Head back to our </span>
        <Link href='\' className="text-color-primary-p70"> homepage </Link> ?
      </div>
    </DefaultLayout>
  );
};

export default PageNotFound;