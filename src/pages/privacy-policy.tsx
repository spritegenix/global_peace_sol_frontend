import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="mx-auto max-w-4xl px-6 py-20 text-slate-800 dark:text-slate-200">
            <h1 className="text-4xl font-black mb-6 text-slate-900 dark:text-white">Privacy Policy</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">1. Introduction</h2>
                <p className="leading-relaxed">
                    Welcome to <strong>Global Peace Solution</strong>. We are committed to protecting your personal information and your right to privacy.
                    This Privacy Policy applies to our website and all related services, sales, marketing, or events.
                </p>
                <p className="mt-4 leading-relaxed">
                    This document is drafted in accordance with <strong>Indian Laws</strong>, including the Information Technology Act, 2000,
                    and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">2. Information We Collect</h2>
                <p className="leading-relaxed">
                    We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services.
                    The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">3. How We Use Your Information</h2>
                <p className="leading-relaxed">
                    We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">4. Governing Law</h2>
                <p className="leading-relaxed">
                    This Privacy Policy and all related matters shall be governed by and construed in accordance with <strong>Indian Laws</strong>. Any disputes arising out of or related to this Privacy Policy will be subject to the exclusive jurisdiction of the courts located in India.
                </p>
            </section>

            <section className="mt-12 bg-primary/10 p-8 rounded-2xl border border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Contact Us</h2>
                <p className="leading-relaxed">
                    If you have any questions or comments about this policy, please reach out to us at:
                </p>
                <a href="mailto:info@thepeacefulearth.com" className="font-black text-primary text-xl mt-3 inline-block hover:underline">
                    info@thepeacefulearth.com
                </a>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
