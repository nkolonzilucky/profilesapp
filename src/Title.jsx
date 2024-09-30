

export const Title = ({ className }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 pr-[var(--size-space-300)] pl-[var(--size-space-300)] py-[17px] relative bg-[#2a6b36] rounded-[36.44px] overflow-hidden shadow-[5.21px_5.21px_5.21px_#00000040] ${className}`}
    >
      <p className="relative w-fit mt-[-0.94px] [font-family:'Inter-Bold',Helvetica] font-normal text-white text-[24.4px] tracking-[0] leading-[normal]">
        <span className="font-bold">pain</span>
        <span className="[font-family:'Inter-Regular',Helvetica]">tingpassionplaylist</span>
      </p>
    </div>
  );
};
