import { AdminSidebar } from "@/components/admin/admin-sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      <AdminSidebar />

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        {children}
      </main>
    </div>
  )
}
