import "../Css/Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            E-Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li style={{ padding: "0px 20px" }} className="nav-item p-20">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li style={{ padding: "0px 20px" }} className="nav-item">
                <a className="nav-link p-10" href="#">
                  Cart
                </a>
              </li>
              <li style={{ padding: "0px 40px" }} className="nav-item">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </li>
            </ul>
            <hr />
            <div style={{ padding: "0px 10px" }}>
              <img
                style={{ width: "10px", border: "50%", height: "10px" }}
                src="../download.png"
                alt=""
              />
              <span>UserName</span>
            </div>
            <hr />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
