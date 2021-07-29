import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
