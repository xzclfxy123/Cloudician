import ForgotPasswordForm from '@/components/forgot-password-form'

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            找回密码
          </h2>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

