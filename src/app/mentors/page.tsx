import Navbar from "@/components/Navbar/";
import Footer from "@/components/Footer";
import Card from "./card";

export default function Mentors() {
  return (
    <>
      <Navbar />
      <main className="pt-[56px] container">
        <div className="flex items-center justify-center h-[400px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <input
            type="text"
            placeholder="Search for mentors"
            className="w-1/2 bg-gray-300 text-black size-12 border px-4 rounded"
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
