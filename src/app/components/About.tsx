'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
    const features = [
        {
            title: "Institutional-Grade Tools",
            description: "Access the same sophisticated tools used by hedge funds and institutional investors.",
            icon: "📊"
        },
        {
            title: "Exclusive Opportunities",
            description: "Get early access to private equity, pre-IPO deals, and alternative investments.",
            icon: "🔍"
        },
        {
            title: "Personalized Strategy",
            description: "Tailored investment plans designed for your specific financial goals.",
            icon: "🎯"
        },
        {
            title: "Transparent Pricing",
            description: "No hidden fees. Clear, competitive pricing that puts you first.",
            icon: "💎"
        }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Image with floating animation */}
                    <motion.div
                        className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/assets/aboutimage.png"
                                alt="About"
                                width={600}
                                height={600}
                                className="w-full h-full"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl shadow-xl">
                                <span className="text-white text-4xl">🏆</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Wealth Management</span>
                            </h2>
                            <p className="text-lg text-white/80 mb-10">
                                Rising Capital isn't just another brokerage. We're a financial partner that combines cutting-edge technology with personalized service to help sophisticated investors achieve extraordinary results.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="text-3xl mb-4">{feature.icon}</div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                        <p className="text-white/70">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;