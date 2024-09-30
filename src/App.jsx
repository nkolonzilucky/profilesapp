import { Controls } from "./Controls";
import { Display } from "./Display";
import { Header } from "./Header";
import { SongAndArtist } from "./SongAndArtist";
import { Stats } from "./Stats";
import backgroundPic from "./assets/background-pic.png";

export const App = () => {
  return (
    <div className="flex h-[932px] items-center gap-2.5 relative bg-white overflow-hidden [background:linear-gradient(180deg,rgba(91.08,67.12,59.13,0.59)_0%,rgb(42,108,54)_50.5%,rgba(81.89,0,0,0.16)_100%)] w-full min-w-[430px]">
      <div className="flex flex-col w-[434.21px] items-center gap-1.5 relative">
        <img className="relative self-stretch w-full h-[678px] object-cover" alt="Background pic" src={backgroundPic} />
        <Display className="!self-stretch !w-full" />
        <Controls className="!self-stretch !relative !left-[unset] !w-full !top-[unset]" />
        <Header className="!absolute !left-0 !top-0" />
        <Stats className="!absolute !left-7 !top-[466px]" />
        <SongAndArtist className="!absolute !left-[59px] !top-[555px]" />
      </div>
    </div>
  );
};
