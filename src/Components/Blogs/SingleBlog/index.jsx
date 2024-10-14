'use client';
import { useRouter } from 'next/navigation';
import Breadcrumb from '@/Components/Common/Breadcrumb';
import Sidebar from '../Sidebar/Sidebar';
import BlogCardDetails from '../BlogCardDetails';
import WrapperComponent from '@/Components/Common/WrapperComponent';
import { useQuery } from '@tanstack/react-query';
import request from '@/Utils/AxiosUtils';
import { BlogAPI } from '@/Utils/AxiosUtils/API';

const SingleBlog = ({ params }) => {
  const router = useRouter();

  // Fetch the blog data using the slug (params)
  const { data: Blog, isLoading } = useQuery(
    [params],
    () => request({ url: `${BlogAPI}/slug/${params}` }), 
    { 
      enabled: true, 
      refetchOnWindowFocus: false, 
      select: (res) => res?.data 
    }
  );

  // Redirect to 404 if no blog is found and the request is no longer loading
  if (!Blog && !isLoading) {
    router.push('/not-found');
    return null; // Prevents further rendering of the component
  }

  // Return null if redirecting or still loading
  if (isLoading || !Blog) {
    return null; // Don't render anything during loading or redirection
  }

  return (
    <>
      {/* <Breadcrumb title={Blog?.title} subNavigation={[{ name: 'Blogs', link: '/blogs' }, { name: Blog?.title }]} /> */}
      <WrapperComponent classes={{ sectionClass: 'blog-section section-b-space', row: 'g-4' }} customCol={true}>
        <BlogCardDetails Blog={Blog} key={params} />
        <Sidebar />
      </WrapperComponent>
    </>
  );
};

export default SingleBlog;
