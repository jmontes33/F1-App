import React from "react";

function Ranking() {
  return (
    <div className="grid min-h-screen grid-col-3 justify-center bg-slate-100">
      <div className="group h-96 w-96 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transiti-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="flex absolute inset-0 gap-5">
            
            <img
              className="h-full w-full  object-cover shadow-xl shadow-black"
              src="src\assets\leclerc.jpg"
              alt=""
            />
            

          </div>
          <p>asdasd</p>
          <div className="absolute inset-0 h-full w-full rounded-xl px-12 text-center text-slate-200  [backface-visibility:hidden]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black"
                src="src\assets\max-b.png"
                alt=""
              />
              <p>asdasd</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // flex flex-col overflow-hidden rounded-lg shadow-lg relative h-full w-full transiti-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]
  );
}

export default Ranking;
