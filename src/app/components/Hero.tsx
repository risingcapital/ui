'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
// import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    // Scroll-based animations
    const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4])
    const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
    const textY = useTransform(scrollYProgress, [0, 0.6], [0, -100])
    const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
    // const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
    // const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5])
    const ctaY = useTransform(scrollYProgress, [0, 0.6], [0, 50])

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Video Background */}
            <motion.video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ opacity: videoOpacity, scale: videoScale }}
            >
                <source src="/assets/hero-bg.mp4" type="video/mp4" />
            </motion.video>
            {/* Overlay for contrast */}
            <motion.div
                className="absolute inset-0 z-10"
                style={{
                    opacity: videoOpacity,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(0, 0, 0, 0.5) 100%)'
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-16 lg:py-24">
                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left space-y-6"
                        style={{ y: textY, opacity: textOpacity }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                        >
                            <span className="relative inline-block">
                                Elevate Your Wealth
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></span>
                            </span>
                            <br />
                            with <span className="text-blue-600">Rising Capital</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                            className="text-base sm:text-lg text-gray-100 max-w-md mx-auto lg:mx-0"
                        >
                            Invest in global luxury properties with AI-driven insights and expert guidance.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                            style={{ y: ctaY }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-base sm:text-lg flex items-center justify-center mx-auto lg:mx-0 shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                            >
                                Start Investing <ArrowRight className="ml-2 h-5 w-5" />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Featured Property Image */}
                    {/* <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                        className="lg:w-1/2 flex justify-center"
                        style={{ scale: imageScale, opacity: imageOpacity }}
                    >
                        <div className="relative w-full max-w-[500px] sm:max-w-[600px] h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-blue-500/20">
                            <Image
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                                alt="Featured Property"
                                fill
                                className="object-cover"
                                priority
                            />
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6"
                                initial={{ y: 80 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            >
                                <h3 className="text-white text-lg sm:text-xl font-semibold">Dubai Oceanfront Villa</h3>
                                <p className="text-gray-300 text-sm">$28M Investment, 7.8% Annual ROI</p>
                            </motion.div>
                        </div>
                    </motion.div> */}
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
                className="absolute top-8 right-8 w-20 h-20 bg-blue-500/20 rounded-full filter blur-xl z-10"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                }}
            />
            <motion.div
                className="absolute bottom-8 left-8 w-16 h-16 bg-purple-500/20 rounded-full filter blur-xl z-10"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
            />
        </section>
    )
}

export default Hero