'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-bg.png"
                    alt="Financial markets"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Financial</span> Independence Passively
                    </motion.h1>

                    <motion.p
                        className="text-lg text-white/80 mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Create a future for you and your family through passive investing in multifamily real estate
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
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all font-medium text-lg"
                        >
                            Invest With Us
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all font-medium text-lg"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated Scroll Indicator */}
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