import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white p-4 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" className="w-8 h-8" />
          <span className="font-semibold">Zero GST</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  )
}
