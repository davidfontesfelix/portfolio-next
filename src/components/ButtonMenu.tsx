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
      className="absolute mr-6 mt-10 h-16 w-12 rounded-full bg-sky-900 smartphones:mr-2  flex items-center flex-col gap-[6px] justify-center border border-gray-600"
    >
      <div className='w-7 h-[2px] rounded-lg bg-white'></div>
      <div className='w-7 h-[2px] rounded-lg bg-white'></div>
      <div className='w-7 h-[2px] rounded-lg bg-white'></div>
    </button>
  )
}
