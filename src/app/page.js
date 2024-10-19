import Image from "next/image";
import NavigationBar from "@/components/navigationBar";
import HeroPage from "@/containers/HeroPage";
import ContentPage from "@/containers/contentPage";

export default function Home() {
  return(
    <div>
      <NavigationBar />
      <HeroPage />
      <ContentPage />
    </div>
  );
}
