import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-700">Hola Mundo</h1>
      <p>Welcome to my Nextron desktop app</p>
      <Link href="/sample">
        <a>Go to sample page</a>
      </Link>
    </>
  );
};

export default Home;