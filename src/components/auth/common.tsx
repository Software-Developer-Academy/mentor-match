/**
 * Common components among auth pages
 */

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import SignUpImage from "@/svgs/signup-image";

type TitleMottoProps = {
  welcomeMessage: string;
  motto: string;
};

type ImagePanelProps = {
  imgDirection: "left" | "right";
} & TitleMottoProps;

type FormPanelProps = {
  type: "signup" | "signin";
  children: React.ReactNode;
};

export const TitleMotto = ({
  welcomeMessage,
  motto,
  className,
}: TitleMottoProps & { className?: string }) => {
  return (
    <div
      className={cn(
        "mt-12 mb-6 tall-desktop:mt-24 tall:mb-12 mx-auto max-w-[565px] pl-12 tall:pl-6 text-white",
        className,
      )}
    >
      <h1 className="text-5xl tall-desktop:text-6xl">
        {welcomeMessage}
        <div className="text-[#87ce64]">Mentor Match</div>
      </h1>
      <p className="flex text-2xl tall-desktop:text-3xl mt-6">{motto}</p>
    </div>
  );
};

export const ImagePanel = ({
  welcomeMessage,
  motto,
  imgDirection,
}: ImagePanelProps) => {
  return (
    <div className="hidden xl:block max-w-[calc(854px)] relative text-white h-full">
      <TitleMotto welcomeMessage={welcomeMessage} motto={motto} />
      <SignUpImage
        className={cn(
          "mt-auto h-[65%] tall-desktop:h-[70%] w-[115%]",
          { "-scale-x-100 -ml-[50px]": imgDirection === "right" },
          { "-mr-[50px]": imgDirection === "left" },
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute w-full h-[190%] short:h-[195%] tall-desktop:h-[200%] bg-[#00658A] -z-10 top-[50%] translate-y-[-50%] right-0",
          { "rounded-l-[50%]": imgDirection === "right" },
          { "rounded-r-[50%]": imgDirection === "left" },
        )}
      ></div>
    </div>
  );
};

export const FormPanel = ({ type, children }: FormPanelProps) => {
  return (
    <div
      className={cn(
        "overflow-y-auto max-w-[560px] py-12 mx-auto w-full h-full short-desktop:h-auto",
        { "px-4 xl:pl-12 xl:pr-4": type === "signin" },
        { "px-4 xl:pr-12 xl:pl-4": type === "signup" },
      )}
    >
      <div>
        <Image
          src="/images/Logo.png"
          className="mx-auto mb-24"
          width={75}
          height={75}
          alt="Mentor Match Logo"
          fetchPriority="high"
        />
        <div className="flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-3xl">
              {type === "signin" && <>Sign in to your account</>}
              {type === "signup" && <>Create your account</>}
            </h2>
            <div className="mt-3">
              {type === "signin" && (
                <div>
                  Don&rsquo;t have an account?{" "}
                  <Link href="/signup">Sign up</Link>
                </div>
              )}
              {type === "signup" && (
                <div>
                  Already have an account? <Link href="/signin">Sign in</Link>
                </div>
              )}
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export const OauthBlock = ({ type }: { type: "sign in" | "sign up" }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 w-full">
        <div className="flex-[0.5] border-[1px]" aria-hidden></div>
        <div className="">or {type} with</div>
        <div className="flex-[0.5] border-[1px]" aria-hidden></div>
      </div>
      <OauthButtons />
    </div>
  );
};

export const OauthButtons = () => {
  return (
    <div className="flex justify-center items-center gap-6">
      <Image
        src="/images/facebook.png"
        width={32}
        height={32}
        alt="Facebook icon"
      />
      <Image
        src="/images/google-icon.png"
        width={32}
        height={32}
        alt="Google icon"
      />
    </div>
  );
};
