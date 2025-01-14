import Image from "next/image";
// import { Button } from "./ui/button";

export default function FeaturesSection() {
  const features = [
    {
      title: "Complete technology",
      description: "We have extensive experience in staking and validator services, node API services, basic tool development, etc. We have deployed nearly 10+ public chain validators, for example, 0G.AI, conflux, fetchai, BNB greenfield, irisnet, and privacy computing network oasis.",
      icon: "/Complete_Technology.png",
    },
    {
      title: "Rich Experience",
      description: "We have extensive experience in high-performance databases, media streaming, and high-speed private data storage networks.",
      icon: "/Rich_Experience.png",
    },
    {
      title: "Professional RPC",
      description: "The peak value of RPC service calls we provided in BSC can reach more than 10 million/day, and we have passed the professional RPC service audit of The Graph Foundation.",
      icon: "/Professional_RPC.png",
    },
    {
      title: "Partner",
      description: "We are an ecological partner of Alibaba Cloud, focusing on providing services such as key custody, data indexing, security, and ecological cooperation for Web3 projects.",
      icon: "/Partner.png",
    },
    {
      title: "Ecological advancement",
      description: "We have deep cooperation with 100+ Web3 projects and can promote projects to use GreenField storage. They are both project parties and developers, and can provide more transactions and activity for the ecology.",
      icon: "/Ecological_Advancement.png",
    },
  ];

  return (
    <section className="min-h-screen w-full py-16 px-4 md:py-24 font-msyahei bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-[86rem] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-center text-3xl sm:text-4xl font-bold mb-6">
            Why Choose Cloudician?
          </h1>
          <p className="text-left sm:text-center text-muted-foreground max-w-3xl mx-auto text-lg">
            Cloudician offers the most secure and stable enterprise-grade Staking
            service, providing you with the rewards of reliable Staking.
          </p>
        </header>

        <div className="space-y-12 sm:space-y-16">
          {features.map((feature, index) => (
            <div key={feature.title} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 sm:gap-20 justify-between px-10`}>
              <div className="flex w-1/2 sm:w-1/3 lg:w-1/4 justify-center items-center mx-28">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={180}
                  height={180}
                  className="w-full h-auto object-contain"
                  priority
                  unoptimized
                />
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-left text-xl sm:text-2xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-sm sm:text-base mb-4">{feature.description}</p>
                {/* <Button variant="outline" size="sm" className="bg-blue-400 hover:bg-blue-500">
                  Learn More
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
