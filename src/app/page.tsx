import PartnersPage from "@/components/partners-page"
import ContactUs from "@/components/contact-us"
import FeaturesSection from "@/components/features-section"
import Navbar from "@/components/header"
import StakingContent from "@/components/staking-content"
import TopPage from "@/components/top-page"
import Footer from "@/components/bottomPage"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow min-h-screen">
        <TopPage />
        <FeaturesSection />
        <StakingContent />
        <PartnersPage />
        <ContactUs />
        <Footer />
      </main>
    </div>
  )
}
