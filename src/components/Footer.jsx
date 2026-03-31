import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-900 mt-auto">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="flex items-center justify-center">
                                <img
                                    src='/1.png'
                                    alt='logo'
                                    className='h-8 w-auto object-contain'
                                />
                            </div>


                        </Link>
                        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">At Global Peace Solution, we connect people with trusted experts, helpful resources, and practical solutions to improve mental well-being and build a more peaceful, connected world together.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">For Users</h3>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link className="hover:text-primary" to="/about-us">About Us</Link></li>
                            <li><Link className="hover:text-primary" to="/contact">Contact</Link></li>
                            <li><Link className="hover:text-primary" to="/categories">Search Categories</Link></li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">For Businesses</h3>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link className="hover:text-primary" to="/add-business">Add Listing</Link></li>
                            <li><Link className="hover:text-primary" to="/advertise">Advertise with Us</Link></li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">Connect</h3>
                        <div className="mt-4 flex gap-4">
                            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-primary hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400" href="#">
                                <span className="material-symbols-outlined">social_leaderboard</span>
                            </a>
                            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-primary hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400" href="#">
                                <span className="material-symbols-outlined">share_reviews</span>
                            </a>
                            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-primary hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400" href="#">
                                <span className="material-symbols-outlined">alternate_email</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-xs text-slate-500">Copyrights © 2026 Global Peace Solution. All rights reserved. Designed and Developed by <a href="https://www.spritegenix.com/">Sprite Genix. </a>  </p>
                        <div className="flex gap-6 text-xs text-slate-500">
                            <Link className="hover:text-primary" to="/privacy-policy">Privacy Policy</Link>
                            <Link className="hover:text-primary" to="/terms-of-service">Terms of Service</Link>
                            <Link className="hover:text-primary" to="/cookies">Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
