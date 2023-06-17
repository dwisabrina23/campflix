const Navbar = () => {
  return (
    <div className="ctrNavbar">
      <h1 className="txtTitle">Campflix</h1>
      <div className="ctrInput">
        <input
          className="stySearchInput"
          type="text"
          id="keyword"
          placeholder="search movie"
        />
      </div>
    </div>
  );
};

export default Navbar;
