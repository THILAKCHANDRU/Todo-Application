"use client";
import { CiCircleCheck } from "react-icons/ci";
import { useState } from "react";
import { GoTrash } from "react-icons/go";
import { GoSearch } from "react-icons/go";

export default function Body() {
  const [task, setTask] = useState([
    {
      id: "1",
      task: "READING",
      due: "12-10-2024",
      important: "1",
    },
    { id: "2", task: "PLAYING", due: "20-11-2024", important: "0" },
    {
      id: "1",
      task: "READING",
      due: "12-10-2024",
      important: "1",
    },
    { id: "2", task: "PLAYING", due: "20-11-2024", important: "0" },
    {
      id: "1",
      task: "READING",
      due: "12-10-2024",
      important: "1",
    },
    { id: "2", task: "PLAYING", due: "20-11-2024", important: "0" },
  ]);

  return (
    <>
      <div className="flex flex-col h-full w-full justify-center items-center">
        <div className=" flex flex-col h-[420px] w-[800px] mx-[180px] my-[20px] px-[40px] py-[40px] bg-blue rounded-[20px]">
          <div className="flex flex-row gap-[30px] justify-center items-center">
            <button className="bg-yello rounded-[5px] px-[15px] py-[5px] h-[40px] font-sans">
              SORT
            </button>
            <input
              type="input"
              className="outline-none bg-gr opacity-20 px-[10px] py-[5px] h-[40px] w-[400px] rounded-[5px] items-center justify-center"
            />
            <GoSearch className="text-[25px] text-white"/>
          </div>
          <div className="flex flex-1 flex-col gap-[20px] items-center my-[30px]  overflow-y-auto no-scrollbar">
            
              {task.map((t) => (
                <div key={t.id} className="w-[600px] h-[40px] bg-gr bg-opacity-20 font-sans text-white text-[15px] rounded-[20px] flex flex-row items-center justify-between p-[20px]">
                  <CiCircleCheck className="text-[27px] hover:text-yello "/>
                  <p>{t.task}</p>
                  <GoTrash className="text-[24px]"/>
                </div>
              ))}
            
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
