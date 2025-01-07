import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary h-20 w-52 relative">
              <Image src={'/CloudicianLogo.svg'} alt='logo' layout='fill' objectFit='cover'/>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="#staking">STAKING</NavLink>
            {/* <NavLink href="/pricing">ACCESS NODE</NavLink> */}
            {/* <NavLink href="/about">BLOG</NavLink> */}
            <NavLink href="/contact_us">CONTACT US</NavLink>
          </div>
          <div className="sm:hidden">
            <Button variant="ghost" className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-primary hover:border-primary hover:text-primary transition duration-150 ease-in-out hover:border-black">
      {children}
    </Link>
  )
}

export default Navbar

