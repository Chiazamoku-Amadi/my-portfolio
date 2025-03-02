const Footer = () => {
  const automaticYear = new Date().getFullYear();

  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex flex-wrap justify-between items-center gap-5">
      <div className="flex gap-3">
        <a href="https://github.com/Chiazamoku-Amadi" target="_blank">
          <span className="social-icon cursor-pointer">
            <img
              src="/assets/github.svg"
              alt="github"
              className="h-1/2 w-1/2"
            />
          </span>
        </a>

        <a href="https://www.linkedin.com/in/chiazamoku-amadi" target="_blank">
          <span className="social-icon">
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="h-1/2 w-1/2"
            />
          </span>
        </a>

        <a
          href="https://x.com/aza_jenny25?t=TyrOKQmiYJamzaspNfK0vQ&s=09"
          target="_blank"
        >
          <span className="social-icon">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="h-1/2 w-1/2"
            />
          </span>
        </a>
      </div>

      <p className="text-white-500">
        ©️ {automaticYear} Chiazamoku Amadi. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
