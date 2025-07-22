import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Advertisment from "@/component/Advertisment";
import Features from "@/component/Features";
import Contenets from "@/component/Contenets";

export default function Home() {
  return (
    <div className="pt-48">
      <Navbar />
      <Contenets />
      <Footer />
    </div>
  );
}
