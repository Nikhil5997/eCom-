import React from "react";

function SpeedoMeter() {
  return (
    <div className="w-80 h-48  rounded-t-full overflow-hidden relative">
      <div className="absolute left-10 top-10 w-64 h-64 bg-white rounded-t-full z-40"></div>
      <div className="w-full h-full absolute">
        <div
          className="w-full h-full absolute transform origin-bottom-center z-20"
          style={{ transform: "rotate(-140deg)" }}
        >
          <div className="w-full h-full bg-green-500"></div>
        </div>
        <div
          className="w-full h-full absolute transform origin-bottom-center z-20"
          style={{ transform: "rotate(-90deg)" }}
        >
          <div className="w-full h-full bg-yellow-500"></div>
        </div>
        <div
          className="w-full h-full absolute transform origin-bottom-center z-15"
          style={{ transform: "rotate(-40deg)" }}
        >
          <div className="w-full h-full bg-purple-500"></div>
        </div>
        <div
          className="w-full h-full absolute transform origin-bottom-center z-10"
          style={{ transform: "rotate(30deg)" }}
        >
          <div className="w-full h-full bg-red-500"></div>
        </div>
      </div>
    </div>
  );
}



export default SpeedoMeter;
