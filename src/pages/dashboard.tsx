import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div>Account</div>
      </header>

      <main className="mt-6">
        <section className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white p-4 rounded shadow">Invoices (placeholder)</div>
          <div className="bg-white p-4 rounded shadow">Reports (placeholder)</div>
        </section>
      </main>
    </div>
  )
}
