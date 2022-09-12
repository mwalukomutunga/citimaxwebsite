import Link from "next/link";

const Portfolio = () => {
    return (
    <>
     <div className="inner-header">
      <div className="breadcrumb-title bg-overlay-black-80 bg-dark" data-jarallax='{"speed": 0.5}' style={{backgroundImage: 'url("images/bg/01.jpg")'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-white">Business portfolio</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ol className="breadcrumb-list list-unstyled d-flex">
                <li className="breadcrumb-item"><Link  href="/"><a><i className="fas fa-home mr-1"></i>Home</a></Link></li>
                <li className="breadcrumb-item"><Link href="/"><a ><span>Services</span></a></Link></li>
                <li className="breadcrumb-item active"><span>Business portfolio</span></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="space-ptb">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xl-3">
          <ul className="list-unstyled vertical-menu border border-2 rounded p-3">           
            <li><Link  href="/#services"><a><span>Procurement and General Supplies</span></a></Link></li>
            <li><Link  href="/#services"><a><span>Meteorological Systems, Satellite and Photogrammetry </span></a></Link></li>
            <li><Link  href="/#services"><a><span>Software Development ,Deployment and support /ERP Solutions </span></a></Link></li>
            <li><Link  href="/#services"><a><span>ICT Services & Solutions </span></a></Link></li>
          </ul>
          <div className="bg-dark rounded p-4 mb-md-0 mb-5">
            <span className="lead text-primary font-weight-bold">Are you looking for a customizing service? Please contact us</span>
            <h6 className="text-white mt-3">(+254) (020) 2648525</h6>
            <span className="text-white">info@citimax.co.ke</span>
          </div>
        </div>
        <div className="col-md-8 col-xl-9">
          <img className="img-fluid mb-4" src="06.jpg" alt=""/>
          <div className="mb-md-5 mb-4">
            <h4 className="mb-4">Research</h4>
            <p className="lead mb-0">Citimax Technologies Limited has heavily invested in research in the field of IT to keep pace with fast evolving technology. We have also partnered with leading IT support firms in the country and internationally to ensure that we give our clients nothing short of the best. </p>
          </div>
          <div className="d-flex bg-primary rounded p-4 p-sm-5 mb-md-5 mb-4">
            <i className="fas fa-6x mt-n3 opacity-1 fa-quote-left quote-icon text-dark"></i>
            <h6 className="text-white font-weight-normal mb-0 ml-n5 ml-sm-n4">In today’s complex and fast-moving world, what we need even more than foresight or hindsight is insight</h6>
          </div>
          <h2>Our core stregths</h2>
          <div className="row">
           
            <div className="col-sm-6 mb-md-5 mb-3">
              <ul className="list">
                <li><i className="fas fa-check"></i> Customer-centric approach</li>
                <li><i className="fas fa-check"></i> Strong vision </li>
                <li><i className="fas fa-check"></i> Passionate leaders </li>
                <li><i className="fas fa-check"></i> Empowered employees </li>
              </ul>
            </div>
            <div className="col-sm-6 mb-md-5 mb-4">
              <ul className="list">
                <li><i className="fas fa-check"></i> Positivity </li>
                <li><i className="fas fa-check"></i> Accountability </li>
                <li><i className="fas fa-check"></i> Problem solvers</li>
                <li><i className="fas fa-check"></i> Commitment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </> );
}
 
export default Portfolio;