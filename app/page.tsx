import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Advertisment from "@/component/Advertisment";
import Features from "@/component/Features";
import Contents from "@/component/Contents";

export default function Home() {
  return (
    <div className="pt-48">
      <Navbar />
      <Contents />
      <Footer />
    </div>
  );
}
