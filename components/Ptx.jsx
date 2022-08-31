import Link from "next/link";

const PTX = () => {
  return (
    <>
      <section className="space-ptb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="row">
                <div className="col-sm-6 mb-sm-0 mb-4">
                  <div className="bg-primary rounded pie-chart p-4 p-sm-5 pie-chart-percentage text-center mb-0 mb-sm-1">
                    <div
                      className="round-chart"
                      data-percent="85"
                      data-color="#ffffff"
                      data-trackcolor="#212c6b"
                    ><h1>90</h1>
                      <span className="percent"></span>
                    </div>
                    <h6 className="chart-title text-white mb-0">Success Rate</h6>
                  </div>
                  <img
                    className="img-fluid rounded mt-4"
                    src="/05.jpg"
                    alt="logo"
                  />
                </div>
                <div className="col-sm-6 mt-sm-5 mt-0">
                  <img
                    className="img-fluid rounded mt-0 mt-sm-4 mb-1"
                    src="/06.jpg"
                    alt="logo"
                  />
                  <div className="counter bg-dark p-4 p-sm-5 mt-4 counter-with-plus">
                    <div className="counter-item">
                      <div className="counter-content">
                        <span
                          className="timer text-white display-4"
                          data-to="2730"
                          data-speed="1000"
                        >
                          2730
                        </span>
                        <p className="mt-3 text-white">
                          <b>
                            Commit the plan to paper and then keep it with you
                            at all times.
                          </b>
                        </p>
                        <Link  href="/">
                        <a
                          className="btn btn-sm btn-outline-light"
                         
                        >
                          <i className="btn-icon fas fa-long-arrow-alt-right"></i>
                          <span>Read more</span>
                        </a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <div className="section-title">
                <span className="pre-title">We are good at </span>
                <h2>Innovation, Creativity and Business growth</h2>
              </div>
              <p className="mb-4">
              Citimax Technologies Limited has heavily invested in research in the field of IT to keep pace with fast evolving technology. We have also partnered with leading IT support firms in the country and internationally to ensure that we give our clients nothing short of the best.
              </p>
              <div className="row">
                <div className="col-sm-6 mb-sm-5 mb-3 mt-2">
                  <ul className="list">
                    <li>
                      <i className="fas fa-check"></i>We invest in research
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Utilize locally available resources
                    </li>
                    <li>
                      <i className="fas fa-check"></i>We work with local businesses 
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 mb-sm-5 mb-3 mt-2">
                  <ul className="list">
                    <li>
                      <i className="fas fa-check"></i>Committed team
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Timely delivery
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Build great relationships
                    </li>
                  </ul>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PTX;
