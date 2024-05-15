import Navbar from "@/components/Navbar/";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="container flex justify-center items-center gap-24">
        {children}
      </div>
    </>
  );
};

export default ProfileLayout;
