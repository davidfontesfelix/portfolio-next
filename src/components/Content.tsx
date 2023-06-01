import { useContext } from 'react'
import AboutMe from './ AboutMe'
import Header from './Header'
import Projects from './Projects'

import ButtonMenu from './ButtonMenu'
import { MyContextSection } from '@/context/MyContextSection'

export default function Content() {
  const { viewSection } = useContext(MyContextSection)
  return (
    <div className="ml-0 h-full w-full xl:ml-64">
      <div className="fixed z-50 flex h-6 w-screen justify-end rounded-full button:hidden">
        <ButtonMenu />
      </div>
      <Header />
      {viewSection === 'true' ? <AboutMe /> : null}
      {viewSection === 'true' ? <Projects /> : null}
    </div>
  )
}
