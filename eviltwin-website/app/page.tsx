import Navigation from '@/components/navigation'
import Content from '@/components/content'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 md:flex md:space-x-8 max-w-6xl">
      <Navigation />
      <Content />
    </main>
  )
}