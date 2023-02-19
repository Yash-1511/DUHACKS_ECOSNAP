import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Howto from "@/components/Howto";
import Layout from '../layouts/Main';
import About from "@/components/About";

export default function Home() {
  return (
    <Layout>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Howto/>
      <Footer/>
    </Layout>
  );
}
