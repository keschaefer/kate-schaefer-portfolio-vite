const Link = ({ text, href }) => {
  return (
    <a rel="noreferrer noopener" href={href} target="_blank" className="px-4">
      {text}
    </a>
  );
};

const Footer = () => {
  return (
    <div className="h-12 flex w-full">
      <div className="flex justify-center items-center w-full">
        <Link text="github" href="https://github.com/keschaefer" />
        <Link
          text="linkedin"
          href="https://www.linkedin.com/in/keschaefer12/"
        />
        <Link text="contact" href="mailto:keschaefer@gmail.com" />
      </div>
    </div>
  );
};

export default Footer;
