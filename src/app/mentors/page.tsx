import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/";

import Card from "./card";

export default function Mentors() {
  return (
    <>
      <Navbar />
      <main className="pt-[56px] container">
        <div className="flex flex-col items-center justify-center mt-4">
          <h1>Find your mentor</h1>
          <input
            type="text"
            placeholder="Search for mentors"
            className="my-6 w-1/2 bg-gray-300 text-black size-12 border px-4 rounded"
          />
        </div>
      </main>

      <section className="container flex my-8 gap-8 flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <Footer />
    </>
  );
}
