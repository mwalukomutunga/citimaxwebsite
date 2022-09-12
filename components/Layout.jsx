import Link from "next/link";
 import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer className="footer space-ptb bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-4 mb-lg-0 mb-md-5">
              <h6 className="text-white mb-2 mb-sm-4">Contact us</h6>
              <div className="footer-link">
                <ul className="list-unstyled mb-4 mb-sm-0">
                  <li>
                    <Link href="/">
                      <a>(+254) (020) 2648525 </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>P.O.Box 3748-00100 </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a> Nairobi, </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>info@citimax.co.ke.</a>
                    </Link>
                  </li>
                </ul>
                <ul className="list-unstyled mb-4 mb-sm-0">
                  <li>
                    <Link href="/">
                      <a> Nairobi Kenya</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Applewood Adams off Ngong Rd </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>6th floor </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Room 607 </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* ............................. */}
            <div className="col-sm-6 col-lg-3 mb-4 mb-sm-0">
              <h6 className="text-white mb-2 mb-sm-4">Company</h6>
              <div className="footer-link">
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="/">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Who we are</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Locations</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


            {/* ................... */}
            <div className="col-sm-6 col-lg-3">
              <h6 className="text-white mb-2 mb-sm-4">Services</h6>
              <div className="footer-link">
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="/#services">
                      <a>Meteorological Systems, Satellite and Photogrammetry Equipment’s</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services">
                      <a>ICT Services & Solutions </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services">
                      <a>Software design and development </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services">
                      <a>Conference systems</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services">
                      <a>Procurement and General Supplies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services">                     
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
        </div>
      </footer>

      <div id="back-to-top" className="back-to-top">
        <Link href="/">
          <a>
            <i className="fas fa-long-arrow-alt-up"></i>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Layout;
