

export const Display = () => {
  return (
    <div
      className={`relative w-[434px] h-[173px] bg-[#2a6b36] rounded-xl overflow-hidden border border-solid border-black shadow-[5px_4px_4px_#000000]`}
    >
      <div className="relative w-[530px] h-[92px] top-[23px] left-2.5">
        <p className="absolute w-[227px] top-0 left-[15px] [-webkit-text-stroke:1px_#000000] [font-family:'Inter-Light',Helvetica] font-light text-white text-[18.8px] tracking-[0] leading-[normal]">
          watch an Ad to see/ comment
        </p>
        <p className="absolute top-[47px] left-0 [font-family:'Inter-Light',Helvetica] font-light text-white text-[18.8px] tracking-[0] leading-[normal]">
          {" "}
          picture’s width/height/(opacity involved) as the progress bar
        </p>
      </div>
    </div>
  );
};
