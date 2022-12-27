const Link = ({ text }) => {
  return <a className="px-4">{text}</a>;
};

const Footer = () => {
  return (
    <div className="h-12 flex w-full">
      <div className="flex justify-center items-end w-full">
        <Link text="github" />
        <Link text="LinkedIn" />
        <Link text="contact" />
      </div>
    </div>
  );
};

export default Footer;
