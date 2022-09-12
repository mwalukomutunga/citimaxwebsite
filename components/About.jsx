import Link from "next/link";

const About = () => {
    return (  <section className="space-ptb">
    <div className="container">
      <div className="row d-flex align-content-center flex-wrap">
        <div className="col-md-4 align-self-center mb-md-0 mb-4">
          <img className="img-fluid rounded" src="/10.jpg" alt=""/>
        </div>
        <div className="col-md-8 align-self-center pl-3 pl-lg-5">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
               <Link href="">               
               <a className="nav-link active" data-toggle="pill" href="/#v-pills-who-we-are" role="tab"  aria-selected="true">OUR STRATEGY</a></Link>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-who-we-are" role="tabpanel" aria-labelledby="v-pills-who-we-are-tab">
                  <div className="row">
                    <div className="col-lg-6 mb-lg-0 mb-4">
                      <h6 className="mb-3">OUR VISION</h6>
                      <p>To provide real solutions using the latest and most reliable available modern technologies</p>
                      <h6 className="mb-3">OUR Mission</h6>
                      <p>To provide our clients with professional IT support, using technologies that guarantees them a versatile communication infrastructure, improved business processes, resilient disaster preparedness and recovery; to ensure business continuity and competitive advantage.</p>
                   
                     
                     
                    </div>
                    <div className="col-lg-6">
                      <h6 className="mb-3">OUR VALUES</h6>
                      <ul className="list">
                        <li><i className="fas fa-check"></i> Honesty</li>
                        <li><i className="fas fa-check"></i> Integrity</li>
                        <li><i className="fas fa-check"></i> Prompt Delivery </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> );
}
 
export default About;