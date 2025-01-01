import BottomPage from "@/components/bottom-page"
import ContactUs from "@/components/contact-us"
import FeaturesSection from "@/components/features-section"
import Navbar from "@/components/header"
import StakingContent from "@/components/staking-content"
import TopPage from "@/components/top-page"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow min-h-screen">
        <TopPage />
        <FeaturesSection />
        <StakingContent />
        <BottomPage />
        <ContactUs />
      </main>
    </div>
  )
}
