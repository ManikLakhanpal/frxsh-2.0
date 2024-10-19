import Image from "next/image";
import NavigationBar from "@/components/navigationBar";
import HeroPage from "@/containers/HeroPage";

export default function Home() {
  return(
    <div>
      <NavigationBar />
      <HeroPage />
    </div>
  );
}
