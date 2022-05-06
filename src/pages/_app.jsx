import App from "next/app";

import "../../public/css/themify-icons/themify-icons.css";
import "../../public/css/devicon-master/devicon.css";
import "../../public/css/architect.css";
import "../../public/js/navbar";

import "../scss/App.scss";
export default class Application extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
