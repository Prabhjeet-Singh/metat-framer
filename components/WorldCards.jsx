"use client";

export const WorldCards = ({img,worldName}) => {
  return (
    <div className="w-[196px] h-[150px] text-white rounded-[24px]">
        <img src={img} alt="planet" className="w-full h-full bg-cover rounded-[24px]" />
      <div className="absolute bottom-0 w-full">
        <div>
        <div className="rounded-full flex absolute  bottom-10 left-2 w-[24px] h-[24px] p-[6px] ">
          <img src="people-01.png" alt="people" className="w-full h-full absolute left-[20px] bottom-0" />
          <img src="people-02.png" alt="people" className="w-full h-full absolute left-[10px] bottom-0" />
          <img src="people-03.png" alt="people" className="w-full h-full absolute left-[0px] bottom-0" />
        </div>
          <p className="absolute bottom-10 left-16">+264 has joined</p>
        </div>
        <h3 className="p-2 pb-3 leading-[22.68px] font-[700] text-[18px]">{worldName}</h3>
      </div>
    </div>
  );
};
