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
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Animated Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg"
                    >
                        <span className="text-white font-bold text-xl">RC</span>
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-white font-bold text-xl hidden sm:block"
                    >
                        RISING CAPITAL
                    </motion.span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {['About', 'How It Works', 'Portfolio', 'Blog'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="relative group text-white/80 hover:text-white transition-colors"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="px-4 py-2 rounded-lg bg-transparent border border-white/20 hover:bg-white/10 transition-all">
                        Investor Login
                    </button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-blue-500/30 transition-all flex items-center"
                    >
                        Schedule Call <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
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
                        className="md:hidden bg-gray-900/95 backdrop-blur-lg w-full absolute top-full left-0 px-6 py-4"
                    >
                        <div className="flex flex-col space-y-6">
                            {['About', 'How It Works', 'Portfolio', 'Blog'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-white/80 hover:text-white transition-colors text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                                <button className="text-white/80 hover:text-white transition-colors text-left">
                                    Investor Login
                                </button>
                                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center w-full">
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