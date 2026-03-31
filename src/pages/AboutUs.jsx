import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden bg-slate-900 px-6 py-20 text-center">
                <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245328477-1d37b19889a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
                
                <div className="relative z-10 max-w-4xl">
                    <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
                        Uniting the World through <span className="text-primary italic">Peace Solutions</span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-300 sm:text-xl">
                        At Global Peace Solution, we believe that everyone deserves to live a life of well-being, connection, and peace. We’re here to make that possible.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                            Our Story
                        </h2>
                        <div className="mt-6 space-y-4 text-lg text-slate-600 dark:text-slate-400">
                            <p>
                                Global Peace Solution was born out of a simple but powerful realization: in an increasingly connected yet often divided world, individuals and communities are searching for more than just information—they're searching for *healing* and *peace*.
                            </p>
                            <p>
                                What started as a small initiative to connect individuals with mental health resources has evolved into a global platform. Today, we bridge the gap between people and the trusted experts, organizations, and communities that can truly make a difference in their lives.
                            </p>
                        </div>
                        <div className="mt-10 flex gap-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-primary">10k+</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Users Helped</span>
                            </div>
                            <div className="mx-8 h-12 w-px bg-slate-200 dark:bg-slate-800"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-primary">500+</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Expert Partners</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
                                alt="Our team collaborating" 
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-3xl bg-primary sm:block -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="bg-primary/5 py-24 dark:bg-primary/5">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div className="rounded-3xl bg-white p-10 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl group">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                            </div>
                            <h3 className="mt-8 text-2xl font-black text-slate-900 dark:text-white">Our Mission</h3>
                            <p className="mt-4 text-slate-600 dark:text-slate-400">
                                To empower individuals worldwide by providing seamless access to trusted peace solutions, fostering mental well-being, and building a global community dedicated to healing and mutual support.
                            </p>
                        </div>
                        <div className="rounded-3xl bg-white p-10 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl group">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">visibility</span>
                            </div>
                            <h3 className="mt-8 text-2xl font-black text-slate-900 dark:text-white">Our Vision</h3>
                            <p className="mt-4 text-slate-600 dark:text-slate-400">
                                To become the world's leading platform for peace and mental well-being, where every individual feels supported, every crisis is met with a solution, and peace is accessible to all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="mx-auto max-w-7xl px-6 py-24 text-center">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                    Our Core Values
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400 font-medium">
                    The principles that guide every decision we make and every partnership we build.
                </p>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { icon: 'favorite', title: 'Empathy First', desc: 'We lead with compassion and understanding in everything we do.' },
                        { icon: 'shield_person', title: 'Trust & Integrity', desc: 'We only partner with verified experts and maintain the highest standards of ethics.' },
                        { icon: 'groups', title: 'Community', desc: 'We believe in the power of connection and the strength found in support groups.' },
                        { icon: 'auto_awesome', title: 'Innovation', desc: 'We constantly look for new, modern ways to make peace more accessible.' }
                    ].map((value, i) => (
                        <div key={i} className="flex flex-col items-center p-6 transition-all hover:scale-105">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-slate-900 shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined text-3xl font-bold">{value.icon}</span>
                            </div>
                            <h4 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{value.title}</h4>
                            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="mx-auto max-w-7xl px-6 py-12">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-20 text-center sm:px-16">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black text-white sm:text-5xl">
                            Ready to Find Your <span className="text-primary italic">Peace?</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
                            Join thousands of others who have already started their journey toward a better life. Explore our solutions today.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-6">
                            <Link to="/categories" className="bg-primary text-slate-900 px-10 py-4 rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/30">
                                Explore All Solutions
                            </Link>
                            <Link to="/auth" className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-4 rounded-2xl font-black text-sm hover:bg-white/20 transition-all">
                                Join Our Community
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
