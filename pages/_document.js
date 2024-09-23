import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Bella Shop</title>

        
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png" />
        <link rel="shortcut icon" href="assets/ico/favicon.ico" />

        
        <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/plugins/bootstrap-select/css/bootstrap-select.min.css" rel="stylesheet" />
        <link href="assets/plugins/fontawesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="assets/plugins/prettyphoto/css/prettyPhoto.css" rel="stylesheet" />
        <link href="assets/plugins/owl-carousel2/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="assets/plugins/owl-carousel2/assets/owl.theme.default.min.css" rel="stylesheet" />
        <link href="assets/plugins/animate/animate.min.css" rel="stylesheet" />

        
        <link href="assets/css/theme.css" rel="stylesheet" />
        <link href="assets/css/theme-green-1.css" rel="stylesheet" id="theme-config-link" />

        
        <script src="assets/plugins/modernizr.custom.js"></script>

      </Head>
      <body id="home" className="wide">
        <Main />
        <NextScript />
        <script src="assets/plugins/jquery/jquery-1.11.1.min.js"></script>
        <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/plugins/bootstrap-select/js/bootstrap-select.min.js"></script>
        <script src="assets/plugins/superfish/js/superfish.min.js"></script>
        <script src="assets/plugins/prettyphoto/js/jquery.prettyPhoto.js"></script>
        <script src="assets/plugins/owl-carousel2/owl.carousel.min.js"></script>
        <script src="assets/plugins/jquery.sticky.min.js"></script>
        <script src="assets/plugins/jquery.easing.min.js"></script>
        <script src="assets/plugins/jquery.smoothscroll.min.js"></script>
        <script src="assets/plugins/smooth-scrollbar.min.js"></script>

        
        

        
        <script src="assets/plugins/jquery.cookie.js"></script>
        
      </body>
    </Html>
  );
}
