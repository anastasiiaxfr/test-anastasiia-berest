import "../assets/styles/main.sass";
import Header from "../components/header";
import Footer from "../components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="wrap">
      <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}
