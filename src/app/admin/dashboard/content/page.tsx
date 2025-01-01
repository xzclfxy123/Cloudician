import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Layers } from 'lucide-react'

export default function ContentManagement() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Link href="/admin/dashboard/content/staking">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Staking 平台管理
            </CardTitle>
            <CardDescription>管理各个 Staking 平台信息</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  )
}