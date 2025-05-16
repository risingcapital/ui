'use client'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { useRef } from 'react'

const Stats = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { margin: "-20%", once: true })

    const stats = [
        {
            value: 15.8,
            suffix: "B",
            label: "Assets Under Management",
            description: "Across all investment vehicles and strategies"
        },
        {
            value: 98.7,
            suffix: "%",
            label: "Client Retention",
            description: "5-year average across all client segments"
        },
        {
            value: 283,
            suffix: "",
            label: "Institutional Partners",
            description: "Global network of banks and financial institutions"
        },
        {
            value: 12.4,
            suffix: "K",
            label: "Active Investors",
            description: "Accredited investors and family offices"
        }
    ]

    return (
        <section ref={sectionRef} className="relative py-16 bg-white overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-50 filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-50 filter blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Scale</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Quantifying our global impact and client success
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.32, 0.72, 0, 1]
                            }}
                            className="bg-gradient-to-b from-white to-gray-50 rounded-xl p-8 border border-gray-100 hover:border-blue-200 transition-colors"
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-5xl font-bold text-gray-900 mb-2">
                                <CountUp
                                    end={stat.value}
                                    duration={3}
                                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                                    suffix={stat.suffix}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                                />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">
                                {stat.label}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats