import Image from 'next/image'

import Linkedin from '../../assets/icons/Linkedin.svg'
import Github from '../../assets/icons/Github.svg'
import PDF from '../../assets/icons/PDF.svg'

export default function LinksAside() {
  return (
    <>
      <a
        target="_blanc"
        href=""
        className="rounded-xl border border-gray-400 bg-gray-400 hover:border-gray-100/60"
      >
        <Image
          src={Linkedin}
          width={35}
          height={35}
          alt="Linkedin de David Fontes Felix"
          className="pb-2 pl-2 pr-2 pt-2"
        />
      </a>
      <a
        target="_blanc"
        href=""
        className="rounded-xl border border-gray-300 bg-gray-400 hover:border-gray-100/60"
      >
        <Image
          src={Github}
          width={35}
          height={35}
          alt="Github de David Fontes Felix"
          className="pb-2 pl-2 pr-2 pt-2"
        />
      </a>
      <a
        href=""
        className="rounded-xl border border-gray-300 bg-gray-400 hover:border-gray-100/60"
      >
        <Image
          src={PDF}
          width={35}
          height={35}
          alt="curriculo de David Fontes Felix"
          className="pb-2 pl-2 pr-2 pt-2"
        />
      </a>
    </>
  )
}
