import { Leftbar, Middle, Rightbar } from "../../components";
import MobileMenu from "../../components/mobileComp/MobileMenu";
import MobileTop from "../../components/mobileComp/MobileTop";

const Home = () => {
  window.scrollTo(0, 0);

  return (
    <div className="home flex flex-wrap mt-12 sm:mt-0 pb-12">
      <MobileTop />
      <Leftbar />
      <Middle />
      <Rightbar />
      <MobileMenu />
    </div>
  );
};

export default Home;
