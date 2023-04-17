import Link from "next/link";

const Layout = ({ children }) => {
  
  return (
    <>
      <nav className="flex-1 ...">
        <h2 className="bg-blue-100 text-gray-700">Nav Logo</h2>

        <div className="flex-1 ...">
          <div className="flex-1 ..." >
            <Link href="/sample">
              <button className="bg-blue-100 text-gray-700">Home</button>
            </Link>
          </div>
          <div className="flex-1 ...">
            <Link href="/home">
              <button className="bg-blue-100 text-gray-700">Sample</button>
            </Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <div className="flex ...">
  <div className="flex-1 ...">01</div>
  <div className="contents">
    <div className="flex-1 ...">02</div>
    <div className="flex-1 ...">03</div>
  </div>
  <div className="flex-1 ...">04</div>
</div>
    </>
  );
};

export default Layout;
