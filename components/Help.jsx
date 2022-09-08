const Help = () => {
    return ( 
        <section id='services' className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-5 mb-sm-0 mb-4">
                  <img className="img-fluid rounded mb-0 mb-sm-2" src="/08.jpg" alt="logo"/>
                  <div className="bg-primary rounded pie-chart pie-chart-percentage text-center mt-4">
                    {/* <div className="round-chart" data-percent="65" data-color="#ffffff" data-trackcolor="#212c6b"> <h1>100</h1><span className="percent"></span></div>
                   
                    <h6 className="chart-title text-white mb-0">Commitment</h6> */}
                      <img className="img-fluid rounded" src="/aws.jpg" alt="logo"/>
                  </div>
                </div>
                <div className="col-sm-7">
                  <img className="img-fluid rounded" src="/07.jpg" alt="logo"/>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="section-title">
                <span className="pre-title">Our top Services</span>
                <h2>Business saturation</h2>
              </div>
              <p className=" mb-4">Citimax supplies sources and supplies various ICT products and solutions including installation, testing, maintenance, commissioning and delivery.</p>
              <div className="companies-item mb-4">
                <div className="row d-flex align-items-center">
                  <div className="col-md-4 col-lg-3">
                    <span className="display-4 mb-0 text-dark font-weight-bold">76%</span>
                  </div>
                  <div className="col-md-8 col-lg-9">
                    <h6 className="mb-1">Weather systems</h6>
                    <p className="small mb-0">We survey to better understand client needs and shape possible options</p>
                  </div>
                </div>
                <div className="progress mt-3" style={{height: '7px'}}>
                  <div className="progress-bar" role="progressbar" style={{width: '76%'}} aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="companies-item">
                <div className="row d-flex align-items-center">
                  <div className="col-md-4 col-lg-3">
                    <span className="display-4 mb-0 text-dark font-weight-bold">93%</span>
                  </div>
                  <div className="col-md-8 col-lg-9">
                    <h6 className="mb-1">General supplies</h6>
                    <p className="small mb-0">We help suppliers service clients, which they cannot on their own.</p>
                  </div>
                </div>
                <div className="progress mt-3" style={{height: '7px'}}>
                  <div className="progress-bar" role="progressbar" style={{width: '93%'}} aria-valuenow="93" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Help;