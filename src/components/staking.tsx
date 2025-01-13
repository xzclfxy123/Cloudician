"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, X, Loader2 } from "lucide-react";
import { Textarea } from "./ui/textarea";

export interface Platform {
  id: number;
  name: string;
  logo_url: string;
  reward_min: number;
  reward_max: number;
  sort_order: number;
  synopsis: string;
  commission: number;
  unbonding: string;
  reward: string;
  validator_address: string;
  block_explorer: string;
  about: string;
  resources: string;
  staking_guide_title: string;
  staking_guide: string;
  full_guide: string;
  staking_guide_worth: string;
}

export default function StakingPage() {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [newPlatform, setNewPlatform] = useState({
    name: "",
    logo_url: "",
    reward_min: "",
    reward_max: "",
    sort_order: "",
    synopsis: "",
    commission: "",
    unbonding: "",
    reward: "",
    validator_address: "",
    block_explorer: "",
    about: "",
    resources: "",
    staking_guide_title: "",
    staking_guide: "",
    full_guide: "",
    staking_guide_worth: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const fetchPlatforms = useCallback(async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const res = await fetch("/api/platforms", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setPlatforms(data);
      } else if (res.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error("Failed to fetch platforms");
      }
    } catch (err) {
      if (err instanceof Error && err.message === "Unauthorized") {
        router.push("/admin/login");
      } else {
        setError("Failed to load platforms. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchPlatforms();
  }, [fetchPlatforms]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (res.ok) {
        const { url } = await res.json();
        setPreviewUrl(url);
        setNewPlatform((prev) => ({ ...prev, logo_url: url }));
      } else if (res.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (err) {
      if (err instanceof Error && err.message === "Unauthorized") {
        router.push("/admin/login");
      } else {
        setError("Failed to upload image. Please try again.");
      }
    }
  };

  const clearImage = () => {
    setPreviewUrl("");
    setNewPlatform((prev) => ({ ...prev, logo_url: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    if (!newPlatform.logo_url) {
      setError("请上传 Logo");
      setIsSubmitting(false);
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const res = await fetch("/api/platforms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: newPlatform.name,
          logo_url: newPlatform.logo_url,
          reward_min: parseFloat(newPlatform.reward_min),
          reward_max: parseFloat(newPlatform.reward_max),
          sort_order: parseInt(newPlatform.sort_order),
          synopsis: newPlatform.synopsis,
          commission: parseFloat(newPlatform.commission),
          unbonding: newPlatform.unbonding,
          reward: newPlatform.reward,
          validator_address: newPlatform.validator_address,
          block_explorer: newPlatform.block_explorer,
          about: newPlatform.about,
          resources: newPlatform.resources,
          staking_guide_title: newPlatform.staking_guide_title,
          staking_guide: newPlatform.staking_guide,
          full_guide: newPlatform.full_guide,
          staking_guide_worth: newPlatform.staking_guide_worth,
        }),
      });

      if (res.ok) {
        setSuccess("Platform added successfully");
        setNewPlatform({
          name: "",
          logo_url: "",
          reward_min: "",
          reward_max: "",
          sort_order: "",
          synopsis: "",
          commission: "",
          unbonding: "",
          reward: "",
          validator_address: "",
          block_explorer: "",
          about: "",
          resources: "",
          staking_guide_title: "",
          staking_guide: "",
          full_guide: "",
          staking_guide_worth: "",
        });
        setPreviewUrl("");
        fetchPlatforms();
      } else if (res.status === 401) {
        throw new Error("Unauthorized");
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to add platform");
      }
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Unauthorized") {
          router.push("/admin/login");
        } else {
          setError(err.message);
        }
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const res = await fetch("/api/platforms", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setSuccess("Platform deleted successfully");
        fetchPlatforms();
      } else if (res.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error("Failed to delete platform");
      }
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Unauthorized") {
          router.push("/admin/login");
        } else {
          setError(err.message);
        }
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            管理 Staking Platforms
          </h1>
          <input
            type="file"
            id="logo-upload"
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <div className="flex items-center gap-4">
            {previewUrl && (
              <div className="relative">
                <Image
                  src={previewUrl}
                  alt="Logo preview"
                  width={60}
                  height={60}
                  className="rounded-lg object-contain"
                  unoptimized
                />
                <button
                  onClick={clearImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="max-h-[500px] overflow-y-auto hide-scrollbar">
            <CardHeader>
              <CardTitle>添加 New Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="name">Platform 名称</Label>
                    <Input
                      id="name"
                      value={newPlatform.name}
                      onChange={(e) =>
                        setNewPlatform({ ...newPlatform, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="flex justify-end items-end">
                    <Label
                      htmlFor="logo-upload"
                      className="h-10 cursor-pointer inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-50"
                    >
                      <Upload className="h-5 w-5" />
                      上传 Logo
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reward_min">最低 Reward (%)</Label>
                    <Input
                      id="reward_min"
                      type="number"
                      step="1"
                      min="0"
                      max="100"
                      value={newPlatform.reward_min}
                      onChange={(e) =>
                        setNewPlatform({
                          ...newPlatform,
                          reward_min: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="reward_max">最高 Reward (%)</Label>
                    <Input
                      id="reward_max"
                      type="number"
                      step="1"
                      min="0"
                      max="100"
                      value={newPlatform.reward_max}
                      onChange={(e) =>
                        setNewPlatform({
                          ...newPlatform,
                          reward_max: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="sort_order">
                      Sort Order（平台排序顺位）
                    </Label>
                    <Input
                      id="sort_order"
                      type="number"
                      min="0"
                      value={newPlatform.sort_order}
                      onChange={(e) =>
                        setNewPlatform({
                          ...newPlatform,
                          sort_order: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="commission">Commission(佣金) (%)</Label>
                    <Input
                      id="commission"
                      name="commission"
                      type="number"
                      step="0.1"
                      min="0"
                      max="100"
                      value={newPlatform.commission}
                      onChange={(e) =>
                        setNewPlatform({
                          ...newPlatform,
                          commission: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="unbonding">Unbonding(解除绑定)</Label>
                    <Input
                      id="unbonding"
                      name="unbonding"
                      value={newPlatform.unbonding}
                      onChange={(e) =>
                        setNewPlatform({
                          ...newPlatform,
                          unbonding: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="reward">Reward(奖励)</Label>
                    <Input
                      id="reward"
                      name="reward"
                      value={newPlatform.reward}
                      onChange={(e) =>
                        setNewPlatform({
                          ...newPlatform,
                          reward: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="validator_address">Validator Address(验证地址)</Label>
                    <Input
                      id="validator_address"
                      name="validator_address"
                      value={newPlatform.validator_address}
                      onChange={(e) =>
                        setNewPlatform({
                          ...newPlatform,
                          validator_address: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="block_explorer">Block Explorer(区块浏览器链接)</Label>
                    <Input
                      id="block_explorer"
                      name="block_explorer"
                      value={newPlatform.block_explorer}
                      onChange={(e) =>
                        setNewPlatform({
                          ...newPlatform,
                          block_explorer: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="synopsis">Synopsis(简介)</Label>
                  <Input
                    id="synopsis"
                    name="synopsis"
                    value={newPlatform.synopsis}
                    onChange={(e) =>
                      setNewPlatform({
                        ...newPlatform,
                        synopsis: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="about">About(平台详细介绍)</Label>
                  <Textarea
                    id="about"
                    name="about"
                    value={newPlatform.about}
                    onChange={(e) =>
                      setNewPlatform({
                        ...newPlatform,
                        about: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="resources">
                    Resources(相关链接，注意每个链接之间用逗号隔开)
                  </Label>
                  <Textarea
                    id="resources"
                    name="resources"
                    value={newPlatform.resources}
                    onChange={(e) =>
                      setNewPlatform({
                        ...newPlatform,
                        resources: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="staking_guide_title">Stake_Guide_Title(指南标题)</Label>
                  <Input
                    id="staking_guide_title"
                    name="staking_guide_title"
                    value={newPlatform.staking_guide_title}
                    onChange={(e) =>
                      setNewPlatform({
                        ...newPlatform,
                        staking_guide_title: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="staking_guide">Staking_Guide(指南内容)</Label>
                  <Textarea
                    id="staking_guide"
                    name="staking_guide"
                    value={newPlatform.staking_guide}
                    onChange={(e) =>
                      setNewPlatform({
                        ...newPlatform,
                        staking_guide: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="full_guide">Full_Guide(完整指南链接)</Label>
                  <Input
                    id="full_guide"
                    name="full_guide"
                    value={newPlatform.full_guide}
                    onChange={(e) =>
                      setNewPlatform({
                        ...newPlatform,
                        full_guide: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="staking_guide_worth">staking_guide_worth(用户信息填写表格上面的内容)</Label>
                  <Input
                    id="staking_guide_worth"
                    name="staking_guide_worth"
                    value={newPlatform.staking_guide_worth}
                    onChange={(e) =>
                      setNewPlatform({
                        ...newPlatform,
                        staking_guide_worth: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                {success && (
                  <Alert>
                    <AlertDescription>{success}</AlertDescription>
                  </Alert>
                )}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      添加 Platform 中...
                    </>
                  ) : (
                    "添加 Platform"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">现有 Platforms</h2>
            <div className="max-h-[600px] space-y-6 overflow-y-auto hide-scrollbar">
              {isLoading ? (
                <div className="flex justify-center items-center h-32">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              ) : platforms.length > 0 ? (
                platforms.map((platform) => (
                  <Card key={platform.id}>
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <Image
                            src={platform.logo_url}
                            alt={`${platform.name} logo`}
                            width={32}
                            height={32}
                            className="rounded-lg object-contain"
                            unoptimized
                          />
                          {platform.name}
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(platform.id)}
                        >
                          删除
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p>
                          Reward 范围: {platform.reward_min}% -{" "}
                          {platform.reward_max}%
                        </p>
                        <p>Sort Order: {platform.sort_order}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p>未找到任何平台，请添加新平台</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
