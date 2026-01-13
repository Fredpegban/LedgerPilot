
import React from 'react';
import Section from '../../components/Section';

const Cookies: React.FC = () => {
  return (
    <Section className="py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Cookie Policy</h1>
      <div className="space-y-8 text-slate-600">
        <p>This policy explains how LedgerPilot uses cookies to provide a reliable service.</p>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Essential Cookies</h2>
          <p>These are necessary for the website to function, such as authentication and security features.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Analytics</h2>
          <p>We use anonymized analytics to understand how users interact with our marketing site so we can improve the experience.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Managing Cookies</h2>
          <p>You can adjust your browser settings to block cookies, though some features of LedgerPilot may not function as intended.</p>
        </section>
      </div>
    </Section>
  );
};

export default Cookies;
