import diceRolling from "../dice.gif";

type Props = { dice: number };

export function ImageWrapper({ dice }: Props) {
  let source = "";
  switch (dice) {
    case 1:
      source =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/557px-Dice-1-b.svg.png";
      break;
    case 2:
      source =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/2048px-Dice-2-b.svg.png";
      break;
    case 3:
      source =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1024px-Dice-3-b.svg.png";
      break;
    case 4:
      source =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/1200px-Dice-4-b.svg.png";
      break;
    case 5:
      source =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/557px-Dice-5-b.svg.png";
      break;
    case 6:
      source =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/2048px-Dice-6-b.svg.png";
      break;
    case 7:
      source = "diceRolling";
  }
  return (
    <>
      {dice === 0 && (
        <img
          src="https://blog.colonist.io/content/images/2020/09/Rolling-Dice.jpg"
          alt="dice"
        />
      )}
      {dice === 7 && (
        <>
          <h2>Rolling dice...</h2>
          <img src={diceRolling} alt="dice face" />
        </>
      )}
      {dice !== 0 && dice !== 7 && (
        <>
          <h2>Congrats, you rolled a {dice}</h2>
          <img className="dice-face" src={source} alt="dice face" />
        </>
      )}
    </>
  );
}
