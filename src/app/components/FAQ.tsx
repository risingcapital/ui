'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What makes Rising Capital different from other brokerages?",
            answer: "We combine institutional-grade investment tools with a concierge-level service approach. Our clients get access to exclusive investment opportunities, personalized portfolio strategies, and direct access to our team of financial experts.",
            image: "/assets/images/faq1.jpg"
        },
        {
            question: "What is the minimum investment required?",
            answer: "Our premium services are designed for serious investors with a minimum account size of $100,000. However, we have special programs for emerging investors starting at $25,000.",
            image: "/assets/images/faq2.jpg"
        },
        {
            question: "How do you ensure the security of my investments?",
            answer: "Client assets are held with top-tier custodians like Pershing and Fidelity. We use bank-level encryption, multi-factor authentication, and regular third-party security audits to protect your information and assets.",
            image: "/assets/images/faq3.jpg"
        },
        {
            question: "Can I access international markets through Rising Capital?",
            answer: "Yes, we provide access to over 50 global markets with competitive forex rates. Our platform supports trading in multiple currencies with real-time settlement.",
            image: "/assets/images/faq4.jpg"
        },
        {
            question: "What kind of reporting will I receive?",
            answer: "You'll get comprehensive monthly statements, quarterly performance reviews, and on-demand reporting through our client portal. Our reports include tax optimization insights and benchmark comparisons.",
            image: "/assets/images/faq5.jpg"
        }
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-blue-500 filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-purple-500 filter blur-3xl opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Questions</span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Everything you need to know about investing with Rising Capital.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-xl font-semibold text-white pr-4">{faq.question}</h3>
                                <ChevronDown
                                    className={`h-6 w-6 text-white transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 flex flex-col md:flex-row gap-6">
                                            <div className="flex-1">
                                                <p className="text-white/80">{faq.answer}</p>
                                            </div>
                                            <div className="flex-1">
                                                <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                                                    <Image
                                                        src={faq.image}
                                                        alt="FAQ illustration"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;