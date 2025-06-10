'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { margin: '-20%', once: true })
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const faqs = [
        {
            question: 'What drives your investment strategy?',
            answer: 'Our AI-powered, data-driven approach combines predictive analytics with deep market expertise to maximize returns.',
        },
        {
            question: 'How do you secure my investments?',
            answer: 'We employ quantum-grade encryption, biometric authentication, and continuous audits, backed by a $50M cybersecurity policy.',
        },
        {
            question: 'What reporting tools do you offer?',
            answer: 'Real-time analytics, monthly performance reports, quarterly insights, and a 24/7 investor portal.',
        },
        {
            question: 'Can I invest globally?',
            answer: 'Yes, access premium real estate opportunities across 50+ global markets with tailored strategies.',
        },
        {
            question: 'What are your fee structures?',
            answer: 'Transparent, competitive fees detailed in our comprehensive investment memorandum.',
        },
    ]

    const faqOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])
    const faqY = useTransform(scrollYProgress, [0, 0.5], [50, 0])

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section ref={sectionRef} className="relative py-20 overflow-hidden" style={{
            backgroundColor: 'var(--background)'
        }}>
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900 z-0"
                style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.5, 0.2]) }}
            >
                <svg className="absolute inset-0 w-full h-full opacity-10" fill="none">
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="200"
                        stroke="url(#grad)"
                        strokeWidth="2"
                        animate={{ r: [200, 220, 200] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--foreground)' }}>
                        Clarity for <span className="text-cyan-400">Investors</span>
                    </h2>
                    <p className="text-base sm:text-lg" style={{ color: 'var(--foreground)' }}>
                        Answers to empower your investment journey
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto mb-12 space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            style={{ opacity: faqOpacity, y: faqY }}
                            className="overflow-hidden"
                        >
                            <div
                                className={`border rounded-2xl overflow-hidden ${activeIndex === index ? 'border-cyan-400/50 shadow-xl' : 'border-gray-700/50'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-800/30 transition-colors"
                                    aria-expanded={activeIndex === index}
                                >
                                    <h2 className={`text-lg sm:text-xl font-semibold ${activeIndex === index ? 'text-accent' : ''}`} style={{ color: 'var(--foreground)' }}>
                                        {faq.question}
                                    </h2>
                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        className={`ml-4 flex-shrink-0 ${activeIndex === index ? 'text-cyan-400' : 'text-gray-300'}`}
                                    >
                                        <ChevronDown className="w-6 h-6" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1,
                                                transition: { height: { duration: 0.4, ease: 'easeOut' }, opacity: { duration: 0.3 } },
                                            }}
                                            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } } }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-2 text-gray-300 text-base sm:text-lg">{faq.answer}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl mx-auto bg-card-bg backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 shadow-xl"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2" style={{ color: 'var(--foreground)' }}>Investment Blueprint</h3>
                            <p className="text-gray-300 text-base sm:text-lg" style={{ color: 'var(--foreground)' }}>
                                Dive into our strategy and performance metrics with our detailed memorandum.
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full font-medium text-base sm:text-lg"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download Now
                        </motion.button>
                    </div>
                </motion.div>
            </ div>
        </section>
    )
}

export default FAQ