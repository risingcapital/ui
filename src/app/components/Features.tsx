'use client'
import { motion } from 'framer-motion'
import { BarChart2, Lock, Globe, TrendingUp } from 'lucide-react'

const Features = () => {
    const features = [
        {
            icon: <BarChart2 size={40} className="text-blue-400" />,
            title: "Advanced Analytics",
            description: "Real-time market data with institutional-grade tools"
        },
        {
            icon: <Lock size={40} className="text-purple-400" />,
            title: "Secure Platform",
            description: "Bank-level encryption and multi-factor authentication"
        },
        {
            icon: <Globe size={40} className="text-blue-400" />,
            title: "Global Markets",
            description: "Access to 50+ international exchanges"
        },
        {
            icon: <TrendingUp size={40} className="text-purple-400" />,
            title: "Growth Focused",
            description: "Curated portfolio strategies for maximum returns"
        }
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Features</span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Everything you need to succeed in today's markets
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all"
                        >
                            <div className="mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-white/70">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features