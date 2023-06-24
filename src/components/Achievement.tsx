import React from "react";

function Achivement() {
  return (
    <div className="grid grid-cols-3 gap-5 bg-light-blue lg:grid-cols-5 lg:px-36">
      {Array(5)
        .fill(0)
        .map((e, i) => (
          <div
            key={`achi-card-${i}`}
            className={` h-full justify-stretch gap-5 border-slate-400 px-4 py-10 ${`${
              i === 4 ? `` : `border-r-[1px]`
            }`} `}
          >
            <div className="text-center">
              <h3 className="truncate text-5xl font-bold xl:whitespace-normal">
                8888
              </h3>
              <h4 className="text-2xl font-bold text-[#8FC2FF]">
                Lorem, ipsum.
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Achivement;
