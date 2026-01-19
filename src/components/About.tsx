export default function About() {
    const highlights = [
        {
            icon: '🎯',
            title: 'Targeted Reach',
            description: 'Your ads travel through high-traffic areas, reaching your target audience where they live, work, and shop.',
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'Cutting-edge SMD technology delivers vibrant, eye-catching displays that capture attention.',
        },
        {
            icon: '💰',
            title: 'Cost-Effective',
            description: 'Get maximum exposure at a fraction of traditional billboard advertising costs.',
        },
        {
            icon: '📊',
            title: 'Measurable Results',
            description: 'Track your campaign performance with real-time analytics and comprehensive reports.',
        },
    ]

    return (
        <section id="about" className="section-padding bg-white dark:bg-dark-300">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                        About Us
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-gray-900 dark:text-white">Revolutionizing </span>
                        <span className="gradient-text">Outdoor Advertising</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Tawajoo transforms ordinary rikshaws into extraordinary advertising platforms.
                        We connect brands with mobile audiences through innovative SMD technology,
                        making advertising more accessible, affordable, and effective.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image/Visual */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-video bg-gradient-to-br from-primary via-primary-400 to-primary-300 flex items-center justify-center pb-16">
                                <div className="text-center text-white p-8">
                                    <div className="text-6xl mb-4">🛺</div>
                                    <h3 className="text-2xl font-bold mb-3">Moving Billboards</h3>
                                    <p className="text-white/90 text-lg">Advertisements that go where your customers are</p>
                                </div>
                            </div>
                            {/* Overlay stats */}
                            <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                                <div className="flex justify-around text-white text-center">
                                    <div>
                                        <div className="text-2xl font-bold">24/7</div>
                                        <div className="text-xs opacity-80">Coverage</div>
                                    </div>
                                    <div className="border-l border-white/20"></div>
                                    <div>
                                        <div className="text-2xl font-bold">10+</div>
                                        <div className="text-xs opacity-80">Cities</div>
                                    </div>
                                    <div className="border-l border-white/20"></div>
                                    <div>
                                        <div className="text-2xl font-bold">99%</div>
                                        <div className="text-xs opacity-80">Uptime</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10"></div>
                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10"></div>
                    </div>

                    {/* Right - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-gray-50 dark:bg-dark-200 card-hover group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
