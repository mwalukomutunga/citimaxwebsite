import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="header header-style-02">
        <div className="header-top d-none d-md-block py-3">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-xl-3">
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      className="img-fluid"
                      src="images/logo.png"
                      alt="logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-xl-9 d-block d-md-flex justify-content-xl-end justify-content-center">
                <div className="d-flex mr-3 mr-md-5">
                  <i className="far fa-2x fa-map text-dark mt-1"></i>
                  <div className="ml-3">
                    <span className="text-dark font-weight-bold">
                      Applewood Adams off Ngong Rd{" "}
                    </span>
                    <p className="mb-0 small">6th floor, Room 607 </p>
                  </div>
                </div>
                <div className="d-flex mr-3 mr-md-5">
                  <i className="fas fa-2x fa-mobile-alt text-dark mt-1"></i>
                  <div className="ml-3">
                    <span className="text-dark font-weight-bold">
                      (020) 2648525{" "}
                    </span>
                    <p className="mb-0 small">Mon-Fri 8:00am-5:30pm </p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="far fa-2x fa-envelope text-dark mt-1"></i>
                  <div className="ml-3">
                    <span className="text-dark font-weight-bold">
                      info@citimax.co.ke{" "}
                    </span>
                    <p className="mb-0 small">24 X 7 online support </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header header-bottom header-sticky bg-dark">
          <nav className="navbar navbar-static-top navbar-expand-xl">
            <div className="container position-relative">
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <i className="fas fa-align-left"></i>
              </button>
              <Link href="/">
                <a className="navbar-brand mr-5">
                  <img className="img-fluid" src="images/logo.png" alt="logo" />
                </a>
              </Link>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="nav-item dropdown">
                    <Link href="/">
                      <a
                        className="nav-link"
                        id="navbarDropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link href="/#services">
                      <a
                        className="nav-link"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Services
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link href="/portfolio">
                      <a
                        className="nav-link"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Portfolio
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link href="/about">
                      <a
                        className="nav-link"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        About us
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link href="/contact">
                      <a
                        className="nav-link"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Contact us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <Link href="/contact">
                <a className="btn btn-outline-primary btn-md mr-5 mr-xl-0 d-none d-sm-block">
                  <i className="btn-icon fas fa-long-arrow-alt-right"></i>
                  <span> Get in touch </span>
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
