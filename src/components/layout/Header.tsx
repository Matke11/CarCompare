import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4 flex items-center text-center">
      <Link href="/" className="text-2xl font-bold">
        CarCompare
      </Link>
    </header>
  );
};

export default Header;
