import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-3 z-10 flex w-full items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
        <Link href="#home" className="nav-item">
          Home
        </Link>
        <Link href="#projects" className="nav-item">
          Projects
        </Link>
        <Link href="#about" scroll className="nav-item">
          About
        </Link>
        <Link
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          style={{ scrollBehavior: "smooth" }}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
