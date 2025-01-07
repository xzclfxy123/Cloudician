import Image from "next/image";

export default function PartnersPage() {
  return (
    <div className="min-h-[75vh] bg-gradient-to-br from-blue-50 via-white to-gray-50 flex justify-center items-center">
      <div className="max-w-8xl px-4 py-8 space-y-24">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8">
            <Image
              src={"/branding/Alibabacloud.png"}
              alt="Alibabacloud"
              width={160}
              height={72}
              className="max-w-full h-auto"
            />
          </div>

          <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8">
            <Image
              src={"/branding/0G_gradient_logo.svg"}
              alt="0G.AI"
              width={160}
              height={72}
              className="max-w-full h-auto"
            />
          </div>

          <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8">
            <Image
              src={"/branding/DeworkHub.png"}
              alt="DeworkHub"
              width={160}
              height={72}
              className="max-w-full h-auto"
            />
          </div>

          <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8">
            <Image
              src={"/branding/fetch-logo.svg"}
              alt="Fetch.Ai"
              width={160}
              height={72}
              className="max-w-full h-auto"
            />
          </div>

          <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8">
            <Image
              src={"/branding/Primary_Logo.svg"}
              alt="conflux"
              width={160}
              height={72}
              className="max-w-full h-auto"
            />
          </div>

          <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-6">
            <Image
              src={"/branding/irisnet_logo.png"}
              alt="irisnet"
              width={160}
              height={72}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


