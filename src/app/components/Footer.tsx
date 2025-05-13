import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const links = [
        {
            title: "Company",
            items: [
                { name: "About Us", href: "#about" },
                { name: "Careers", href: "#" },
                { name: "Press", href: "#" },
                { name: "Contact", href: "#" }
            ]
        },
        {
            title: "Resources",
            items: [
                { name: "Blog", href: "#blog" },
                { name: "Research", href: "#" },
                { name: "Guides", href: "#" },
                { name: "Webinars", href: "#" }
            ]
        },
        {
            title: "Legal",
            items: [
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Disclosures", href: "#" },
                { name: "Regulatory", href: "#" }
            ]
        }
    ];

    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    {/* Logo and description */}
                    <div className="max-w-xs">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">RC</span>
                            </div>
                            <span className="text-white font-bold text-xl">RISING CAPITAL</span>
                        </Link>
                        <p className="text-white/60 mb-6">
                            Elevating investment strategies for sophisticated investors worldwide.
                        </p>
                        <div className="flex space-x-4">
                            {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                                    aria-label={social}
                                >
                                    <span className="text-white">{social.charAt(0)}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
                        {links.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.items.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-white/60 hover:text-white transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div className="max-w-xs">
                        <h3 className="text-lg font-semibold text-white mb-4">Join Our Newsletter</h3>
                        <p className="text-white/60 mb-4">
                            Get exclusive market insights and investment opportunities delivered to your inbox.
                        </p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/50 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Rising Capital. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                            Disclosures
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;