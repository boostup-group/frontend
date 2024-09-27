import NotFoundComponent from "@/Components/404";

export async function generateStaticParams() {
  const languages = ['en', 'fr', 'de']; // Add all your supported languages

  return languages.map(lng => ({
    lng,
    // If [...not-found] is used for a catch-all, no specific params need to be returned
  }));
}

export default function NotFound() {
  return <NotFoundComponent />;
}
