'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const testimonials = [
        {
            name: 'Seline Kyle',
            role: 'Investor',
            content: 'Rising Capital’s platform is unmatched, delivering exceptional returns.',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
        },
        {
            name: 'Bruce Wayne',
            role: 'Client',
            content: 'The AI insights transformed my investment strategy.',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
        },
        {
            name: 'Alfred',
            role: 'Partner',
            content: 'Their global expertise is a game-changer for wealth creation.',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop',
        },
        {
            name: 'Seline Kyle',
            role: 'Investor',
            content: 'Rising Capital’s platform is unmatched, delivering exceptional returns.',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
        },
        {
            name: 'Bruce Wayne',
            role: 'Client',
            content: 'The AI insights transformed my investment strategy.',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
        },
        {
            name: 'Alfred',
            role: 'Partner',
            content: 'Their global expertise is a game-changer for wealth creation.',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop',
        },
    ]

    const extendedTestimonials = [...testimonials, ...testimonials] // Duplicate for seamless loop

    // Auto-scroll logic
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const scrollAmount = container.scrollWidth / 2

        const interval = setInterval(() => {
            container.scrollBy({ left: 310, behavior: 'smooth' })

            if (container.scrollLeft >= scrollAmount) {
                container.scrollTo({ left: 0, behavior: 'auto' })
            }
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        const container = containerRef.current
        if (!container) return

        const offset = direction === 'left' ? -310 : 310
        container.scrollBy({ left: offset, behavior: 'smooth' })
    }

    return (
        <section id="testimonials" className="py-20 overflow-hidden" style={{
            backgroundColor: 'var(--background)'
        }}>
            <div className="container mx-auto px-6 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--foreground)' }}>
                        Trusted by <span className="text-blue-400">Investors</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    <div
                        ref={containerRef}
                        className="flex overflow-x-scroll no-scrollbar space-x-6 scroll-smooth snap-x snap-mandatory px-6"
                    >
                        {extendedTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="w-1/3 flex-shrink-0 snap-start bg-card-bg rounded-xl p-6 shadow-md backdrop-blur-md transition hover:scale-105"
                            >

                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-base font-semibold" style={{ color: 'var(--foreground)' }}>{testimonial.name}</h4>
                                        <p className="text-sm" style={{ color: 'var(--foreground)' }}>{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-base" style={{ color: 'var(--foreground)' }}>
                                    {testimonial.content}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Arrows (perfectly positioned) */}
                    <div className="absolute inset-y-0 left-0 flex items-center z-20 pl-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-full shadow-md hover:bg-white/20 transition"
                        >
                            <FaArrowLeft className="text-white" />
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center z-20 pr-2">
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-full shadow-md hover:bg-white/20 transition"
                        >
                            <FaArrowRight className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
