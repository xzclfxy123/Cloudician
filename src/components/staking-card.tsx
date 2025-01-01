import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface StakingCardProps {
  name: string
  logo: string
  rewardMin: number
  rewardMax: number
}

export function StakingCard({ name, logo, rewardMin, rewardMax }: StakingCardProps) {
  return (
    <Card className="bg-white">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-medium">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6">
        <div className="relative w-24 h-24">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500">Annual Reward Rate</p>
          <p className="text-2xl font-semibold">{rewardMin}%~{rewardMax}%</p>
        </div>
        <Button className="w-full bg-sky-400 hover:bg-sky-500 text-white">
          Stake
        </Button>
      </CardContent>
    </Card>
  )
}

