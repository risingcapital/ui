'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BarChart2, Globe, Users, ShieldCheck, TrendingUp, Database } from 'lucide-react'

const Features = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const features = [
        {
            title: 'AI-Driven Insights',
            description: 'Our proprietary algorithms analyze over 10,000 data points to identify high-yield opportunities before they hit mainstream markets.',
            icon: <BarChart2 className="w-8 h-8" />,
            color: 'text-purple-400',
            bgColor: 'bg-purple-400/10'
        },
        {
            title: 'Global Portfolio',
            description: 'Access exclusive properties across 35+ countries with our curated selection of premium real estate investments.',
            icon: <Globe className="w-8 h-8" />,
            color: 'text-blue-400',
            bgColor: 'bg-blue-400/10'
        },
        {
            title: 'Expert Guidance',
            description: 'Our team of 50+ seasoned advisors with an average of 15 years experience will craft your personalized wealth strategy.',
            icon: <Users className="w-8 h-8" />,
            color: 'text-emerald-400',
            bgColor: 'bg-emerald-400/10'
        },
        {
            title: 'Risk Management',
            description: 'Multi-layered protection with our institutional-grade security protocols and diversified asset allocation.',
            icon: <ShieldCheck className="w-8 h-8" />,
            color: 'text-amber-400',
            bgColor: 'bg-amber-400/10'
        },
        {
            title: 'Performance Focused',
            description: 'Consistently delivering 18-25% annual returns through strategic market positioning and timing.',
            icon: <TrendingUp className="w-8 h-8" />,
            color: 'text-red-400',
            bgColor: 'bg-red-400/10'
        },
        {
            title: 'Data Transparency',
            description: 'Real-time portfolio analytics with full visibility into all holdings and performance metrics.',
            icon: <Database className="w-8 h-8" />,
            color: 'text-cyan-400',
            bgColor: 'bg-cyan-400/10'
        },
    ]

    const cardRotate = useTransform(scrollYProgress, [0, 0.5], [10, 0])
    const cardOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])
    const y = useTransform(scrollYProgress, [0, 1], [100, -50])

    return (
        <section
            id="features"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{ backgroundColor: 'var(--background)' }}
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-15">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-500/20 filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-blue-100/10 border border-blue-200/20">
                        <span className="text-sm font-medium text-blue-400">INVESTMENT EXCELLENCE</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Rising Capital</span> Advantage
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--foreground)' }}>
                        Combining cutting-edge technology with decades of market expertise to deliver superior returns
                    </p>
                </motion.div>

                <motion.div
                    style={{ y }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            style={{
                                rotateY: cardRotate,
                                opacity: cardOpacity
                            }}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20
                            }}
                            className={`${feature.bgColor} border border-border rounded-xl p-8 backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                        >
                            <div className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                                <span className={feature.color}>
                                    {feature.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                                {feature.title}
                            </h3>
                            <p className="text-base mb-6" style={{ color: 'var(--foreground)' }}>
                                {feature.description}
                            </p>
                            <a
                                href="#learn-more"
                                className={`inline-flex items-center ${feature.color} hover:opacity-80 transition-opacity`}
                            >
                                Learn more
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats section */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-border rounded-2xl p-8 sm:p-12 backdrop-blur-sm"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                            <p className="text-sm uppercase tracking-wider" style={{ color: 'var(--foreground)' }}>Client Retention</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-400 mb-2">22%</div>
                            <p className="text-sm uppercase tracking-wider" style={{ color: 'var(--foreground)' }}>Avg. Annual Return</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-400 mb-2">$4.2B</div>
                            <p className="text-sm uppercase tracking-wider" style={{ color: 'var(--foreground)' }}>Assets Managed</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-amber-400 mb-2">35+</div>
                            <p className="text-sm uppercase tracking-wider" style={{ color: 'var(--foreground)' }}>Countries</p>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    )
}

export default Features