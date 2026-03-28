import React from 'react';

const TermsOfService = () => {
    return (
        <div className="mx-auto max-w-4xl px-6 py-20 text-slate-800 dark:text-slate-200">
            <h1 className="text-4xl font-black mb-6 text-slate-900 dark:text-white">Terms of Service</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">1. Agreement to Terms</h2>
                <p className="leading-relaxed">
                    By accessing our website and using the services provided by <strong>Global Peace Solution</strong>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
                <p className="mt-4 leading-relaxed">
                    These Terms are governed by and construed in accordance with <strong>Indian Laws</strong>. Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Website shall be instituted exclusively in the courts of India.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">2. Intellectual Property Rights</h2>
                <p className="leading-relaxed">
                    Unless otherwise indicated, the Website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">3. User Representations</h2>
                <ul className="list-disc pl-5 mt-4 space-y-2 leading-relaxed">
                    <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                    <li>You are not a minor in the jurisdiction in which you reside.</li>
                    <li>You will not access the site through automated or non-human means.</li>
                    <li>You will not use the site for any illegal or unauthorized purpose.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">4. Modifications to the Terms</h2>
                <p className="leading-relaxed">
                    We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms of Service.
                </p>
            </section>

            <section className="mt-12 bg-primary/10 p-8 rounded-2xl border border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Contact Us</h2>
                <p className="leading-relaxed">
                    For any issues or questions concerning these Terms, please contact us at:
                </p>
                <a href="mailto:info@thepeacefulearth.com" className="font-black text-primary text-xl mt-3 inline-block hover:underline">
                    info@thepeacefulearth.com
                </a>
            </section>
        </div>
    );
};

export default TermsOfService;
