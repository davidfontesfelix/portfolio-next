import { MyContextButtonMenu } from '@/context/MyContextButtonMenu'
import { useContext } from 'react'

export default function ButtonMenu() {
  const { viewAside, setViewAside } = useContext(MyContextButtonMenu)

  function handleClickButtonMenu() {
    if (viewAside === 'false') {
      setViewAside('true')
    } else if (viewAside === 'true') {
      setViewAside('false')
    }
  }

  return (
    <button
      onClick={() => handleClickButtonMenu()}
      className="absolute mr-6 mt-10 flex h-16 w-12 flex-col items-center  justify-center gap-[6px] rounded-full border border-gray-600 bg-sky-900 smartphones:mr-2"
    >
      <div className="h-[2px] w-7 rounded-lg bg-white"></div>
      <div className="h-[2px] w-7 rounded-lg bg-white"></div>
      <div className="h-[2px] w-7 rounded-lg bg-white"></div>
    </button>
  )
}
