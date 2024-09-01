import { Inter } from "next/font/google";
import TopSection from "./components/home";
import ServicesSection from "./components/services";
import AboutSection from "./components/about";
import PricesSection from "./components/prices";
import FAQPage from "./components/faq";
import ContactPage from "./components/contact";
import PickupRequest from "./components/pickup-request";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="min-h-screen">
        <TopSection />
        <ServicesSection />
        <PickupRequest />
        <AboutSection />
        <PricesSection />
        <FAQPage />
        <ContactPage />
      </div>
    </div>
  );
}
