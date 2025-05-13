'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true });

    const faqs = [
        {
            question: "What is the minimum investment required?",
            answer: "Our premium services are designed for serious investors with a minimum account size of $100,000. However, we have special programs for emerging investors starting at $25,000.",
        },
        {
            question: "How do you ensure the security of my investments?",
            answer: "Client assets are held with top-tier custodians like Pershing and Fidelity. We use bank-level encryption, multi-factor authentication, and regular third-party security audits to protect your information and assets.",
        },
        {
            question: "Can I access international markets through Rising Capital?",
            answer: "Yes, we provide access to over 50 global markets with competitive forex rates. Our platform supports trading in multiple currencies with real-time settlement.",
        },
        {
            question: "What kind of reporting will I receive?",
            answer: "You'll get comprehensive monthly statements, quarterly performance reviews, and on-demand reporting through our client portal. Our reports include tax optimization insights and benchmark comparisons.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    return (
        <section
            id="faq"
            ref={sectionRef}
            className="relative min-h-screen py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden"
        >
            {/* Particle Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]"></div>
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [0, -1000],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'linear',
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-20"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                        Frequently Asked{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Questions
                        </span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Discover everything you need to know about investing with Rising Capital.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-4xl mx-auto"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="mb-6 rounded-2xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <h3
                                    className="text-xl md:text-2xl font-semibold text-white pr-4 group-hover:text-blue-300 transition-colors duration-200"
                                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                                >
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-blue-300 transition-colors duration-200" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
                                        className="overflow-hidden"
                                        id={`faq-answer-${index}`}
                                    >
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;