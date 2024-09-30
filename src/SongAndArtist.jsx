

export const SongAndArtist = ({ className }) => {
  return (
    <div
      className={`relative w-[316px] h-[77px] bg-[#2a6b36] rounded-[var(--shape-corner-extra-large)] overflow-hidden shadow-[2.94px_1.47px_8.82px_1.47px_#313436] ${className}`}
    >
      <div className="relative w-[202px] h-[68px] top-0.5 left-[51px]">
        <div className="absolute top-0 left-0 [font-family:'Instrument_Sans-Bold',Helvetica] font-bold text-white text-[37.5px] tracking-[0] leading-[normal]">
          Ayeyeyeee!
        </div>
        <div className="absolute top-[46px] left-[38px] [font-family:'Instrument_Sans-Regular',Helvetica] font-normal text-[#b8b8b8] text-[18.2px] tracking-[0] leading-[normal]">
          Lucky Nkolonzi
        </div>
      </div>
    </div>
  );
};
