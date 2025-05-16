'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe, BarChart, Users, Shield } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Globe className="w-6 h-6 text-blue-600" />,
            title: "Global Reach",
            description: "Access to 50+ international markets with local expertise"
        },
        {
            icon: <BarChart className="w-6 h-6 text-indigo-600" />,
            title: "Data-Driven",
            description: "AI-powered analytics for smarter investment decisions"
        },
        {
            icon: <Users className="w-6 h-6 text-blue-600" />,
            title: "Client-First",
            description: "Dedicated relationship managers for every investor"
        },
        {
            icon: <Shield className="w-6 h-6 text-indigo-600" />,
            title: "Secure",
            description: "Bank-level security and regulatory compliance"
        }
    ];

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image with floating animation */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/assets/logo.jpg"
                                alt="Rising Capital team"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                            />
                            {/* Floating stats card */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                            </motion.div>
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
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Rising Capital</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Founded in 2010, Rising Capital has redefined wealth management by combining institutional-grade investment strategies with personalized service for discerning investors.
                            </p>
                            <p className="text-lg text-gray-600 mb-10">
                                Our team of former hedge fund managers, economists, and technologists have built a platform that delivers superior risk-adjusted returns through disciplined, data-driven investing.
                            </p>

                            {/* Features grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                                <p className="text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
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