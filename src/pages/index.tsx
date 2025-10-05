import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl p-8 bg-white rounded shadow">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="Zero GST" className="w-16 h-16" />
          <h1 className="text-2xl font-bold">Zero GST</h1>
        </div>
        <p className="mt-4 text-gray-600">Invoice reconciliation and reporting for MSMEs.</p>
        <div className="mt-6">
          <button className="px-4 py-2 bg-teal-500 text-white rounded">Login with OTP (placeholder)</button>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <Link href="/dashboard">Go to dashboard (dev only)</Link>
        </div>
      </div>
    </div>
  )
}
