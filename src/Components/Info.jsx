const Info = () => {
  return (
    <div className="cursor-default sectdiv pb-4 relative bg-black w-full lg:h-[500px] mt-4 px-1 flex justify-center items-center box-border">
      <div className="w-full flex-col h-full lg:h-[500px] gap-7 text-wrap md:w-[90%] flex md:flex-row items-center justify-around ">
        <div className="gap-8 w-full px-4 py-2 flex md:gap-7 flex-col">
          <div className="webdiv  px-7 py-3 flex lg:flex-row md:gap-9 flex-col gap-4">
            <h1 className="md:text-4xl text-2xl text-nowrap text-slate-50 font-[400]">
              Web Developer
            </h1>
            <img src="https://porichiti.vercel.app/img/arrow-icon.png" alt="" />
          </div>
          <h1 className="infoname text-7xl md:text-[125px] text-slate-50 font-semibold">
            I'm Yuvraj Salte
          </h1>
        </div>
        <div className="imgdiv md:h-full relative inline-flex justify-center items-center before:content-[''] before:bg-red-600 before:rounded-sm before:h-7 before:w-7 before:absolute before:left-3 before:top-16 before:animate-spin-slow after:bg-slate-50 after:h-5 after:w-5 after:absolute after:rounded-sm after:left-7 after:top-28 after:animate-spin-slow">
          <img
            className=" rounded-xl px-2 py-2 border border-[#dadada]"
            // src="./public/YuviIMG-removebg-preview.png"   for localhost
            src="./YuviIMG-removebg-preview.png" // for server on netlify
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
