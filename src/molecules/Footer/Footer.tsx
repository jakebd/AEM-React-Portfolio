import "./Footer.css"

const Footer = () => {
  const siteName = "Jacob's Portfolio";
  const siteDescription = "A site built for information projects";
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="mt-5 mb-3 text-secondary">
      &copy; {currentYear} {siteName} - {siteDescription}
    </footer>
  );
};

export default Footer;