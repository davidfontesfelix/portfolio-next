import React, { createContext, useState } from 'react'

interface MyContextProps {
  viewSection: string
  setViewSection: React.Dispatch<React.SetStateAction<string>>
}

const MyContext2 = createContext<MyContextProps>({
  viewSection: '',
  // eslint-disable-next-line prettier/prettier
  setViewSection: () => { },
})

const MyContextProvider2: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [viewSection, setViewSection] = useState('false')

  return (
    <MyContext2.Provider value={{ viewSection, setViewSection }}>
      {children}
    </MyContext2.Provider>
  )
}

export { MyContext2, MyContextProvider2 }
