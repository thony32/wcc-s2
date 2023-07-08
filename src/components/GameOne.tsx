import MemoryGame from "./MemoryGame"

function GameOne() {
  return (
    <div className="px-[10%] space-y-5">
      <h1 className="fortnite text-5xl text-center lg:text-7xl lg:text-left text-primary">Kilalao mampiasa saina</h1>
      <div className="lg:grid lg:grid-cols-3 space-y-5 lg:space-y-0">
        <div className="flex items-center">
          <p className="first-letter:text-2xl text-center text-xl lg:text-left lg:first-letter:text-4xl lg:text-2xl">Tiana havoaka daholo ireo sary ambadiky ny efajoro. Tadiavina tsiroaroa izy ireo, izany hoe mila miasa ny saina sy ny fitadidiana ireo toerana misy ireo sary tsirairay</p>
        </div>
        <div className="col-span-2">
          <MemoryGame />
        </div>
      </div>
    </div>
  )
}

export default GameOne