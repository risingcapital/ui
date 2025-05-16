'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const BlogSection = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { margin: "-10%", once: true })

    const articles = [
        {
            title: "Why Is Real Estate Investing So Ideal?",
            excerpt: "Chris Rock once famously explained the difference between rich and wealthy: Shaquille O'Neal is rich, the man who signs his checks is wealthy. Real estate remains the most reliable path to true wealth.",
            image: "/assets/logo.jpg",
            slug: "why-real-estate-investing"
        },
        {
            title: "Anatomy of a Multifamily Real Estate Syndication",
            excerpt: "If you want to buy a midsize apartment building, unless you've got $10 million or more sitting around, you'll need partners. Here's how institutional investors structure these deals.",
            image: "/assets/logo.jpg",
            slug: "multifamily-syndication"
        },
        {
            title: "Why Multifamily Real Estate is an Evergreen Investment",
            excerpt: "Of all real estate investments - single-family, retail, office - apartments are the most resilient. Here's why institutional capital continues flowing to multifamily even during downturns.",
            image: "/assets/logo.jpg",
            slug: "multifamily-evergreen"
        }
    ]

    return (
        <section
            ref={sectionRef}
            className="relative py-16 bg-gray-50 overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-10 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-blue-600 font-medium tracking-widest text-xs uppercase mb-4">
                        Investor Insights
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Strategic Perspectives
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Research and analysis from our investment team
                    </p>
                </motion.div>

                {/* Blog cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="relative h-60">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {article.excerpt}
                                </p>
                                <motion.a
                                    href={`/insights/${article.slug}`}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                    whileHover={{ x: 4 }}
                                >
                                    Read Article
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </motion.a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogSection