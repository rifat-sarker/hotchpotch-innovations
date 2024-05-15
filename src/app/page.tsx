import BlogTools from "@/components/BlogTools/BlogTools";
import Branding from "@/components/Branding/Branding";
import Content from "@/components/Content/Content";
import Content2 from "@/components/Content2/Content2";
import Features from "@/components/Features/Features";
import Feedback from "@/components/Feedback/Feedback";
import Footer from "@/components/Footer/Footer";
import Packages from "@/components/Packages/Packages";
import Header from "@/components/shared/Header";

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Branding/>
      <Content/>
      <Content2/>
      <BlogTools/>
      <Features/>
      <Feedback/>
      <Packages/>
      <Footer/>
    </div>
  );
};

export default HomePage;