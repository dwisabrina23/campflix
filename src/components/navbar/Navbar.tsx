import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(keyword)}`, { state: { keyword: keyword } });
  };

  return (
    <div className="ctrNavbar">
      <h1 className="txtNavTitle" onClick={() => navigate("/")}>
        Campflix
      </h1>
      <div className="ctrInput">
        <form onSubmit={handleSubmit}>
          <input
            className="stySearchInput"
            type="text"
            value={keyword}
            id="keyword"
            onChange={handleKeywordChange}
            placeholder="Search movie..."
          />
          <button className="btnSearch" type="submit">
            Search
          </button>
        </form>
      </div>
      <div>
        <h3 className="txtName">Dwi Sabrina</h3>
      </div>
    </div>
  );
};

export default Navbar;
