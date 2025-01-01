import Link from "next/link";
import { Button } from "./ui/button";

export default function TopPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-5xl">
              Professional Staking+Web3 infrastructure provider
            </h1>
            <div className="space-y-8">
              <div className="text-lg text-center md:text-left">
                Providing enterprise level Staking and professional level Web3
                infrastructure services for Token holders and developers
                investing in and building the Web3 ecosystem, Terminet is your
                best choice to enter the Web3 ecosystem
              </div>
              <Button className="bg-blue-400 hover:bg-blue-500">
                <Link href={"/contact_us"}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
