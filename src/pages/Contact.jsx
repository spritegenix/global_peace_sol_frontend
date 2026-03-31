import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., EmailJS or API call)
        console.log('Form submitted:', formData);
        alert('Thank you! Your message has been sent.');
    };

    return (
        <div className="flex flex-col bg-background-light dark:bg-background-dark min-h-screen">
            {/* Header Section */}
            <div className="py-20 text-center">
                <h1 className="text-5xl font-black text-slate-900 dark:text-white">Contact us</h1>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>-</span>
                    <span className="text-slate-900 dark:text-slate-300">Contact us</span>
                </div>
            </div>

            {/* Main Contact Section */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-24">
                <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl dark:bg-slate-900 flex flex-col md:flex-row">
                    
                    {/* Left Column: Contact Information */}
                    <div className="w-full bg-slate-900 p-10 text-white md:w-2/5 lg:p-14">
                        <h2 className="text-2xl font-bold">Contact Information</h2>
                        
                        <div className="mt-12 space-y-10">
                            {/* Office */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                    <span className="material-symbols-outlined text-2xl">location_on</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Corporate Office</h3>
                                    <p className="mt-1 text-slate-400">India</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                    <span className="material-symbols-outlined text-2xl">mail</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Email Address</h3>
                                    <p className="mt-1 text-slate-400">info@thepeacefulearth.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                    <span className="material-symbols-outlined text-2xl">call</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Phone Number</h3>
                                    <p className="mt-1 text-slate-400">+91-8957865554</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Placeholder */}
                        <div className="mt-16 flex gap-4">
                            {['facebook', 'twitter', 'instagram'].map((social) => (
                                <div key={social} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-slate-900 transition-all cursor-pointer">
                                    <span className="material-symbols-outlined text-xl">share</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="w-full bg-white p-10 dark:bg-slate-900 md:w-3/5 lg:p-14">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name *</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none transition-all"
                                />
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone *</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                    className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div className="col-span-1 flex flex-col gap-2 sm:col-span-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address *</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email address"
                                    className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none transition-all"
                                />
                            </div>

                            {/* Subject */}
                            <div className="col-span-1 flex flex-col gap-2 sm:col-span-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject *</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter subject"
                                    className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none transition-all"
                                />
                            </div>

                            {/* Message */}
                            <div className="col-span-1 flex flex-col gap-2 sm:col-span-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Write Message *</label>
                                <textarea 
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message here..."
                                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="col-span-1 sm:col-span-2 mt-4">
                                <button 
                                    type="submit"
                                    className="h-14 w-full sm:w-auto rounded-full bg-primary px-10 text-base font-black text-slate-900 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
