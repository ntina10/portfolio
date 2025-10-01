const Footer = () => {
  return (
    <footer className="chivo text-[#9d5454] flex justify-between items-center p-10 pt-25 gap-8">
      <p>
        &copy; {new Date().getFullYear()} Konstantina Freri. All rights
        reserved.
      </p>
      <p>Designed and developed by ME :)</p>
    </footer>
  );
};

export default Footer;
