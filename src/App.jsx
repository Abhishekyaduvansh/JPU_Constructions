import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // ← CHANGED
import TnC from "./components/TnC";
import Refer from "./components/Refer";
import PrivacyPolicies from "./components/PrivacyPolicies";
import FeatureSection from "./components/FeatureSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/Features" element={<FeatureSection />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Workflow" element={<Workflow />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/TermsAndConditions" element={<TnC />} />
          <Route path="/Refer" element={<Refer />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicies />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
