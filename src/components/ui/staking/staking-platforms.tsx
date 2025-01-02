import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, BookOpen } from "lucide-react";
import { getStakingPlatforms } from "@/lib/db";
import { CopyButton } from "@/components/ui/staking/copy-button";
import Link from "next/link";
import { addUser } from "@/lib/actions";

export interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function ValidatorPage({ params }: PageProps) {
  const { name } = await params;
  const platforms = await getStakingPlatforms();
  const platform = platforms.find(
    (p) => p.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );

  if (!platform) {
    notFound();
  }

  const urls: string[] = JSON.parse(platform.resources) || "[]";

  const guides: string[] = JSON.parse(platform.staking_guide) || "[]";

  // Function to get SVG image path based on URL
  const getSvgPath = (url: string): string => {
    if (url.includes("twitter.com")) {
      return "/url/twitter.svg";
    } else if (url.includes("medium.com")) {
      return "/url/medium.svg";
    } else if (url.includes("t.me") || url.includes("telegram")) {
      return "/url/telegram.svg";
    } else {
      return "/url/website.svg"; // Default website icon
    }
  };

  // Function to get alt text based on URL
  const getAltText = (url: string): string => {
    if (url.includes("twitter.com")) {
      return "Twitter";
    } else if (url.includes("medium.com")) {
      return "Medium";
    } else if (url.includes("t.me") || url.includes("telegram")) {
      return "Telegram";
    } else {
      return "Website";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 pb-8 border-b border-blue-100">
          <div className="space-y-2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {platform.name} Validator
            </h1>
            <p className="text-xl text-gray-500">{platform.synopsis}</p>
          </div>

          <div className="relative w-24 h-24 md:w-32 md:h-32 transition-transform duration-300 hover:scale-110">
            <Image
              src={platform.logo_url}
              alt={`${platform.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Expected Yield
              </h3>
              <p className="text-2xl font-semibold text-gray-900">
                {platform.reward_min}%~{platform.reward_max}%
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-indigo-50">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Commission
              </h3>
              <p className="text-2xl font-semibold text-gray-900">
                {platform.commission}
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Unbonding
              </h3>
              <p className="text-2xl font-semibold text-gray-900">
                {platform.unbonding}
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-indigo-50">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Reward</h3>
              <p className="text-2xl font-semibold text-gray-900">
                {platform.reward}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Validator Address
          </h3>
          <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md transition-all duration-300 hover:shadow-lg">
            <p className="font-mono text-sm break-all text-gray-700 select-all">
              Cloudician[{platform.validator_address}]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CopyButton text={platform.validator_address}>
              COPY VALIDATOR ADDRESS
            </CopyButton>
            <Button className="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
              <BookOpen className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              LEARN TO DELEGATE
            </Button>
            <Button className="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
              <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              <Link href={platform.block_explorer}>VIEW ON BLOCK EXPLORER</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              About {platform.name}
            </h2>
            <div className="prose prose-gray">
              <p className="text-gray-600 leading-relaxed">{platform.about}</p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={platform.logo_url}
              alt={`About ${platform.name}`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <div className="flex gap-4">
            {urls.map((url, index) => (
              <Link
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Image
                  src={getSvgPath(url)}
                  alt={getAltText(url)}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4 pt-32 pb-16">
          <h1 className="text-4xl font-bold text-center mb-12">
            Staking Guide & Instructions
          </h1>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Left Column - Instructions */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-xl font-semibold">
                  {platform.staking_guide_title}
                </h1>
              </div>

              <ol className="space-y-6">
                {guides.map((guide, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-blue-400 text-white text-sm">
                      {index + 1}
                    </span>
                    <div>{guide}</div>
                  </li>
                ))}
              </ol>

              <div className="pt-6">
                <h3 className="font-medium mb-4">
                  Want more detailed instructions?
                </h3>
                <Button className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors">
                  <Link href={platform.full_guide}>SEE FULL GUIDE</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {platform.staking_guide_worth}
                  </h2>
                  <p className="text-gray-600">
                    Contact us to discuss the prime customer advantages.
                  </p>
                </div>

                <form action={addUser} className="space-y-8">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
