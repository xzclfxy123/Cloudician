"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { UpdateInvoice } from "./ui/staking/buttons";

interface StakingPlatform {
  id: number;
  name: string;
  logo_url: string;
  reward_min: number;
  reward_max: number;
  sort_order: number;
}

export default function StakingContent() {
  const [platforms, setPlatforms] = useState<StakingPlatform[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const res = await fetch("/api/platforms");
        if (res.ok) {
          const data = await res.json();
          setPlatforms(data);
        } else {
          throw new Error("Failed to fetch platforms");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load platforms. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50" id="staking">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">Staking with Cloudician</h1>
          <p className="text-gray-600 leading-relaxed">
            Cloudician is dedicated to the infrastructure and stable operation of
            the mainstream PoS blockchain. Simply delegate your Token to a
            Cloudician validators to easily earn rewards and join the Staking
            ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {platforms.map((platform) => (
            <Card key={platform.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-6">
                  <h2 className="text-xl font-semibold">{platform.name}</h2>

                  <div className="flex w-24 h-24">
                    <Image
                      src={platform.logo_url}
                      alt={`${platform.name} logo`}
                      width={96}
                      height={96}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Annual Reward Rate</p>
                    <p className="text-lg font-medium">
                      {platform.reward_min}%~{platform.reward_max}%
                    </p>
                  </div>

                  <UpdateInvoice name={platform.name} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
