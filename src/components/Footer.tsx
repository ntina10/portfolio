const Footer = () => {
  return (
    <footer className="chivo text-zinc-800 text-sm flex justify-between items-center px-4 sm:px-6 lg:px-8 pt-25 pb-6 gap-8">
      <p>
        &copy; {new Date().getFullYear()} Konstantina Freri. All rights
        reserved.
      </p>
      <p>Designed and developed by ME :)</p>
    </footer>
  );
};

export default Footer;
