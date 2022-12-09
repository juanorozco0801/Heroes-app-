import { HeroList } from "../components/HeroList"

export const DcPages = () => {
  return (
    <>
      <h1 className="mt-2">DC heroes</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </> 
  )
}
