import { ReactNode } from 'react'

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="py-8 px-10">
      <h1 className="text-2xl font-semibold mb-6">内容管理</h1>
      {children}
    </div>
  )
}