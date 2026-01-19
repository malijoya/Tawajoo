import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Brands from '@/components/Brands'
import Stats from '@/components/Stats'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-white dark:bg-dark-300">
            <Navbar />
            <Hero />
            <About />
            <Stats />
            <Services />
            <HowItWorks />
            <Brands />
            <Contact />
            <Footer />
        </main>
    )
}
