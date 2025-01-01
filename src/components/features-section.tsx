import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="w-full bg-background py-16 px-4 md:py-24 font-msyahei">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why choose Cloudician?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Cloudician offers the most secure and stable enterprise-grade Staking
            service, providing you with the rewards of reliable Staking.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Network Illustration"
              width={600}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Right Side - Features */}
          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Complete technology</h3>
              <p className="text-muted-foreground">
                We have extensive experience in staking and validator services,
                node API services, basic tool development, etc. We have deployed
                nearly 10+ public chain validators，For example, 0G.AI, conflux,
                fetchai, BNB greenfield, irisnet, and privacy computing network
                oasis。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Rich Experience</h3>
              <p className="text-muted-foreground">
                We have extensive experience in high-performance databases,
                media streaming, and high-speed private data storage networks。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Professional RPC</h3>
              <p className="text-muted-foreground">
                The peak value of rpc service calls we provided in BSC can reach
                more than 10 million/day，And we have passed the professional
                RPC service audit of The Graph Foundation。
              </p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Partner</h3>
              <p className="text-muted-foreground">
                We are an ecological partner of Alibaba Cloud, focusing on
                providing services such as key custody, data indexing, security,
                and ecological cooperation for Web3 projects。
              </p>
            </div>

            {/* Feature 5 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ecological advancement</h3>
              <p className="text-muted-foreground">
                We have deep cooperation with 100+ web3 projects and can promote
                projects to use GreenField storage，They are both project
                parties and developers, and can provide more transactions and
                activity for the ecology。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
