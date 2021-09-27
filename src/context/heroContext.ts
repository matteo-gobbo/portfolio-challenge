import { createContext, useContext } from "react"
import { IHeroContent } from "../@types"

export type GlobalContent = {
  heroContent: IHeroContent
  setHeroContent:(content: IHeroContent) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
  heroContent: {
    title: '',
    subtitle: '',
    type: undefined
  }, 
  setHeroContent: () => {},
})

export const useGlobalContext = () => useContext(MyGlobalContext)