import React from 'react';

const Cookies = () => {
    return (
        <div className="mx-auto max-w-4xl px-6 py-20 text-slate-800 dark:text-slate-200">
            <h1 className="text-4xl font-black mb-6 text-slate-900 dark:text-white">Cookies Policy</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">1. Introduction</h2>
                <p className="leading-relaxed">
                    Welcome to <strong>Global Peace Solution</strong>. This Cookies Policy explains how we use cookies and similar technologies to recognize you when you visit our website.
                    It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
                <p className="mt-4 leading-relaxed">
                    This document complies with <strong>Indian Laws</strong> regarding data protection and user privacy online.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">2. What Are Cookies?</h2>
                <p className="leading-relaxed">
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">3. How We Use Cookies</h2>
                <p className="leading-relaxed">
                    We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our online properties.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">4. Your Control Over Cookies</h2>
                <p className="leading-relaxed">
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager or adjusting your web browser controls.
                </p>
            </section>

            <section className="mt-12 bg-primary/10 p-8 rounded-2xl border border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Contact Us</h2>
                <p className="leading-relaxed">
                    If you have any questions about our use of cookies or other technologies, please email us at:
                </p>
                <a href="mailto:info@thepeacefulearth.com" className="font-black text-primary text-xl mt-3 inline-block hover:underline">
                    info@thepeacefulearth.com
                </a>
            </section>
        </div>
    );
};

export default Cookies;
