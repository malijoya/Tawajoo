export default function Services() {
    const services = [
        {
            icon: '📺',
            title: 'SMD Display Advertising',
            description: 'High-resolution LED displays that showcase your brand with vivid colors and sharp visuals, visible day and night.',
            features: ['HD Quality Display', 'Weather Resistant', 'Night Visibility'],
        },
        {
            icon: '🎨',
            title: 'Creative Design Services',
            description: 'Our in-house design team creates eye-catching advertisements optimized for mobile display formats.',
            features: ['Custom Designs', 'Brand Guidelines', 'Animation Support'],
        },
        {
            icon: '📍',
            title: 'Strategic Route Planning',
            description: 'We plan routes that maximize your brand exposure in high-traffic commercial and residential areas.',
            features: ['Zone Selection', 'Peak Hours Coverage', 'Event Targeting'],
        },
        {
            icon: '📊',
            title: 'Analytics & Reporting',
            description: 'Comprehensive tracking and reporting system to measure your campaign effectiveness.',
            features: ['Real-time Tracking', 'Impression Reports', 'ROI Analysis'],
        },
        {
            icon: '🔄',
            title: 'Flexible Campaigns',
            description: 'Run campaigns for a day, a week, or year-round. Update your content anytime remotely.',
            features: ['Daily Updates', 'Remote Control', 'Scalable Plans'],
        },
        {
            icon: '🤝',
            title: 'Brand Partnerships',
            description: 'Join our network of successful brands and benefit from cross-promotional opportunities.',
            features: ['Partner Network', 'Co-branding', 'Exclusive Deals'],
        },
    ]

    return (
        <section id="services" className="section-padding bg-gray-50 dark:bg-dark-200">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-gray-900 dark:text-white">Everything You Need to </span>
                        <span className="gradient-text">Succeed</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        From design to deployment, we provide end-to-end mobile advertising solutions
                        that drive results for your brand.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-dark-300 rounded-2xl p-8 card-hover group relative overflow-hidden"
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="relative">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-400 flex items-center justify-center text-3xl mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, fIndex) => (
                                        <li
                                            key={fIndex}
                                            className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                                        >
                                            <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
