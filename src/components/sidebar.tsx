'use client'

import Link from 'next/link'
import { Home, Users, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar'

const menuItems = [
  { icon: Home, label: '仪表盘', href: '/admin/dashboard' },
  { icon: Users, label: '用户管理', href: '/admin/dashboard/users' },
  { icon: FileText, label: '内容管理', href: '/admin/dashboard/content' },
  // { icon: Settings, label: '系统设置', href: '/admin/dashboard/settings' },
]

export function AppSidebar() {
  const { state } = useSidebar()

  return (
    <SidebarComponent className="border-r border-gray-200">
      <SidebarHeader className="bg-gray-900 text-white">
        <h2 className="text-lg font-semibold px-6 py-4">管理系统</h2>
      </SidebarHeader>
      <SidebarContent className="bg-gray-800">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:gray-900',
                        'hover:bg-gray-700',
                        state === 'collapsed' && 'justify-center'
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {state === 'expanded' && <span>{item.label}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  )
}

