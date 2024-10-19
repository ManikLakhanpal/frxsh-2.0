import NavigationBar from "@/components/navigationBar";
import HeroPage from "@/containers/heroPage";
import ContentPage from "@/containers/contentPage";
import CategoryPage from "@/containers/categoryPage";
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
