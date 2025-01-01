'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Platform {
    name: string,
    logo_url: string,
    reward_min: number,
    reward_max: number
}

interface PlatformFormProps {
  onSubmit: (platform: Platform) => Promise<void>
}

export function PlatformForm({ onSubmit }: PlatformFormProps) {
  const [name, setName] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [rewardMin, setRewardMin] = useState('')
  const [rewardMax, setRewardMax] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await onSubmit({
        name,
        logo_url: logoUrl,
        reward_min: parseFloat(rewardMin),
        reward_max: parseFloat(rewardMax),
      })

      // Reset form
      setName('')
      setLogoUrl('')
      setRewardMin('')
      setRewardMax('')
    } catch (err) {
        console.error(err)
      setError('Failed to save platform')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Platform Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="logoUrl">Logo URL</Label>
        <Input
          id="logoUrl"
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="rewardMin">Minimum Reward (%)</Label>
          <Input
            id="rewardMin"
            type="number"
            step="0.01"
            value={rewardMin}
            onChange={(e) => setRewardMin(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="rewardMax">Maximum Reward (%)</Label>
          <Input
            id="rewardMax"
            type="number"
            step="0.01"
            value={rewardMax}
            onChange={(e) => setRewardMax(e.target.value)}
            required
          />
        </div>
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Button type="submit" className="w-full">
        Add Platform
      </Button>
    </form>
  )
}

