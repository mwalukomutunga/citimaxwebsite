const Services = () => {
    return ( 
        <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                {/* <span className="pre-title">We're Good At </span> */}
                <h2>Cloud & ICT infrastructure solutions</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-4">
              <div className="feature-info feature-info-style-2">
                <div className="feature-info-icon">
                  {/* <i className="flaticon-server"></i> */}
                </div>
                <div className="feature-info-content">
                  <h6 className="feature-info-title">Fibre optics</h6>
                  <p>We have specialised in planning, implementing, maintaining, and repairing fibre optic telecommunications infrastructure for network operators.</p>
                  {/* <a href="index-03.html#" className="btn btn-primary btn-block btn-wi"><span>Read More</span></a> */}
                </div>
                <div className="feature-info-bg" style={{backgroundImage:" url('/d3.jpg')"}}></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-4">
              <div className="feature-info feature-info-style-2 active">
                <div className="feature-info-icon">
                  {/* <i className="flaticon-strategy"></i> */}
                </div>
                <div className="feature-info-content">
                  <h6 className="feature-info-title">DATA CENTERS </h6>
                  <p>We are national provider of data centers and colocation services to customers who value reliability, security and flexibility.</p>
                  {/* <a href="index-03.html#" className="btn btn-primary btn-block btn-wi"><span>Read More</span></a> */}
                </div>
                <div className="feature-info-bg" style={{backgroundImage:" url('/datacenter.jpg')"}}></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-info feature-info-style-2">
                <div className="feature-info-icon">
                  <i className="flaticon-flag"></i>
                </div>
                <div className="feature-info-content">
                  <h6 className="feature-info-title">Networking</h6>
                  <p>We provide cost-effective network Internet solution for small to medium sized companies</p>
                  {/* <a href="index-03.html#" className="btn btn-primary btn-block btn-wi"><span>Read More</span></a> */}
                </div>
                <div className="feature-info-bg" style={{backgroundImage:" url('/d4.jpg')"}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Services;