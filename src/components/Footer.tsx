const Footer = () => {
  return (
    <footer className="footer flex justify-between items-center p-10 pt-25">
      <p>
        &copy; {new Date().getFullYear()} Konstantina Freri. All rights
        reserved.
      </p>
      <p>Designed and developed by ME :)</p>
    </footer>
  );
};

export default Footer;
