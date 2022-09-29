const Header = ({ titulo }) => {
  return (
    <header className="header">
      <h1>{titulo}</h1> 
      {/* recibe titulo desde app.jsx */}
    </header>
  );
};

export default Header;
