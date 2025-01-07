import Link from "next/link";
import { Button } from "./ui/button";

export default function ContactUs() {
  return (
    <div className="min-h-[50vh] bg-gradient-to-br from-blue-50 via-white to-gray-50 flex flex-col justify-center items-center relative">
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
        >
          <path
            fill="#A4D8F3"
            d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="relative text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-lg mt-4">
          If you have any questions about our services, please do not hesitate
          to contact us. We are happy to talk to anyone.
        </p>
        <Link href={"/contact_us"}>
          <Button className="mt-8 px-6 py-3 text-blue-600 font-medium border-2 border-blue-600 bg-white rounded-full shadow hover:bg-blue-100 transition-all duration-300">
          Get in Touch
        </Button>
        </Link>
      </div>
    </div>
  );
}
