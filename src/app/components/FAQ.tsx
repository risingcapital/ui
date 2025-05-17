'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const contentRefs = useRef<(HTMLDivElement | null)[]>([])
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { margin: "-10%", once: true })

    const faqs = [
        {
            question: "What is your investment philosophy?",
            answer: "We employ a disciplined, research-driven approach combining quantitative models with fundamental analysis. Our three-pillar framework focuses on capital preservation, asymmetric returns, and liquidity management."
        },
        {
            question: "How do you ensure portfolio security?",
            answer: "We implement institutional-grade safeguards: 1) Assets custodied at Morgan Stanley, 2) Biometric authentication, 3) End-to-end encryption, 4) Daily third-party audits, and 5) $25M cybersecurity insurance policy."
        },
        {
            question: "What reporting will I receive?",
            answer: "Clients get: 1) Monthly GIPS-compliant statements, 2) Quarterly performance attribution reports, 3) Annual tax documentation, and 4) 24/7 access to our client portal with real-time analytics."
        },
        {
            question: "How do you ensure portfolio security?",
            answer: "We implement institutional-grade safeguards: 1) Assets custodied at Morgan Stanley, 2) Biometric authentication, 3) End-to-end encryption, 4) Daily third-party audits, and 5) $25M cybersecurity insurance policy."
        },
        {
            question: "What reporting will I receive?",
            answer: "Clients get: 1) Monthly GIPS-compliant statements, 2) Quarterly performance attribution reports, 3) Annual tax documentation, and 4) 24/7 access to our client portal with real-time analytics."
        }
    ]

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section
            ref={sectionRef}
            className="relative py-3 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-6 mt-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Investor Questions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Clear answers for sophisticated investors
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto mb-9 space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="overflow-hidden"
                        >
                            <div className={`border rounded-xl overflow-hidden ${activeIndex === index ? 'border-blue-200 shadow-sm' : 'border-gray-100'}`}>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center p-3 text-left hover:bg-gray-50 transition-colors"
                                    aria-expanded={activeIndex === index}
                                >
                                    <h2 className={`text-lg font-medium ${activeIndex === index ? 'text-blue-600' : 'text-gray-900'}`}>
                                        {faq.question}
                                    </h2>
                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        className={`ml-4 flex-shrink-0 ${activeIndex === index ? 'text-blue-600' : 'text-gray-400'}`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1,
                                                transition: {
                                                    height: { duration: 0.3, ease: 'easeOut' },
                                                    opacity: { duration: 0.2, delay: 0.1 }
                                                }
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    height: { duration: 0.2 },
                                                    opacity: { duration: 0.1 }
                                                }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div
                                                ref={el => {
                                                    contentRefs.current[index] = el;
                                                }}
                                                className="px-6 pb-6 pt-2 text-gray-600"
                                            >
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 border border-gray-200 mb-9"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Full Investment Details
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Download our comprehensive memorandum with strategy details and performance benchmarks.
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download Memorandum
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQSection