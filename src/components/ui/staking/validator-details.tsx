'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Globe, X, BookOpen, MessageCircle } from 'lucide-react'
import { StakingPlatform } from '@/lib/db'

interface ValidatorDetailsProps {
  platform: StakingPlatform
}

export default function ValidatorDetails({ platform }: ValidatorDetailsProps) {
  const [copied, setCopied] = useState(false)
  const validatorAddress = "Terminet[0x3bf33bc24676cc81cad593ac53fff4dff60d65cf02a7aab0bc1b29fcadad0d6784e093c51f9d51a200ab5dce8cea3cb97ceff8fd1c806d9fad4f429ff51cde1e]"

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(validatorAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {platform.name} Validator
            </h1>
            <div className="relative w-16 h-16">
              <Image
                src={platform.logo_url}
                alt={`${platform.name} logo`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h3 className="text-sm text-gray-500">Expected Yield</h3>
              <p className="text-lg font-semibold">{platform.reward_min}%~{platform.reward_max}%</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Commission</h3>
              <p className="text-lg font-semibold">10%</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Unbonding</h3>
              <p className="text-lg font-semibold">None</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Reward</h3>
              <p className="text-lg font-semibold">Distributed every Epoch</p>
            </div>
          </div>

          {/* Validator Address */}
          <div className="mb-8">
            <h3 className="text-sm text-gray-500 mb-2">Validator Address</h3>
            <p className="text-sm font-mono bg-gray-50 p-4 rounded-lg break-all">
              {validatorAddress}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Button 
              variant="default" 
              className="w-full"
              onClick={handleCopyAddress}
            >
              {copied ? 'COPIED!' : 'COPY VALIDATOR ADDRESS'}
            </Button>
            <Button 
              variant="default" 
              className="w-full"
              onClick={() => window.open('/delegate-guide', '_blank')}
            >
              LEARN TO DELEGATE
            </Button>
            <Button 
              variant="default" 
              className="w-full"
              onClick={() => window.open(`https://scan.platon.network/validator/${validatorAddress}`, '_blank')}
            >
              VIEW ON BLOCK EXPLORER
            </Button>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {platform.name}</h2>
            <p className="text-gray-600 leading-relaxed">
              {platform.name} is a next-generation Internet infrastructure protocol based on the fundamental properties of blockchain and supported by the privacy-preserving computation network. By building a computing system assembled by Verifiable Computation, Secure Multi-Party Computation, Zero-Knowledge Proof, Homomorphic Encryption and other cryptographic algorithms and blockchain technology, {platform.name} provides a public infrastructure in open source architecture for global artificial intelligence, distributed application developers, data providers and various organizations, communities and individuals with computing needs.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => window.open('https://www.platon.network', '_blank')}
              >
                <Globe className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => window.open('https://twitter.com/PlatON_Network', '_blank')}
              >
                <X className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => window.open('https://medium.com/platon-network', '_blank')}
              >
                <BookOpen className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => window.open('https://t.me/PlatONNetwork', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

