const Footer = (): JSX.Element => {
  return (
    <>
      <div className="text-xs h-20  grid justify-center content-center text-center">
        <div>Movie DB © {new Date().getFullYear()}</div>
        <div>created by Fahli Robby</div>
      </div>
    </>
  );
};

export default Footer;
