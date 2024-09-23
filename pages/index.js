import EndSection from "@/components/home/endsection";
import Featured from "@/components/home/featured";
import HeroSlider from "@/components/home/heroslider";
import RecentPost from "@/components/home/recent-post";
import TopProduct from "@/components/home/topproduct";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="content-area">
      <HeroSlider />
      <Featured />
      <TopProduct/>
      <RecentPost />
      <EndSection />
    
    </div>
    </>
  );
}
