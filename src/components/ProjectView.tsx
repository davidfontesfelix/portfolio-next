import Image from 'next/image'
import BoxArrowUpRight from '../assets/icons/box-arrow-up-right.svg'

interface ProjectsViewProps {
  titulo: string
  descrição1: string
  descrição2: string
  linkSite: string
  Github: string
}

export default function ProjectView(props: ProjectsViewProps) {
  return (
    <>
      <div className="max-sm:h-[20vh] h-[30vh] w-[70vw] rounded-2xl bg-stone-400 md:h-[47vh] xl:w-[50vw] smartphones:h-[17vh]"></div>
      <div className="max-md:flex max-sm:mb-20 max-sm:block mb-32 w-[70vw] lg:flex xl:w-[50vw]">
        <div>
          <h3 className="mb-2 mt-5 text-3xl font-medium text-white">
            {props.titulo}
          </h3>
          <p className="mb-4 w-[350px] text-lg text-white md:w-[500px]">
            {props.descrição1}
          </p>
          <p className="w-[350px] text-lg text-white/70 md:w-[500px]">
            {props.descrição2}
          </p>
        </div>
        <div className="max-md:justify-end max-sm:justify-start flex w-full lg:justify-end">
          <div className="mt-6 flex flex-col">
            <a
              href={props.linkSite}
              className="flex items-center gap-2 text-xl text-blue-300"
              target="_blank"
              rel="noreferrer"
            >
              <Image width={22} src={BoxArrowUpRight} alt="" />
              Link do site
            </a>
            <a
              href={props.Github}
              className="flex items-center gap-2 text-xl text-blue-300/30"
              target="_blank"
              rel="noreferrer"
            >
              <Image width={22} src={BoxArrowUpRight} alt="" />
              Link no Github
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
