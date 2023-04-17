import Link from "next/link";

const Sample = () => {
  return (
    <>
      <div>
        <h1 className="bg-indigo-500">Hello world</h1>
        <p>Welcome to sample page</p>
        <Link href="/home" >
          {/* <a> */}
         <button className="bg-indigo-500">Go Home</button>
            {/* </a> */}
        </Link>
      </div>
    </>
  );
};

export default Sample;