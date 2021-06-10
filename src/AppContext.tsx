import { createContext, useContext, useState } from 'react'

interface AppCtx {
  readonly searchKey: string
  setSearchKey: (searchKey: string) => void
  readonly category: string
  setCategory: (category: string) => void
}

const AppContext = createContext<AppCtx>(undefined)
const defaultCategory = 'Semua'

const Provider = ({ children }) => {
  const [category, setCategory] = useState(defaultCategory)
  const [searchKey, setSearchKey] = useState('')

  const _setSearchKey = (search: string) => {
    setSearchKey(search)
  }

  const _setCategory = (_category: string) => {
    setCategory(_category)
  }

  return (
    <AppContext.Provider value={{ searchKey, setSearchKey: _setSearchKey, category, setCategory: _setCategory }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): AppCtx => {
  return useContext(AppContext)
}

export default { Provider, Consumer: AppContext.Consumer }
