
const Slider = () => {
    return ( <>   
    <section className="slider-01">
      <div id="main-slider" className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide-01" style={{backgroundImage: "url('images/slider/home-01/01.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8 col-md-10 pr-md-5">
                  <div className="banner-content">
                    <div className="content">
                      <h2 className="animated mb-4 text-white h1" data-swiper-animation="fadeInUp" data-duration="2.0s" data-delay="1.0s">Citimax <span className="text-primary">Technologies</span> Limited</h2>
                      <div className="animated lead text-white" data-swiper-animation="fadeInUp" data-duration="2.0s" data-delay="1.0s">Citimax Technologies Limited is a robust, professional IT solutions Company dealing with networking, weather Systems, software systems and general ICT solutions in all fields.</div>
                      <p className="animated text-white mt-3 mb-4" data-swiper-animation="fadeInUp" data-duration="2.0s" data-delay="1.5s"></p>
                      {/* <div className="animated video-btn d-flex align-items-center" data-swiper-animation="fadeInUp" data-duration="2.0s" data-delay="2.0s">
                        <a className="btn-icon btn-lg bg-white rounded-circle btn-animation popup-youtube" href="https://www.youtube.com/embed/rGtcmKIZi5c">
                          <i className="fas fa-play text-primary fa-xs"></i>
                        </a>
                        <a href="index.html#" className="btn btn-link text-white ml-3">Watch the video</a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide slide-03" style={{backgroundImage: "url('images/slider/home-01/02.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-xl-6 col-lg-8 col-md-10 pl-md-5">
                  <div className="banner-content">
                    <div className="content">
                      <h2 className="animated mb-4 text-white h1 text-right" data-swiper-animation="fadeInUp" data-duration="2.0s" data-delay="1.0s">Truly <span className="text-primary">Consults</span> Theme </h2>
                      <div className="animated lead text-white text-right" data-swiper-animation="fadeInUp" data-duration="2.0s" data-delay="1.0s">Use a past defeat as a motivator. Remind yourself you have nowhere.</div>
                      <p className="animated text-white mt-3 mb-4 text-right" data-swiper-animation="fadeInUp" data-duration="2.0s" data-delay="1.5s">Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.</p>
                      {/* <div className="animated video-btn d-flex align-items-center flex-row-reverse" data-swiper-animation="fadeInUp" data-duration="2.0s" data-delay="2.0s">
                        <a className="btn-icon btn-lg bg-white rounded-circle btn-animation popup-youtube" href="https://www.youtube.com/embed/rGtcmKIZi5c">
                          <i className="fas fa-play text-primary fa-xs"></i>
                        </a>
                        <a href="index.html#" className="btn btn-link text-white mr-3">Watch the video</a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide"><i className="fas fa-long-arrow-alt-left"></i></div>
        <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide"><i className="fas fa-long-arrow-alt-right"></i></div>
      </div>
    </section>
   </> );
}
 
export default Slider;