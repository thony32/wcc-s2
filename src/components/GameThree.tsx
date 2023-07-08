import { useEffect, useState } from "react";

function getQuestion() {
  const min = 2;
  const max = 10;
  const answer = Math.floor(Math.random() * (max - min + 1) + min);
  return { answer, choices: [1, 2, 3, 4] };
}

function GameThree() {
  const [question, setQuestion] = useState({ choices: [] }) as any;
  const { answer, choices } = question as any;
  const [selected, setSelected] = useState([]) as any;
  const [result, setResult] = useState(null) as any;

  useEffect(() => {
    if (!result) setQuestion(getQuestion());
  }, [result]);

  function select(number: never) {
    setSelected([...selected, number]);
  }

  function deselect(number: never) {
    const index = selected.indexOf(number);
    if (index === -1) return;
    const newSelected = [...selected];
    newSelected.splice(index, 1);
    setSelected(newSelected);
  }

  function done() {
    const selectedTotal = selected.reduce((a: any, b: any) => a + b, 0);
    selectedTotal === answer
      ? setResult("Marina!")
      : setResult("Diso!");
  }

  function reset() {
    setSelected([]);
    setResult();
  }
  return (
    <div className="px-[10%] space-y-5">
      <div>
        <h1 className="fortnite text-5xl text-center lg:text-7xl lg:text-left text-primary">Kajikajy</h1>
      </div>

      <div className="grid grid-cols-2 relative">
        <div>
          Ity kilalao ity dia manampy anao hahay ny fomba ampifanampiana isa roa.
        </div>
        <div className="">
          <div className="absolute bottom-0">
            {result && (
              <div className="space-y-2 text-center capitalize">
                <h1 className="text-3xl fortnite">{result}</h1>
                <button className="btn btn-success" onClick={reset}>
                  Mamerina
                </button>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <div className="w-1/2 space-y-5">
              <div className="">
                <div className="">
                  <label className="text-xl font-semibold">Tondroy ireo isa hampifanampiana hanome mba : {answer}</label>
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="w-1/2 flex gap-2 flex-wrap">
                  {choices.map((number: never) => (
                    <button
                      key={number}
                      className="btn btn-sm"
                      onClick={() => select(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>
                <div className="w-1/2 flex gap-2 flex-wrap">
                  {selected.map((number: never, index: any) => (
                    <button
                      key={index}
                      className="btn btn-sm btn-info"
                      onClick={() => deselect(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2">
                <button className="btn btn-success" onClick={done}>
                  Tsaraina
                </button>
                <button className="btn" onClick={reset}>
                  Mamerina
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameThree