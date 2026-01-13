
import React from 'react';
import Section from '../components/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Security: React.FC = () => {
  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Security and trust by design</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">Your financial data is sensitive. LedgerPilot is built with strong controls and clear access boundaries.</p>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Data Protection",
              items: [
                "Encryption in transit and at rest",
                "Strict access controls and role-based permissions",
                "Secure document storage and limited access scopes"
              ]
            },
            {
              title: "Auditability",
              items: [
                "Evidence linking: receipts tied to transactions",
                "Approval history and change traceability",
                "Exportable records for review"
              ]
            },
            {
              title: "Privacy-First",
              items: [
                "Clear data retention and deletion options",
                "No selling of identifiable financial data"
              ]
            }
          ].map((group, i) => (
            <Card key={i} className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">{group.title}</h3>
              <ul className="space-y-4">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-600">
                    <div className="mt-1 w-2 h-2 rounded-full bg-indigo-600 shrink-0"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <p className="text-slate-600 mb-8">Have specific security questions for our team?</p>
        <Button variant="outline" href="/contact">Contact us</Button>
      </Section>
    </div>
  );
};

export default Security;
