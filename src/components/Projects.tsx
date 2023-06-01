import Image from 'next/image'
import ArrowDown from '../assets/icons/arrow-down-short.svg'
import ProjectView from './ProjectView'

export default function Projects() {
  return (
    <section id="projects" className="relative flex h-full bg-gray-600">
      <div className="mb-16 mt-16 flex w-full flex-col items-center">
        <div className="mb-8 flex ">
          <Image width={70} src={ArrowDown} alt="icone portfolio" />
          <h2
            className="text-5xl font-bold text-white"
            style={{ letterSpacing: '4px' }}
          >
            Projetos
          </h2>
        </div>
        <ProjectView
          titulo="Twitter-UI"
          descrição1="Para mim esse é o mais especial, mostra um pouco de como vejo o front-end."
          descrição2="Após a concepção do protótipo, o criei em menos de 1 mês, foi muito divertido, utilizei ReactJs, o TailwindCSS e outras libs para desenvolve-lo."
          linkSite="https://www.google.com"
          Github="https://www.youtube.com"
        />
      </div>
    </section>
  )
}
