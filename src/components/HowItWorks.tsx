export default function HowItWorks() {
    const steps = [
        {
            step: '01',
            title: 'Contact Us',
            description: 'Reach out to our team to discuss your advertising goals and requirements. We will understand your brand and target audience.',
            icon: '📞',
        },
        {
            step: '02',
            title: 'Choose Your Package',
            description: 'Select from our flexible advertising packages based on your budget, duration, and coverage area preferences.',
            icon: '📦',
        },
        {
            step: '03',
            title: 'Submit Your Design',
            description: 'Provide your advertisement design or let our creative team craft a compelling visual for your campaign.',
            icon: '🎨',
        },
        {
            step: '04',
            title: 'Launch & Track',
            description: 'Watch your brand move across the city! Track performance in real-time through our analytics dashboard.',
            icon: '🚀',
        },
    ]

    return (
        <section id="how-it-works" className="section-padding bg-white dark:bg-dark-300">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                        How It Works
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-gray-900 dark:text-white">Simple Steps to </span>
                        <span className="gradient-text">Get Started</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Starting your mobile advertising campaign is easy. Follow these simple steps
                        and watch your brand reach new heights.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 -translate-y-1/2"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-gray-50 dark:bg-dark-200 rounded-2xl p-8 card-hover h-full relative z-10">
                                    {/* Step number */}
                                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                                        {step.step}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl mb-6 mt-4">
                                        {step.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow for desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                                        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#contact"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        Start Your Campaign
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
