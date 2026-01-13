
export interface Template {
  slug: string;
  title: string;
  category: 'Finance' | 'Invoicing' | 'Reporting';
  description: string;
  previewImageUrl: string;
}

export const templates: Template[] = [
  {
    slug: 'profit-loss-spreadsheet-template',
    title: 'Free Profit & Loss Spreadsheet Template',
    category: 'Reporting',
    description: 'A simple Excel/Google Sheets template to track your monthly income and outgoings.',
    previewImageUrl: 'https://picsum.photos/seed/pl/600/400'
  },
  {
    slug: 'sole-trader-invoice-template',
    title: 'UK Sole Trader Invoice Template (Word & PDF)',
    category: 'Invoicing',
    description: 'A compliant invoice template specifically for freelancers and self-employed professionals in the UK.',
    previewImageUrl: 'https://picsum.photos/seed/invoice/600/400'
  },
  {
    slug: 'monthly-expense-tracker',
    title: 'Monthly Business Expense Tracker Template',
    category: 'Finance',
    description: 'Keep your receipts organized and categorized with this simple printable and digital tracker.',
    previewImageUrl: 'https://picsum.photos/seed/expense/600/400'
  }
  // ... Imagine 9 more entries for a total of 12
];
