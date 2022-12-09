import { HeroList } from "../components"

export const MarvelPages = () => {
  return (
    <>
      <h1 className="mt-2">Marvel heroes</h1>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </>
  )
}
