import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        
        <Head>

        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="css/font-awesome/all.min.css" />
        <link rel="stylesheet" href="css/flaticon/flaticon.css" />
        <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css" />

        <link rel="stylesheet" href="css/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/swiper/swiper.min.css" />
        <link rel="stylesheet" href="css/animate/animate.min.css" />
        <link rel="stylesheet" href="css/magnific-popup/magnific-popup.css" />

        <link rel="stylesheet" href="css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="js/jquery-3.5.1.min.js"></Script>
          <Script src="js/popper/popper.min.js"></Script>
          <Script src="js/bootstrap/bootstrap.min.js"></Script>
          <Script src="js/jquery.appear.js"></Script>
          <Script src="js/counter/jquery.countTo.js"></Script>
          <Script src="js/owl-carousel/owl.carousel.min.js"></Script>
          <Script src="js/swiper/swiper.min.js"></Script>
          <Script src="js/swiperanimation/SwiperAnimation.min.js"></Script>
          <Script src="js/magnific-popup/jquery.magnific-popup.min.js"></Script>
          <Script src="js/shuffle/shuffle.min.js"></Script>
          <Script src="js/easy-pie-chart/easy-pie-chart.js"></Script>
          <Script src="js/apexcharts/apexcharts.min.js"></Script>
          <Script src="js/apexcharts/charts.js"></Script>

          <Script src="js/custom.js"></Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
