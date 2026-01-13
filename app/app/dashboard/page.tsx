
import React from 'react';
import Section from '../../../components/Section';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

export default function Dashboard() {
  const stats = [
    { label: 'Monthly Profit', value: '£4,280.50', change: '+12%', positive: true },
    { label: 'VAT Liability (Est)', value: '£1,120.00', change: 'Due in 14 days', positive: false },
    { label: 'Reconciled', value: '98%', change: '2 pending', positive: true },
    { label: 'Cash Runway', value: '8 Months', change: 'Stable', positive: true },
  ];

  const recentTransactions = [
    { id: 1, vendor: 'Adobe Systems', amount: '-£52.79', status: 'Matched', date: 'Today' },
    { id: 2, vendor: 'Sainsbury\'s', amount: '-£14.20', status: 'Review Needed', date: 'Yesterday' },
    { id: 3, vendor: 'Client Payment #402', amount: '+£1,200.00', status: 'Matched', date: '2 days ago' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Section className="pt-8 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Acme Studio Ltd</h1>
            <p className="text-slate-500">Welcome back. Your books are 98% up to date.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Download Pack</Button>
            <Button variant="primary" size="sm">Upload Receipt</Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <Card key={i} className="p-6">
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{stat.value}</h3>
              <p className={`text-xs font-bold ${stat.positive ? 'text-emerald-600' : 'text-amber-600'}`}>
                {stat.change}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-0 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900">Recent Activity</h3>
                <button className="text-xs font-bold text-indigo-600 hover:underline">View all</button>
              </div>
              <div className="divide-y divide-slate-50">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{tx.vendor}</p>
                        <p className="text-xs text-slate-400">{tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${tx.amount.startsWith('+') ? 'text-emerald-600' : 'text-slate-900'}`}>{tx.amount}</p>
                      <Badge variant={tx.status === 'Matched' ? 'success' : 'outline'}>{tx.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 bg-indigo-600 text-white border-none">
              <h3 className="font-bold text-lg mb-2">VAT Return Period</h3>
              <p className="text-indigo-100 text-sm mb-6">Your next VAT return is due by Nov 7, 2024. You have £1,120 estimated liability.</p>
              <div className="w-full bg-indigo-500 rounded-full h-2 mb-2">
                <div className="bg-white h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-[10px] text-indigo-200 uppercase font-bold tracking-wider">75% through quarter</p>
            </Card>

            <Card className="p-6 border-dashed border-2 bg-transparent">
              <h3 className="font-bold text-slate-900 mb-4 text-sm">Action Required</h3>
              <div className="space-y-4">
                <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                  <p className="text-xs text-slate-600 font-medium leading-tight">Match Sainsbury's receipt to transaction on Oct 14.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                  <p className="text-xs text-slate-600 font-medium leading-tight">Confirm new recurring supplier: "Adobe Systems".</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
