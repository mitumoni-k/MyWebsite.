import Experience from '@/components/main/Experience'
import Footer from '@/components/main/Footer'
import Hero from '@/components/main/Hero'
import Navbar from '@/components/main/Navbar'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import StarsCanvas from '@/components/main/StarBackground'


export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col  gap-20 overflow-hidden'>
      <StarsCanvas />
      <Navbar />
      <Hero />
      <Skills />
        <Experience />
      <Projects />
      <Footer />
      </div>
    </main>
  )
}
