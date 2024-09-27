import SingleBlog from '@/Components/Blogs/SingleBlog';

// This function tells Next.js which dynamic routes should be statically generated
export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.API_PROD_URL}blog/slugs`);
    const blogSlugs = await response.json();

    // Check if blogSlugs is an array
    if (!Array.isArray(blogSlugs)) {
      console.error('Invalid data format: expected an array, but received:', blogSlugs);
      return []; // Return an empty array if the data is not in the expected format
    }

    // Return the list of slugs to be used for static generation
    return blogSlugs.map(slug => ({
      blogSlug: slug
    }));

  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return []; // Return an empty array if there's an error
  }
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