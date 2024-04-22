/**
 * Common components among auth pages
 */

import { cn } from "@/lib/utils";
import SignUpImage from "@/svgs/signup-image";
import Image from "next/image";

type ImagePanelProps = {
  welcomeMessage: string;
  motto: string;
  imgDirection: "left" | "right";
};

type FormPanelProps = {
  type: "signup" | "signin";
  children: React.ReactNode;
};

export const ImagePanel = ({
  welcomeMessage,
  motto,
  imgDirection,
}: ImagePanelProps) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col w-1/2 bg-[#00658A] h-full",
          { "rounded-r-full": imgDirection === "left" },
          { "rounded-l-full items-end text-right": imgDirection === "right" },
        )}
      >
        <div
          className={cn(
            "flex flex-col w-3/5 mt-24",
            { "ms-24": imgDirection === "left" },
            { "me-24": imgDirection === "right" },
          )}
        >
          <h1 className="flex flex-col font-bold text-6xl text-white mb-5">
            {welcomeMessage}
          </h1>
          <h1 className="flex flex-col text-6xl text-[#87ce64] mb-10">
            Mentor Match
          </h1>
          <p className="flex text-3xl text-white">{motto}</p>
        </div>
        <div
          className={cn("flex mt-24", {
            "-scale-x-100": imgDirection === "right",
          })}
        >
          <SignUpImage />
        </div>
      </div>
    </>
  );
};

export const FormPanel = ({ type, children }: FormPanelProps) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center px-10 mb-10 w-1/2",
      )}
    >
      <div className="flex mb-10 justify-center">
        <Image
          src="/images/Logo.png"
          width={75}
          height={75}
          alt="Mentor Match Logo"
        />
      </div>
      <div className={cn("flex flex-col mb-10 w-full ms-24")}>
        <h2 className="text-3xl mb-5 font-semibold">
          {type === "signin" && <>Sign in to your account</>}
          {type === "signup" && <>Create your account</>}
        </h2>
      </div>
      <div className="flex items-center px-12 mb-10 w-full">{children}</div>
    </div>
  );
};
