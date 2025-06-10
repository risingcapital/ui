'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Features = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const features = [
        {
            title: 'AI-Driven Insights',
            description: 'Leverage advanced analytics to identify high-yield opportunities.',
            icon: 'https://images.unsplash.com/photo-1620712943543-bcc9466e7070?q=80&w=100&auto=format&fit=crop',
        },
        {
            title: 'Global Portfolio',
            description: 'Access premium properties across major markets worldwide.',
            icon: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=100&auto=format&fit=crop',
        },
        {
            title: 'Expert Guidance',
            description: 'Work with our seasoned advisors for tailored strategies.',
            icon: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=100&auto=format&fit=crop',
        },
    ]

    const cardRotate = useTransform(scrollYProgress, [0, 0.5], [10, 0])
    const cardOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])

    return (
        <section id="investments" ref={ref} className="relative py-20 overflow-hidden" style={{
            backgroundColor: 'var(--background)'
        }}>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--foreground)' }}>
                        Why <span className="text-blue-400">Rising Capital</span>
                    </h2>
                    <p className="text-base sm:text-lg" style={{ color: 'var(--foreground)' }}>
                        Unmatched expertise and technology for wealth creation
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            style={{ rotateY: cardRotate, opacity: cardOpacity }}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)' }}
                            className="bg-card-bg rounded-lg p-6 shadow-md backdrop-blur-sm"
                        >
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-12 h-12 rounded-full mb-4 object-cover"
                            />
                            <h3 className="text-lg sm:text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
                                {feature.title}</h3>
                            <p className="text-sm sm:text-base" style={{ color: 'var(--foreground)' }}>
                                {feature.description}</p>
                            <a
                                href="#learn-more"
                                className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300"
                            >
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features