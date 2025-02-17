import NavBar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
    <div className="bg-background">
      <NavBar />
      <HomeBanner />
    </div>
  );
}
