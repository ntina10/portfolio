const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-10">
      <div className="nav-home">
        <a href="#">Konstantina Freri</a>
      </div>
      <div className="nav-links ">
        <ul className="flex justify-center items-center gap-8">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
