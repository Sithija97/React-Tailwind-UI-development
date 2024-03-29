import heroImg from "../assets/hero.svg";

export const Hero = () => {
  return (
    <div className="h-full pt-[84px] pb-[122px] pl-[121px] pr-[120.89px]">
      <div className="grid  xl:grid-cols-2">
        <div className="xl:order-first flex items-center justify-start">
          <div className="h-[464px] xl:w-[518.11px] flex flex-col justify-between">
            <div className="h-[356px] flex flex-col justify-between">
              <p className="font-bold text-[96px] leading-[98.5px]">
                We Take Care Of Your Brand
              </p>
              <p className="text-[20px]">
                We care about our work and we care about our clients.
              </p>
            </div>
            <div className="h-[64px] flex gap-2">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-slate-50 border border-slate-200 rounded-full py-4 pl-[18px] w-full xl:w-[497px] h-[64px]"
              />
              <button className="flex justify-center items-center bg-blue-700 py-[22px] px-[36px] rounded-full text-[18px] text-center text-slate-100 w-[200px] xl:w-[166px] h-[64px]">
                Lets Talk
              </button>
            </div>
          </div>
        </div>

        <div className="order-first ">
          <img src={heroImg} alt="heroImg" className="m-auto " />
        </div>
      </div>
    </div>
  );
};
