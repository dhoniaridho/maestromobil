import Footer from "./footer";
import MainNavbar from "./navbar";
import Head from 'next/head'

export default function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Maestro Mobil</title>
      </Head>
      <MainNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
