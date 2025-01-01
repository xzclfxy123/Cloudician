'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Copy } from 'lucide-react'

interface CopyButtonProps {
  text: string
  children: React.ReactNode
}

export function CopyButton({ text, children }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <Button 
      onClick={handleCopy}
      className="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
    >
      <Copy className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
      {copied ? 'COPIED!' : children}
    </Button>
  )
}


