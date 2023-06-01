import { MyContextButtonMenu } from '@/context/MyContextButtonMenu'
import { MyContextSection } from '@/context/MyContextSection'
import { Roboto_Mono } from 'next/font/google'
import { useContext } from 'react'
import Image from 'next/image'
import Person from '../../assets/icons/person.svg'
const RobotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['700'] })

export default function ListAside() {
  const { setViewSection } = useContext(MyContextSection)
  const { setViewAside } = useContext(MyContextButtonMenu)

  function scrollToSection(sectionId: string) {
    setViewSection('true')
    setViewAside('false')

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
    <ul className="mt-8 flex">
      <li
        onClick={() => scrollToSection('SobreMim')}
        className={`flex flex-1 cursor-pointer items-center justify-center gap-1 py-2 text-gray-100 transition-colors hover:bg-blue-200 hover:text-gray-600 ${RobotoMono.className}`}
        style={{ userSelect: 'none' }}
      >
        <Image width={30} src={Person} alt="" />
        <h4 className="text-lg uppercase">Sobre mim</h4>
      </li>
    </ul>
  )
}
