import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'
import AdminLoginForm from '@/components/admin/AdminLoginForm'

export default function AdminPage() {
  if (isAuthenticated()) {
    redirect('/admin/hero')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="font-heading text-2xl font-700 text-forest">SAD Admin</h1>
          <p className="text-gray-500 text-sm mt-1">Content Management Panel</p>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  )
}
