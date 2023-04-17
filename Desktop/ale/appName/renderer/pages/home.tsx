import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>Welcome to my Nextron desktop app</p>
      <Link href="/sample">
        <a>Go to sample page</a>
      </Link>
    </>
  );
};

export default Home;