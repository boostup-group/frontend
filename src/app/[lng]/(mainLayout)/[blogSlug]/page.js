import SingleBlog from '@/Components/Blogs/SingleBlog';

// This function tells Next.js which dynamic routes should be statically generated
export async function generateStaticParams() {
  // Fetch all possible blog slugs from the API
  const blogSlugs = await fetch(`${process.env.API_PROD_URL}blog/slugs`)
    .then(res => res.json())
    .catch(err => console.log('Error fetching slugs', err));

  // Return the list of static params for Next.js to generate pages
  return blogSlugs?.map(slug => ({
    blogSlug: slug
  }));
}

// Fetch metadata for each blog
export async function generateMetadata({ params }) {
  // Fetch blog data using the slug from the params
  const blogData = await fetch(`${process.env.API_PROD_URL}blog/slug/${params?.blogSlug}`)
    .then(res => res.json())
    .catch(err => console.log("Error fetching blog data", err));

  // Return metadata for the blog page
  return {
    openGraph: {
      title: blogData?.meta_title,
      description: blogData?.meta_description,
      images: [blogData?.blog_meta_image?.original_url, []],
    },
  };
}

const BlogDetailContent = ({ params }) => {
  return (
    <>
      {params && <SingleBlog params={params?.blogSlug} />}
    </>
  );
};

export default BlogDetailContent;