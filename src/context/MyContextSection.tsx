import React, { createContext, useState } from 'react'

interface MyContextProps {
  viewSection: string
  setViewSection: React.Dispatch<React.SetStateAction<string>>
}

const MyContextSection = createContext<MyContextProps>({
  viewSection: '',
  // eslint-disable-next-line prettier/prettier
  setViewSection: () => { },
})

const MyContextProviderSection: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [viewSection, setViewSection] = useState('false')

  return (
    <MyContextSection.Provider value={{ viewSection, setViewSection }}>
      {children}
    </MyContextSection.Provider>
  )
}

export { MyContextSection, MyContextProviderSection }
