import { Link } from 'react-router-dom';

const NavBar = () => {
    const navItems = [
      { title: "Home", link: "#hero" },
      { title: "About", link: "#about" },
      { title: "Games", link: "/games" },
      { title: "Dates", link: "#dates" },
      { title: "Login", link: "/login" },
    ];
      
  return (
    <nav className="z-50 bg-gray-600 text-neutral-300 flex justify-between px-8 py-2 items-center h-[10vh] fixed w-full">
      <img src="/logo.png" alt="logo" className="size-24 p-2" />
      <h1 className="font-semibold text-xl">Excel 2025</h1>
      <div className="flex gap-4 px-2 text-lg">
        {navItems.map((item) =>
          item.link.startsWith("/") ? (
            <Link
              to={item.link}
              key={item.title}
              className="hover:text-neutral-700"
            >
              {item.title}
            </Link>
          ) : (
            <a
              href={item.link}
              key={item.title}
              className="hover:text-neutral-700"
            >
              {item.title}
            </a>
          )
        )}
      </div>
    </nav>
  );
}

export default NavBar