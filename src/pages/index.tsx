import { Roboto } from 'next/font/google'
import Content from '@/components/Content'
import Aside from '@/components/Aside/Aside'
import { MyContextProvider2 } from '@/context/MyContextProvide2'
import { MyContextProviderSection } from '@/context/MyContextSection'
import { MyContextProviderButtonMenu } from '@/context/MyContextButtonMenu'

const roboto = Roboto({ subsets: ['latin'], weight: ['700', '400', '500'] })

export default function Home() {
  return (
    <main className={` ${roboto.className} flex`}>
      <MyContextProviderSection>
        <MyContextProvider2>
          <MyContextProviderButtonMenu>
            <Aside />
            <Content />
          </MyContextProviderButtonMenu>
        </MyContextProvider2>
      </MyContextProviderSection>
    </main>
  )
}
