'use client'
import { motion } from 'framer-motion'

const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Elevate Your Investments?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                        Join thousands of investors who trust Rising Capital with their portfolios.
                    </p>
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-white text-blue-600 hover:bg-gray-100 font-medium text-lg shadow-lg transition-all"
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium text-lg transition-all"
                        >
                            Schedule a Call
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA