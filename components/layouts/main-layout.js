import Footer from "./footer";
import MainNavbar from "./navbar";

export default function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <MainNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
