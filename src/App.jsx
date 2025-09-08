
import Features from "./components/Features";
import Header from "./components/Header";

import PlatForm from "./components/PlatForm";
import Aboutus from "./components/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import AppSpart from "./components/AppSpart";
import ReviewPart from "./components/ReviewPart";
import WorkPart from "./components/WorkPart";
import PricingPart from "./components/PricingPart";
import BannerImg from "./components/BannerImg";




const App = () => {
  return (
    <div className=" ">
    
    <BannerImg>
       <Navbar></Navbar>
      <Header></Header>
    </BannerImg>

       <PlatForm></PlatForm>
       <Features></Features>
       <AppSpart></AppSpart>
       <WorkPart></WorkPart>
       
            <ReviewPart></ReviewPart> 
            <PricingPart></PricingPart>
            <Aboutus></Aboutus>
         
            <Footer></Footer>
      
     
       
       
     
      
   
    </div>
  );
};

export default App;