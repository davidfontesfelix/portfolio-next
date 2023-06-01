import Eu from '../../assets/eu.png'
import LinksAside from './LinksAside'
import Image from 'next/image'
import ListAside from './ListAside'

export default function Asides() {
  return (
    <aside
      className="fixed z-50 h-screen w-[256px] -translate-x-[256px] bg-blue-600 transition-transform xl:translate-x-[0px]"
      style={{
        boxShadow: '10px 0px 12px -1px rgba(0,0,0,0.46)',
      }}
    >
      <div className="mt-9 flex flex-col items-center gap-4">
        <Image
          className="w-[140px] rounded-2xl border-4 border-blue-200/20 "
          src={Eu}
          alt="minha foto"
          style={{ boxShadow: '4px 36px 52px -17px rgba(0,0,0,0.71)' }}
        />
        <h2 className="text-2xl font-bold text-gray-100">David Fontes</h2>
      </div>
      <div className="mt-4 flex justify-center gap-3">
        <LinksAside />
      </div>
      <div>
        <ListAside />
      </div>
    </aside>
  )
}
