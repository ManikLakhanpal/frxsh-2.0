import Image from "next/image";
import NavigationBar from "@/components/navigationBar";
import HeroPage from "@/containers/heroPage";
import ContentPage from "@/containers/contentPage";
import CategoryPage from "@/containers/CategoryPage";
import Footer from "@/components/footer";

export default function Home() {
  return(
    <div>
      <NavigationBar />
      <HeroPage />
      <ContentPage />
      <CategoryPage />
      <Footer />
    </div>
  );
}
