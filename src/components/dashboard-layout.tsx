"use client";

// import { useEffect, useState } from 'react';

interface DashboardLayoutProps {
  userCount: number;
}

// interface AdminLog {
//   username: string;
//   ip_address: string;
//   timestamp: string;
// }

export function DashboardLayout(userCount: DashboardLayoutProps) {
  const userCountNumber = userCount.userCount
  // const [adminLogs, setAdminLogs] = useState<AdminLog[]>([])

  // useEffect(() => {
  //   const fetchAdminLogs = async () => {
  //     const token = localStorage.getItem('adminToken');
  //     if (!token) return;

  //     try {
  //       const response = await fetch('/api/admin-logs', {
  //         headers: {
  //           'Authorization': `Bearer ${token}`
  //         }
  //       });
  //       if (response.ok) {
  //         const data = await response.json();
  //         setAdminLogs(data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching admin logs:', error);
  //     }
  //   };

  //   fetchAdminLogs();
  // }, []);

  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 py-8 px-10">
      <div className="mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          欢迎来到后台管理系统
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* 统计卡片 */}
          <StatCard title="总用户" value={userCountNumber.toString()} icon={Users} />
        </div>
        {/* <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">最近活动</h2>
          <ActivityFeed activities={adminLogs}/>
        </div> */}
      </div>
    </div>
  );
}

import {
  Users,
  LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function StatCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: LucideIcon;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}

// function ActivityFeed({ activities }: { activities: AdminLog[] }) {
//   return (
//     <div className="space-y-4">
//       {activities.map((activity, index) => (
//         <div key={index} className="flex items-center space-x-4">
//           <div className="flex-shrink-0">
//             <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
//               {activity.username[0]}
//             </div>
//           </div>
//           <div className="flex-1 min-w-0">
//             <p className="text-sm font-medium text-gray-900 truncate">
//               {activity.username}
//             </p>
//             <p className="text-sm text-gray-500 truncate">登录了系统 (IP: {activity.ip_address})</p>
//           </div>
//           <div className="flex-shrink-0 text-sm text-gray-500">
//             {new Date(activity.timestamp).toLocaleString()}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
