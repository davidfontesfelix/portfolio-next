import Image from 'next/image'
import Person from '../assets/icons/person.svg'
import EuSobreMim from '../assets/eu-sobremim.png'

import HTML from '../assets/techs/html.png'
import CSS from '../assets/techs/css.png'
import JavaScript from '../assets/techs/javascript.png'
import TypeScript from '../assets/techs/typescript.png'
import TailWindCSS from '../assets/techs/tailwindcss.png'
import React from '../assets/techs/react.png'
import Next from '../assets/techs/next.png'
import Git from '../assets/techs/git.png'

export default function AboutMe() {
  function CreateList(destaque: string, info: string) {
    return (
      <ul>
        <li className="mb-2 flex flex-col gap-[2px]">
          <h3 className="w-80 border-b-[1px] text-lg font-normal">
            <span className="font-medium">{destaque}</span>
            {info}
          </h3>
        </li>
      </ul>
    )
  }
  return (
    <section
      id="SobreMim"
      className="relative flex h-full flex-col bg-gray-500 text-white"
    >
      <div className="mb-16 mt-16 flex items-center justify-center gap-2">
        <Image width={60} src={Person} alt="" />
        <h2 className="text-5xl font-bold" style={{ letterSpacing: '4px' }}>
          Sobre
        </h2>
      </div>
      <div>
        <p className="mx-48 text-lg leading-relaxed 3xl:mx-36 1.5xl:mx-28 tablet:mx-16">
          Desde que me lembro, sempre estive fascinado pelo mundo digital e pela
          possibilidade de criar coisas incríveis através da programação. A
          minha jornada no mundo da tecnologia começou quando eu era apenas uma
          criança curiosa, desmontando dispositivos eletrônicos só para
          descobrir como funcionavam. Essa curiosidade me impulsionou a explorar
          diferentes linguagens de programação e a mergulhar de cabeça em
          projetos desafiadores.
          <br />
          Com uma mente ágil e criativa, estou constantemente em busca de novos
          desafios que me permitam expandir minhas habilidades e conhecimentos.
          A resolução de problemas complexos é o que me motiva, e a programação
          me oferece um campo vasto de possibilidades para explorar e encontrar
          soluções inovadoras.
        </p>
      </div>
      <div className="mx-48 mb-16 mt-16 flex gap-16 3xl:mx-36 3xl:gap-3 1.5xl:mx-28 1.5xl:flex-wrap tablet:mx-16">
        <div>
          <Image
            className="w-[300px] rounded-2xl border-4 border-blue-700"
            width={300}
            alt=""
            src={EuSobreMim}
          />
        </div>
        <div className="flex flex-col justify-between 3xl:flex-row 1.5xl:mt-4  smartphones:flex-col">
          <div className="flex gap-16 3xl:block ">
            <div>
              {CreateList('Nome:', ' David Fontes Felix')}
              {CreateList('Idade:', ' 17 Anos')}
              {CreateList('Cidade:', ' Cristinápolis')}
              {CreateList('Estado:', ' Sergipe')}
              {CreateList('Inglês:', ' Intermediário')}
            </div>
            <div>
              {CreateList('Hobby:', ' Programar, Games, Musica...')}
              {CreateList('Formação Acadêmica:', ' Cursando medio')}
              {CreateList('Cargo atual:', ' Estudante')}
              {CreateList('Experência:', ' 1 Ano')}
            </div>
          </div>
          <div className="mt-6 3xl:ml-6 3xl:mt-0 tablet:-mt-[485px] smartphones:ml-0 smartphones:mt-4">
            <h3 className="mb-2 text-2xl font-medium">Tecnologias</h3>
            <p className="mb-2 text-lg">
              Confira abaixo minhas habilidades em programação (Hard Skills):
            </p>
            <div className="flex items-center gap-4 3xl:flex-wrap">
              <Image width={50} src={HTML} alt="" />
              <Image className="-ml-1" width={65} src={CSS} alt="" />
              <Image className="-ml-2" width={65} src={JavaScript} alt="" />
              <Image className="-ml-4" width={88} src={TypeScript} alt="" />
              <Image className="-ml-3" width={80} src={TailWindCSS} alt="" />
              <Image className="-ml-3" width={70} src={React} alt="" />
              <Image className="-ml-2" width={60} src={Next} alt="" />
              <Image className="-ml-1" width={55} src={Git} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
