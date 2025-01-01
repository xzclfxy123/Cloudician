import { LoginForm } from '@/components/login-form'
// import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            登录到管理后台
          </h2>
        </div>
        <LoginForm />
        {/* <div className="text-center">
          <Link href="/admin/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
            忘记密码？
          </Link>
        </div> */}
      </div>
    </div>
  )
}

