import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero com Suijeto Programador!',
  openGraph: {
    title: 'Aprendendo Next JS com Sujeito no youtube!',
    description: 'Aprendendo Next JS do zero com Suijeto Programador!',
    images: ['']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function Home() {
  return (
    <div>
      <h1>Página HOME</h1>
    </div>
  )
}