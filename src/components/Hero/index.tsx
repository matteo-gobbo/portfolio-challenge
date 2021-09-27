import React from "react"
import { useGlobalContext } from "../../context/heroContext"

const Hero: React.FC = () => {

  const { heroContent } = useGlobalContext()

  return <section className="hero">
    <h3>{heroContent.subtitle}</h3>
    <h1>{heroContent.title}</h1>
  </section>
}

export default Hero