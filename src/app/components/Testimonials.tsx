'use client'
import { motion } from 'framer-motion'
import { User } from 'lucide-react';
import Image from 'next/image'

const testimonials = [
    {
        name: "Bruce wayne",
        role: "Vigiliant",
        company: "Gotham city",
        content: "Rising Capital's analytics platform has transformed how we manage client portfolios. The insights are unparalleled and the execution is flawless.",
        avatar: "/assets/user.png"
    },
    {
        name: "Bruce wayne",
        role: "Vigiliant",
        company: "Wayne Enterprises",
        content: "As a high-net-worth individual, I appreciate the personalized service and access to exclusive opportunities that Rising Capital provides.",
        avatar: "/assets/user.png"
    },
    {
        name: "Bruce wayne",
        role: "Vigiliant",
        company: "Wayne Enterprises",
        content: "The combination of technology and human expertise at Rising Capital is exactly what modern investors need in today's complex markets.",
        avatar: "/assets/user.png"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Our Investors </span>Have to Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hear from investors who trust us with their portfolios
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.content}"</p>
                            <div className="mt-6 flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials