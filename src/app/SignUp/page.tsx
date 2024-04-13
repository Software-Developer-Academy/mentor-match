import Image from "next/image";
const SignUp = () => {
  return (
    <section className="bg-slate-100">
      <div className="flex flex-1 text-black self-center">
        <div className="flex w-1/2 h-screen">
          <Image
            src="/images/MentorMatchSignup.png"
            width={1500}
            height={1500}
            alt="Mentor Match Image describing the app"
            className="rounded-tr-[128px] rounded-br-[128px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center px-10 mb-10 w-1/2">
          <div className="flex flex-col mb-10 w-full text-center">
            <h1 className="text-5xl font-bold mb-10">Mentor Match Logo</h1>
          </div>
          <div className="flex flex-col mb-10 w-full ms-24">
            <h2 className="text-3xl mb-5 font-semibold">Create your account</h2>
          </div>
          <div className="flex items-center px-12 mb-10 w-full">
            <form action="" className="w-full">
              <div className="flex mb-10">
                <input
                  type="email"
                  placeholder="Email"
                  maxLength={200}
                  className="w-full bg-gray-300 text-black size-12 placeholder:text-black border px-4 rounded"
                  required
                />
              </div>
              <div className="mb-10">
                <input
                  type="password"
                  placeholder="Password"
                  maxLength={64}
                  className="w-full bg-gray-300 text-black size-12 placeholder:text-black border px-4 rounded"
                  required
                />
              </div>
              <div className="mb-10">
                <button className="bg-[#00658A]  hover:bg-[#2f91b4] text-white font-bold py-2 px-4 w-full rounded size-12">
                  Sign Up
                </button>
              </div>
              <div className="flex justify-center mb-5 ">
                <p className="text-black font-semibold text-xl">
                  or sign up with
                </p>
              </div>
              <div className="flex justify-center mb-5 space-x-10">
                <Image
                  src="/images/facebook.png"
                  width={64}
                  height={64}
                  alt="Facebook icon"
                />
                <Image
                  src="/images/google-icon.png"
                  width={64}
                  height={64}
                  alt="Google icon"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
