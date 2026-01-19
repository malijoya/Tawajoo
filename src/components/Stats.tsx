'use client'

import { useState, useEffect } from 'react'

export default function Stats() {
    const stats = [
        { label: 'Active Rikshaws', value: 500, suffix: '+', icon: '🛺' },
        { label: 'Partner Brands', value: 50, suffix: '+', icon: '🏢' },
        { label: 'Daily Impressions', value: 1, suffix: 'M+', icon: '👁️' },
        { label: 'Cities Covered', value: 10, suffix: '+', icon: '🏙️' },
    ]

    const [counts, setCounts] = useState(stats.map(() => 0))
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    stats.forEach((stat, index) => {
                        const duration = 2000
                        const steps = 60
                        const increment = stat.value / steps
                        let current = 0

                        const timer = setInterval(() => {
                            current += increment
                            if (current >= stat.value) {
                                current = stat.value
                                clearInterval(timer)
                            }
                            setCounts((prev) => {
                                const newCounts = [...prev]
                                newCounts[index] = Math.floor(current)
                                return newCounts
                            })
                        }, duration / steps)
                    })
                }
            },
            { threshold: 0.5 }
        )

        const element = document.getElementById('stats-section')
        if (element) {
            observer.observe(element)
        }

        return () => observer.disconnect()
    }, [hasAnimated, stats])

    return (
        <section
            id="stats-section"
            className="py-16 bg-gradient-to-r from-primary to-primary-400 relative overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center text-white"
                        >
                            <div className="text-4xl mb-2">{stat.icon}</div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                                {counts[index]}
                                {stat.suffix}
                            </div>
                            <div className="text-white/80 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
