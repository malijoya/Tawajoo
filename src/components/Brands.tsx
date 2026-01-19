export default function Brands() {
    const brands = [
        { name: 'Cheezious', emoji: '🍔' },
        { name: 'Savour Foods', emoji: '🍖' },
        { name: 'Pizza Hut', emoji: '🍕' },
        { name: 'KFC', emoji: '🍗' },
        { name: 'McDonald\'s', emoji: '🍟' },
        { name: 'Domino\'s', emoji: '🍕' },
        { name: 'Subway', emoji: '🥪' },
        { name: 'Hardee\'s', emoji: '🍔' },
    ]

    const testimonials = [
        {
            quote: 'Tawajoo helped us reach thousands of new customers. Our brand visibility increased dramatically!',
            author: 'Marketing Head',
            company: 'Cheezious',
            rating: 5,
        },
        {
            quote: 'The mobile advertising approach is innovative and cost-effective. Great results for our campaigns.',
            author: 'Brand Manager',
            company: 'Savour Foods',
            rating: 5,
        },
        {
            quote: 'Working with Tawajoo has been a game-changer for our local marketing strategy.',
            author: 'CEO',
            company: 'Local Restaurant Chain',
            rating: 5,
        },
    ]

    return (
        <section className="section-padding bg-gray-50 dark:bg-dark-200">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                        Our Partners
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-gray-900 dark:text-white">Trusted by </span>
                        <span className="gradient-text">Leading Brands</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Join our growing network of successful brands that have transformed their
                        advertising strategy with Tawajoo.
                    </p>
                </div>

                {/* Brand Logos */}
                <div className="mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-dark-300 rounded-xl p-6 flex flex-col items-center justify-center card-hover group"
                            >
                                <span className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                                    {brand.emoji}
                                </span>
                                <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-dark-300 rounded-2xl p-8 card-hover relative"
                        >
                            {/* Quote mark */}
                            <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif">
                                &ldquo;
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            <div className="border-t border-gray-100 dark:border-dark-50 pt-4">
                                <p className="font-semibold text-gray-900 dark:text-white">
                                    {testimonial.author}
                                </p>
                                <p className="text-sm text-primary">
                                    {testimonial.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
