function Footer() {
  return (
    <footer role="contentinfo" aria-label="Footer">
      <section aria-labelledby="copyright-heading">
        <h2 id="copyright-heading" className="visually-hidden">
          Copyright
        </h2>
        <p>&copy; 2024 Little Lemon</p>
      </section>

      <section aria-labelledby="contact-heading">
        <h3 id="contact-heading">Contact</h3>
        <ul aria-label="Contact information">
          <li>Address: 123 Main St, City</li>
          <li>Phone: (123) 456-7890</li>
          <li>Email: info@littlelemon.com</li>
        </ul>
      </section>

      <section aria-labelledby="social-heading">
        <h3 id="social-heading">Follow Us</h3>
        <ul aria-label="Social media links">
          <li>
            <a
              href="https://facebook.com"
              aria-label="Visit our Facebook page"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              aria-label="Visit our Instagram page"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              aria-label="Visit our Twitter page"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
