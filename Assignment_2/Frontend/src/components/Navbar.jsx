const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul>
          <li>
            <Link>
              {" "}
              <a href="#" className="text-white font-bold">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link>
              <a href="#" className="text-gray-300 hover:text-white mx-2">
                Work
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
