import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        CarCompare
      </Link>
      <div className="flex gap-6">
        <Link href="/compare" className="hover:text-gray-300">
          Compare
        </Link>
        <Link href="/browse" className="hover:text-gray-300">
          Browse
        </Link>
      </div>
    </header>
  );
};

export default Header;
