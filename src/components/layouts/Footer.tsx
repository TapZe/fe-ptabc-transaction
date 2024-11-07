const AUTHOR_NAME = "Muhammad Nabil Muyassar Rahman";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-300 text-base-content p-4 md:px-10">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            {AUTHOR_NAME}.
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
