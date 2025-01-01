import { DashboardLayout } from '@/components/dashboard-layout'
import { getUsers } from "@/lib/actions";

export default async function AdminDashboard() {
    const { userCount } = await getUsers()
  return (
    <DashboardLayout userCount={userCount} />
  )
}
