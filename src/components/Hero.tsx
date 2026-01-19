import Link from 'next/link'

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-300 dark:via-dark-200 dark:to-dark-300">
                {/* Animated circles */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left animate-fade-in">
                        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                            🚀 Revolutionary Mobile Advertising
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="text-gray-900 dark:text-white">Mobile Advertising</span>
                            <br />
                            <span className="gradient-text">That Moves Your Brand</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                            Transform city rikshaws into powerful advertising platforms. Our SMD displays
                            take your brand message across the entire city, reaching thousands of potential
                            customers every day.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="#contact" className="btn-primary text-center">
                                Start Your Campaign
                            </Link>
                            <Link href="#how-it-works" className="btn-secondary text-center">
                                Learn More
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-dark-50">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Active Rikshaws</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Partner Brands</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-primary">1M+</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Daily Views</div>
                            </div>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="relative animate-slide-up hidden lg:block">
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Rikshaw illustration placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    {/* SMD Display representation */}
                                    <div className="w-80 h-48 bg-gradient-to-br from-primary to-primary-400 rounded-2xl shadow-2xl shadow-primary/30 flex items-center justify-center animate-float">
                                        <div className="text-center text-white p-4">
                                            <div className="text-4xl mb-2">📺</div>
                                            <div className="font-bold text-xl">SMD Display</div>
                                            <div className="text-sm opacity-80">Your Ad Here</div>
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-4 bg-gray-300 dark:bg-dark-50 rounded-full blur-sm"></div>

                                    {/* Floating brand badges */}
                                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-dark-50 rounded-xl shadow-lg flex items-center justify-center animate-bounce-slow">
                                        <span className="text-2xl">🍔</span>
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white dark:bg-dark-50 rounded-xl shadow-lg flex items-center justify-center animate-bounce-slow delay-500">
                                        <span className="text-xl">🍕</span>
                                    </div>
                                    <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white dark:bg-dark-50 rounded-full shadow-lg flex items-center justify-center animate-bounce-slow delay-1000">
                                        <span className="text-lg">✨</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}
