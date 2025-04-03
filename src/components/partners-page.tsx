import Image from "next/image";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <div className="min-h-[75vh] bg-gradient-to-br from-blue-50 via-white to-gray-50 flex justify-center items-center">
      <div className="max-w-[86rem] px-4 py-8 lg:space-y-24">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <Link href={"https://www.alibabacloud.com/"}>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 h-48">
              <Image
                src={"/branding/Alibabacloud.png"}
                alt="Alibabacloud"
                width={160}
                height={72}
                className="max-w-full h-auto"
              />
            </div>
          </Link>

          <Link href={"https://0g.ai/"}>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 h-48">
              <Image
                src={"/branding/0G_gradient_logo.svg"}
                alt="0G.AI"
                width={160}
                height={72}
                className="max-w-full h-auto"
              />
            </div>
          </Link>

          <Link href={"https://payment.deworkhub.com/"}>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 h-48">
              <Image
                src={"/branding/DeworkHub.png"}
                alt="DeworkHub"
                width={160}
                height={72}
                className="max-w-full h-auto"
              />
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 h-48">
              <Image
                src={"/branding/monallo_logo.png"}
                alt="Monallo"
                width={160}
                height={72}
                className="max-w-full h-auto"
              />
            </div>
          </Link>

          <Link href={"https://fetch.ai/"}>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 h-48">
              <Image
                src={"/branding/fetch-logo.svg"}
                alt="Fetch.Ai"
                width={160}
                height={72}
                className="max-w-full h-auto"
              />
            </div>
          </Link>

          <Link href={"https://confluxnetwork.org/"}>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 h-48">
              <Image
                src={"/branding/Primary_Logo.svg"}
                alt="conflux"
                width={160}
                height={72}
                className="max-w-full h-auto"
              />
            </div>
          </Link>

          <Link href={"https://irisnet.org/"}>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 h-48">
              <Image
                src={"/branding/irisnet_logo.png"}
                alt="irisnet"
                width={160}
                height={72}
                className="max-w-full h-auto"
              />
            </div>
          </Link>

          <Link href={"https://meter.io/"}>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 h-48">
              <Image
                src={"/branding/meter.svg"}
                alt="meter"
                width={160}
                height={72}
                className="max-w-full h-auto"
              />
            </div>
          </Link>

          <Link href={"https://www.kima.finance/"}>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 h-48">
              <Image
                src={"/branding/kima.svg"}
                alt="kima"
                width={160}
                height={72}
                className="max-w-full h-auto"
              />
            </div>
          </Link>

          <Link href={"https://www.zetachain.com/"}>
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 h-48">
              <Image
                src={"/branding/zetachain.svg"}
                alt="zetachain"
                width={160}
                height={72}
                className="max-w-full h-auto"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
