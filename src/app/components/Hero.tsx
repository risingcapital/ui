'use client'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Full-bleed background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-bg.png"
                    alt="Investment analytics"
                    fill
                    className="object-cover w-full h-full"
                    priority
                    quality={100}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/20"></div> */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-gray-900/10"></div> */}
            </div>

            {/* Decorative light effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-400/10 filter blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-indigo-400/10 filter blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 mb-12 lg:mb-0"
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Smart Investing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Modern Investors</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-600 mb-10 max-w-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Achieve your financial goals with our data-driven investment strategies and personalized wealth management solutions.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all font-medium text-lg"
                            >
                                Invest With Us <ChevronRight />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full bg-white/0 text-gray-800 border-2 border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all font-medium text-lg"
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                animate={{
                    y: [0, 15, 0],
                    opacity: [0.6, 1, 0.6]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
            >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.div>
        </section>
    )
}

export default Hero