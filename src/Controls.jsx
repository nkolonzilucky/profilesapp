import iconArrowIosBack from "./assets/previous-icon.png";
import iconArrowIosForward from "./assets/next-icon.png";
import iconPauseCircleOutline from "./assets/pause-icon.png";
import iconRepeat from "./assets/repeat-icon.png";
import iconShuffle2Outline from "./assets/shuffle-icon.png";

export const Controls = () => {
  return (
    <div className="relative w-[434px] h-[100px] bg-[#2a6b36] rounded-[8.42px] overflow-hidden">
      <img className="absolute w-12 h-[46px] top-7 left-5" alt="Icon repeat" src={iconRepeat} />
      <img
        className="absolute w-[97px] h-[93px] top-1 left-[162px]"
        alt="Icon pause circle"
        src={iconPauseCircleOutline}
      />
      <img
        className="left-[259px] absolute w-[51px] h-[49px] top-[22px]"
        alt="Icon arrow ios"
        src={iconArrowIosForward}
      />
      <img
        className="absolute w-[49px] h-[47px] top-[29px] left-[359px]"
        alt="Icon shuffle"
        src={iconShuffle2Outline}
      />
      <img
        className="left-[101px] absolute w-[51px] h-[49px] top-[22px]"
        alt="Icon arrow ios back"
        src={iconArrowIosBack}
      />
    </div>
  );
};
