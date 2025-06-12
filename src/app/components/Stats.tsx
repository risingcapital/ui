'use client';
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
    { value: 15.8, suffix: 'B', label: 'Assets Managed', description: 'Global real estate portfolio' },
    { value: 98.7, suffix: '%', label: 'Client Trust', description: 'Investor satisfaction rate' },
    { value: 283, suffix: '', label: 'Properties', description: 'Premium assets worldwide' },
    { value: 12.4, suffix: 'K', label: 'Investors', description: 'High-net-worth clients' },
];

const Stats = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: '-20%' });
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const statScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const statOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

    return (
        <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden" style={{
            backgroundColor: 'var(--background)'
        }}>
            {/* Background Animation Layer */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <svg className="absolute inset-0 w-full h-full opacity-10" fill="none">
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="200"
                        stroke="url(#grad)"
                        strokeWidth="2"
                        animate={{ r: [180, 220, 180] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: 'var(--foreground)' }}>
                        Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Impact</span>
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl" style={{ color: 'var(--foreground)' }}>
                        Setting new standards in luxury real estate investment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
                            style={{ scale: statScale, opacity: statOpacity }}
                            whileHover={{ scale: 1.05 }}
                            className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-3xl sm:text-4xl font-bold mb-2">
                                <CountUp
                                    end={isInView ? stat.value : 0}
                                    duration={2}
                                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                                    suffix={stat.suffix}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                                />
                            </div>
                            <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>{stat.label}</h3>
                            <p className="text-sm" style={{ color: 'var(--foreground)' }}>{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;