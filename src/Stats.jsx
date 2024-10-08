import iconHeart from "./assets/heart.png";
import iconPlayCircle from "./assets/plays.png";

export const Stats = () => {
  return (
    <div className="relative w-[377px] h-[72px]">
      <div className="absolute w-[117px] h-[42px] top-[30px] left-0 bg-[#2a6b36] rounded-[19.23px] overflow-hidden shadow-[22.08px_22.08px_17.66px_#8d242440]">
        <img className="absolute w-[37px] h-[38px] top-[3px] left-[7px]" alt="Icon heart" src={iconHeart} />
        <div className="absolute top-[9px] left-[70px] [font-family:'Inter-Light',Helvetica] font-light text-[#bbbbbb] text-[15.8px] tracking-[0] leading-[normal] whitespace-nowrap">
          2M
        </div>
      </div>
      <div className="absolute w-[135px] h-10 top-8 left-[242px] bg-[#2a6b36] rounded-[22.5px] overflow-hidden shadow-[20.66px_10.33px_20.66px_-2.58px_#b5313140]">
        <div className="absolute w-[45px] top-3 left-[75px] [font-family:'Inter-Light',Helvetica] font-light text-[#bbbbbb] text-[14.3px] tracking-[0] leading-[normal] whitespace-nowrap">
          400M
        </div>
        <img className="absolute w-[47px] h-[38px] top-0.5 left-1.5" alt="Icon play circle" src={iconPlayCircle} />
      </div>
    </div>
  );
};
