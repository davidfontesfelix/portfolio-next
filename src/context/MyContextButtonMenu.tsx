import React, { createContext, useState } from 'react'

interface MyContextProps {
  viewAside: string
  setViewAside: React.Dispatch<React.SetStateAction<string>>
}

const MyContextButtonMenu = createContext<MyContextProps>({
  viewAside: '',
  // eslint-disable-next-line prettier/prettier
  setViewAside: () => { },
})

const MyContextProviderButtonMenu: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [viewAside, setViewAside] = useState('false')

  return (
    <MyContextButtonMenu.Provider value={{ viewAside, setViewAside }}>
      {children}
    </MyContextButtonMenu.Provider>
  )
}

export { MyContextButtonMenu, MyContextProviderButtonMenu }
