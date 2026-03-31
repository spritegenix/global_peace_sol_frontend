import { useState } from 'react';
import { Link } from 'react-router-dom';

const Advertise = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What subscription options are available for experts and firms?",
            answer: "We offer tailored monthly and yearly subscription plans designed for both individual experts and larger firms. These plans include enhanced profile visibility, lead generation tools, and priority placement in search results."
        },
        {
            question: "What happens if I buy another subscription before my current one expires?",
            answer: "Your new subscription will be added to your existing plan, extending its duration instead of replacing it. This ensures uninterrupted service and allows you to lock in current rates."
        },
        {
            question: "What benefits do I get with the subscription?",
            answer: "Subscribers gain increased visibility, priority listing in our directory, and additional features to attract more clients and grow their peace-oriented services. You also get access to exclusive analytics and ad placement options."
        },
        {
            question: "Can I upgrade from a monthly to a yearly subscription?",
            answer: "Yes, you can purchase a longer-duration subscription at any time, and it will be added to your current plan, extending its validity while providing better long-term value."
        },
        {
            question: "How do I manage or renew my subscription?",
            answer: "You can check your subscription status and renew it through your account dashboard. Renewing early ensures continuous access to premium benefits and avoids any lapse in your professional visibility."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col bg-background-light dark:bg-background-dark min-h-screen">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center overflow-hidden bg-slate-900 px-6 py-24 text-center text-white">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
                <h1 className="relative z-10 text-4xl font-black sm:text-6xl">
                    Advertise <span className="text-primary italic">With Us</span>
                </h1>
                <p className="relative z-10 mt-6 max-w-2xl text-lg text-slate-300">
                    Partner with Global Peace Solution to reach a dedicated community looking for expert guidance, mental well-being resources, and trusted peace solutions.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
                    <Link to="/contact" className="bg-primary text-slate-900 px-8 py-3.5 rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                        Get Started Today
                    </Link>
                </div>
            </section>

            {/* Content Section */}
            <section className="mx-auto w-full max-w-5xl px-6 py-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Left Column: Key Benefits */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-5xl lg:leading-tight">
                            Empower Your <span className="text-primary">Visibility</span>
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
                            Choose a subscription plan that best fits your needs and start showcasing your services to a broader audience.
                        </p>

                        <ul className="mt-10 space-y-6">
                            {[
                                "Ads placement.",
                                "Priority support.",
                                "Featured listing benefits."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-xl font-bold text-slate-800 dark:text-slate-200">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                                        <span className="material-symbols-outlined text-2xl font-black">check</span>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Visual Element */}
                    <div className="relative">
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-800 shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80" 
                                alt="Business Growth" 
                                className="h-full w-full object-cover opacity-80"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-[2rem] bg-primary -z-10 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-center text-3xl font-black text-slate-900 dark:text-white sm:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    
                    <div className="mt-16 space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 transition-all"
                            >
                                <button 
                                    onClick={() => toggleAccordion(index)}
                                    className="flex w-full items-center justify-between px-8 py-6 text-left"
                                >
                                    <span className="text-lg font-bold text-slate-900 dark:text-white pr-4">
                                        {faq.question}
                                    </span>
                                    <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        keyboard_arrow_down
                                    </span>
                                </button>
                                
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-8 pb-8 text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800 pt-4 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="mx-auto max-w-7xl px-6 py-20 text-center">
                <div className="rounded-[3rem] bg-primary px-8 py-16 text-slate-900 shadow-2xl transition-transform hover:scale-[1.01]">
                    <h2 className="text-3xl font-black sm:text-5xl">Start Growing With Us</h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg font-medium opacity-80">
                        Join the community of trusted experts and make your services accessible to those who need them most.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link to="/contact" className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-sm hover:translate-y-[-2px] transition-all">
                            Reach Out Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Advertise;
