import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center min-h-[45vh] bg-gradient-to-br from-blue-50 via-white to-gray-50 w-full pb-4 sm:pb-6 md:pb-8 lg:pb-12 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="container px-4 sm:px-6 md:px-8 flex flex-col justify-between flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:justify-items-center mx-2 sm:mx-0">
          <div className="col-span-1 sm:col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold">Cloudician</h3>
            <div>
              <Link href={"/"} className="mt-2 text-sm text-muted-foreground">
                Building A Web3 World
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="/#staking"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Staking
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Community</h3>
            <ul className="mt-2 space-y-4 text-sm">
              <li>
                <Link
                  href="https://x.com/CloudicianTech"
                  className="flex items-center text-muted-foreground hover:text-foreground space-x-2"
                >
                  <Image
                    src={"x.svg"}
                    alt=""
                    width={16}
                    height={16}
                    className="max-w-full h-auto"
                  />
                  <div className="pl-2">X</div>
                </Link>
              </li>

              {/* <li>
                <Link
                  href="https://medium.com"
                  className="flex items-center text-muted-foreground hover:text-foreground space-x-2"
                >
                  <Image
                    src={"medium.svg"}
                    alt="Medium"
                    width={16}
                    height={16}
                    className="max-w-full h-auto"
                  />
                  <div>Medium</div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://telegram.org"
                  className="flex items-center text-muted-foreground hover:text-foreground space-x-2"
                >
                  <Image
                    src={"telegram.svg"}
                    alt="Telegram"
                    width={16}
                    height={16}
                    className="max-w-full h-auto"
                  />
                  <div>Telegram</div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.com"
                  className="flex items-center text-muted-foreground hover:text-foreground"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Discord
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="/contact_us"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-20 border-t pt-6 sm:pt-8 text-center text-sm text-muted-foreground">
          Copyright ©2024 Cloudician, All rights reserved
        </div>
      </div>
    </footer>
  );
}
