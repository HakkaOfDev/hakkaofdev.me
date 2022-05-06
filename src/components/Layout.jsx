import Head from "next/head";
import Navbar from "./Navbar/Navbar";
import Media from "./Media/Media";

const Layout = ({ children, title = "", image = "", describe = "" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href={process.env.FAVICON} type="image/png" />
        <link rel="image_src" href={image} />
        <meta name="title" content={title + process.env.BASE_TITLE} />
        <meta name="description" content={describe} />
        <meta name="keywords" content={process.env.KEYWORDS} />
        <meta name="author" content={process.env.AUTHOR} />
        <meta name="copyright" content={process.env.COPYRIGHT} />
        <meta itemProp="image" content={image} />
        <meta name="twitter:card" content={image} />
        <meta name="twitter:site" content={process.env.TWITTER_TAG} />
        <meta name="twitter:title" content={title + process.env.BASE_TITLE} />
        <meta name="twitter:description" content={describe} />
        <meta name="twitter:image:src" content={image} />

        <meta property="og:title" content={title + process.env.BASE_TITLE} />
        <meta property="og:url" content={process.env.DOMAIN} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={describe} />
        <meta property="og:site_name" content={process.env.WEBSITE_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={process.env.LANG} />

        <link rel="stylesheet" href="/css/app.css" />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,900"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div className="application">{children}</div>

      <script src="https://d3js.org/d3.v3.min.js"></script>
      <script src="/js/portfolio.js"></script>
      <script src="https://smtpjs.com/v3/smtp.js"></script>

      <Media />
    </>
  );
};

export default Layout;
