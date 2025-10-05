import type { NextApiRequest, NextApiResponse } from 'next'

// Mock fetch route - returns sample invoices
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sample = {
    supplierInvoices: [
      { id: 'S1', supplier: 'ABC Traders', gstin: '27ABCDE1234F2Z5', amount: 12000, date: '2025-09-01' }
    ],
    buyerInvoices: [
      { id: 'B1', buyer: 'XYZ Retail', gstin: '07ABCDE1234F1Z2', amount: 12000, date: '2025-09-01' }
    ]
  }
  res.status(200).json(sample)
}
