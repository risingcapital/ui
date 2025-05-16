'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg"
                    >
                        <img
                            src="/assets/logo.jpg"
                            alt="Rising Capital Logo"
                            className="w-full h-full object-cover rounded"
                        />
                    </motion.div>
                    <span className="text-gray-900 font-bold text-xl hidden sm:block">RISING CAPITAL</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {['About', 'Features', 'Portfolio', 'Blog', 'Testimonials', 'FAQ'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative group text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/login" className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-colors font-medium">
                        Investor Login
                    </Link>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-blue-500/30 transition-all flex items-center"
                    >
                        Schedule Call <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-lg w-full absolute top-full left-0 px-6 py-4"
                    >
                        <div className="flex flex-col space-y-6">
                            {['About', 'Features', 'Testimonials', 'FAQ'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
                                <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium">
                                    Investor Login
                                </Link>
                                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center w-full font-medium">
                                    Schedule Call <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar