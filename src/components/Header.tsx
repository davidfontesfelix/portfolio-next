import { useContext } from 'react'
import Cubo from './Cubo/cubo'
import { MyContextSection } from '@/context/MyContextSection'

export default function Header() {
  const { setViewSection } = useContext(MyContextSection)

  function scrollToSection(sectionId: string) {
    setViewSection('true')

    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        })
      }
    })
  }

  return (
    <header className="flex h-screen w-full items-center justify-center">
      {/* background */}
      <div className="flex items-center justify-center">
        <Cubo />
      </div>

      <div className="fixed flex flex-col items-center">
        <div className="flex items-end gap-2">
          <span
            className="text-3xl"
            style={{
              animation: 'tchauzin 2s infinite',
            }}
          >
            👋
          </span>
          <h2 className="text-lg font-medium text-white">Bem-Vind@</h2>
        </div>
        <h1
          className="max-sm:text-6xl text-8xl font-bold text-white smartphones:text-6xl"
          style={{ textShadow: '2px 2px #000' }}
        >
          David Fontes
        </h1>
        <h2 className="text-xl font-medium text-white">
          Desenvolvedor Front-end
        </h2>
      </div>
      <button
        onClick={() => scrollToSection('SobreMim')}
        className="fixed mt-[600px] flex h-14 w-52 animate-bounce cursor-pointer items-center justify-center rounded-2xl border-2 border-white/30 bg-white/10"
      >
        <p className="text-white/70"> Click para desbloquear</p>
      </button>
    </header>
  )
}
