// css files 
import '../blog/assets/css/custom.css'
import '../blog/assets/css/global.css'
import '../blog/assets/css/aos.css'
import '../blog/assets/css/bootstrap.min.css'
import '../blog/assets/css/bootstrap-datepicker.css'
import '../blog/assets/css/jquery-ui.css'
import '../blog/assets/css/magnific-popup.css'
import '../blog/assets/css/mediaelementplayer.css'
import '../blog/assets/css/owl.carousel.min.css'
import '../blog/assets/css/owl.theme.default.min.css'
import '../blog/assets/css/style.css'
import '../blog/assets/css/bootstrap/bootstrap.css'
import '../blog/assets/css/bootstrap/bootstrap.min.css'
import '../blog/assets/css/bootstrap/bootstrap-grid.css'
import '../blog/assets/css/bootstrap/bootstrap-reboot.css'

// js files 
// import '../blog/assets/js/aos.js'
// import '../blog/assets/js/bootstrap-datepicker.min.js'
// import '../blog/assets/js/jquery-3.3.1.min.js'
// import '../blog/assets/js/jquery-migrate-3.0.1.min.js'
// import '../blog/assets/js/jquery-ui.js'
// import '../blog/assets/js/jquery.countdown.min.js'
// import '../blog/assets/js/jquery.magnific-popup.min.js'
// import '../blog/assets/js/jquery.stellar.min.js'
// import '../blog/assets/js/main.js'
// import '../blog/assets/js/mediaelement-and-player.min.js'
// import '../blog/assets/js/owl.carousel.min.js'
// import '../blog/assets/js/popper.min.js'
// import '../blog/assets/js/slick.min.js'


// vercel analytics 
import { Analytics } from '@vercel/analytics/react';



function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;

// export default function App({ Component, pageProps }) {
//   return (
//   <>
//   <Component {...pageProps} />
//   {/* vercel analytics  */}
//   <Analytics /> 
//   </>
//   _)
// }
