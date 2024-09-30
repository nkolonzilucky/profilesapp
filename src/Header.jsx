import { Title } from "./Title";
import frame from "./frame.svg";
import vector from "./vector.svg";

export const Header = ({ className }) => {
  return (
    <div
      className={`relative w-[432px] h-[101px] bg-[#2a6b36] rounded overflow-hidden shadow-[3px_1px_7px_4px_#9cb8a1] ${className}`}
    >
      <Title className="!absolute !left-[71px] !top-[19px]" />
      <img className="absolute w-9 h-9 top-8 left-[381px]" alt="Vector" src={vector} />
      <img className="absolute w-9 h-9 top-9 left-2.5" alt="Frame" src={frame} />
    </div>
  );
};
