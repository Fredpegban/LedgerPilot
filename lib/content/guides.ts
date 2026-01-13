
export interface Guide {
  slug: string;
  title: string;
  date: string;
  category: 'VAT' | 'Bookkeeping' | 'MTD' | 'Tax' | 'Expenses';
  excerpt: string;
  body: string;
}

export const guides: Guide[] = [
  {
    slug: 'small-business-bookkeeping-basics',
    title: 'The Ultimate Guide to Small Business Bookkeeping in the UK',
    date: '2024-10-15',
    category: 'Bookkeeping',
    excerpt: 'Everything a new business owner needs to know about tracking income, expenses, and staying return-ready.',
    body: 'Keeping your books in order is not just about compliance—it is about visibility. This guide covers the essential steps for UK limited companies and sole traders...'
  },
  {
    slug: 'mtd-for-vat-explained',
    title: 'Making Tax Digital (MTD) for VAT: What You Need to Know',
    date: '2024-10-20',
    category: 'VAT',
    excerpt: 'A clear explanation of HMRC’s MTD requirements and how to choose compliant software.',
    body: 'From April 2022, all VAT-registered businesses must follow MTD rules. This means keeping digital records and using functional compatible software...'
  },
  {
    slug: 'allowable-expenses-sole-traders',
    title: 'Allowable Expenses: What Can Sole Traders Claim?',
    date: '2024-11-01',
    category: 'Tax',
    excerpt: 'Maximize your tax efficiency by understanding exactly what HMRC allows you to deduct from your business income.',
    body: 'Sole traders often miss out on valid tax deductions. From home office costs to travel expenses, we break down the allowable list...'
  }
  // ... Imagine 7 more entries for a total of 10
];
