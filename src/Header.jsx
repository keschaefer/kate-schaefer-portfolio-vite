const Link = ({ text }) => {
  return <a className="px-4">{text}</a>;
};

const Header = () => {
  return (
    <div className="h-12 flex ">
      <div className="flex justify-center items-end w-full">
        <Link text="about" />
        <Link text="resume" />
        <Link text="work" />
      </div>
    </div>
  );
};

export default Header;
