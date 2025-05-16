'use client'
import { motion } from 'framer-motion'
import { BarChart2, Lock, Globe, TrendingUp, Shield, PieChart } from 'lucide-react'

const Features = () => {
    const features = [
        {
            icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
            title: "Advanced Analytics",
            description: "Real-time market data with institutional-grade tools and insights"
        },
        {
            icon: <Lock className="w-8 h-8 text-indigo-600" />,
            title: "Secure Platform",
            description: "Bank-level encryption and multi-factor authentication for your security"
        },
        {
            icon: <Globe className="w-8 h-8 text-blue-600" />,
            title: "Global Markets",
            description: "Access to international markets with competitive exchange rates"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
            title: "Growth Focused",
            description: "Curated portfolio strategies designed for maximum returns"
        },
        {
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: "Risk Management",
            description: "Sophisticated tools to protect and grow your investments"
        },
        {
            icon: <PieChart className="w-8 h-8 text-indigo-600" />,
            title: "Diversification",
            description: "Access to multiple asset classes for balanced portfolios"
        }
    ]

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Features</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to make informed investment decisions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features