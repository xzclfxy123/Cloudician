import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, BookOpen, ExternalLink, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function ValidatorPage() {
  const validatorAddress = "Cloudician[0x3bf33bc24676cc81cad593ac53fff4dff60d65cf02a7aab0bc1b29fcadad0d6784e093c51f9d51a200ab5dce8cea3cb97ceff8fd1c806d9fad4f429ff51cde1e]"

  const copyAddress = () => {
    navigator.clipboard.writeText(validatorAddress)
  }

  const stats = [
    { label: "Expected Yield", value: "15%~25%" },
    { label: "Commission", value: "10%" },
    { label: "Unbonding", value: "None" },
    { label: "Reward", value: "Distributed every Epoch" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 pb-8 border-b border-blue-100">
          <div className="space-y-2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              PlatON Validator (LAT)
            </h1>
            <p className="text-xl text-gray-600">Secure and reliable validation services</p>
          </div>
          
          <div className="relative w-24 h-24 md:w-32 md:h-32 transition-transform duration-300 hover:scale-110">
            <Image
              src="/logos/platon.svg"
              alt="PlatON logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={stat.label} className={cn(
              "overflow-hidden transition-all duration-300 hover:shadow-lg",
              index % 2 === 0 ? "bg-blue-50" : "bg-indigo-50"
            )}>
              <CardContent className="p-6">
                <h2 className="text-sm font-medium text-gray-600 mb-2">{stat.label}</h2>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Validator Address Section */}
        <div className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Validator Address</h2>
          <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md transition-all duration-300 hover:shadow-lg">
            <p className="font-mono text-sm break-all text-gray-700 select-all">
              {validatorAddress}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "COPY VALIDATOR ADDRESS", icon: Copy, onClick: copyAddress },
              { label: "LEARN TO DELEGATE", icon: BookOpen },
              { label: "VIEW ON BLOCK EXPLORER", icon: ExternalLink },
            ].map((button) => (
              <Button 
                key={button.label}
                className="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
              >
                <button.icon className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">About PlatON</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                PlatON is a next-generation Internet infrastructure protocol based on the fundamental
                properties of blockchain and supported by the privacy-preserving computation network. By
                building a computing system assembled by Verifiable Computation, Secure Multi-Party
                Computation, Zero-Knowledge Proof, Homomorphic Encryption and other cryptographic
                algorithms and blockchain technology, PlatON provides a public infrastructure in open source
                architecture for global artificial intelligence, distributed application developers, data providers
                and various organizations, communities and individuals with computing needs.
              </p>
            </div>
            <Button variant="outline" className="group">
              Learn more about PlatON
              <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/platon-illustration.svg"
              alt="PlatON Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

