import "./navbar.css";

const Navbar = () => {
  return (
    <div className="ctrNavbar">
      <h1 className="txtTitle">Campflix</h1>
      <div className="ctrInput">
        <input className="stySearchInput" type="text" id="keyword" placeholder="search movie" />
      </div>
      <div>
        <h3 className="txtName">Dwi Sabrina</h3>
      </div>
    </div>
  );
};

export default Navbar;
