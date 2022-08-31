import Link from "next/link";

const Contact = () => {
    return ( 
        <>
         <div className="inner-header">
      <div className="breadcrumb-title bg-overlay-black-80 bg-dark" data-jarallax='{"speed": 0.5}' style={{backgroundImage: "url('01.jpg')"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-white">Contact Us </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ol className="breadcrumb-list list-unstyled d-flex">
                <li className="breadcrumb-item"><a href="index.html"><i className="fas fa-home mr-1"></i>Home</a></li>
                <li className="breadcrumb-item active"><span>Contact us</span></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ..................................................... */}
    <section className="space-ptb">
    <div className="container">
      <div className="row">
        <div className="col-md-8 pr-md-5 border-right border-md-none">
          {/* <iframe src="https://goo.gl/maps/5CvFSQCGz5Z9P8dR6" style={{border:0, width: '100%', height: '300px'}} allowfullscreen=""></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.791827721037!2d36.779645913735244!3d-1.299715499052033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b1146384663%3A0xd90e0e9abcb51977!2sApplewood%20Adams!5e0!3m2!1sen!2ske!4v1661896053813!5m2!1sen!2ske" style={{border:0, width: '100%', height: '300px'}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-md-4 pl-md-5 mt-md-0 mt-4">
          <h6 className="mb-4"><strong>Applewood Adams off Ngong Rd</strong></h6>
          <p>6th floor, room 607</p>
          <hr className="my-4 my-lg-5"/>
          {/* <p className="mb-0">Applewood Adams off Ngong Rd</p> */}
          <div><strong>Telephone:</strong><span className="text-primary ml-1">(020) 2648525 </span></div>
          <div><strong>E-mail:</strong><span className="text-primary ml-1">info@citimax.co.ke</span></div>
        </div>
      </div>
    </div>
  </section>

{/* ........................................... */}
  <section className="space-pb">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p className="mb-4">Write to us</p>
          <form className="form-flat-style">
            <div className="row">
              <div className="form-group col-md-4">
                <input type="text" className="form-control" placeholder="Your Name"/>
              </div>
              <div className="form-group col-md-4">
                <input type="email" className="form-control" placeholder="Your Email"/>
              </div>
              <div className="form-group col-md-4">
                <input type="text" className="form-control" placeholder="Your Number"/>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <textarea rows="8" className="form-control" id="sector" placeholder="Your Message"></textarea>
              </div>
            </div>
            <Link  href="#">
            <a className="btn btn-primary btn-flat"><i className="btn-icon fas fa-paper-plane"></i><span> Send Message</span></a></Link>
          </form>
        </div>
      </div>
    </div>
  </section>
        </>
     );
}
 
export default Contact;