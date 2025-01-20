import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function TopPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center text-center md:text-left space-y-6 tracking-wider">
            <h1 className="text-3xl sm:text-[2.5rem]/[3rem] font-semibold text-pretty">
              Professional Staking & Web3 Infrastructure Provider
            </h1>
            <div className="space-y-8">
              <div className="text-lg text-left text-pretty">
                Providing enterprise level Staking and professional level Web3
                infrastructure services for Token holders and developers
                investing in and building the Web3 ecosystem, Cloudician is your
                best choice to enter the Web3 ecosystem
              </div>
              <Button className="bg-blue-400 hover:bg-blue-500">
                <Link href={"/contact_us"}>Contact Us</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={"/homepage.png"}
              alt="HP"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
