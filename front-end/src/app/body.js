"use client";
import { CiCircleCheck } from "react-icons/ci";
import { useEffect, useState, useRef } from "react";
import { GoTrash } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { MdOutlineAddCircle } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import axios from "axios";
import DropDown from "./drop_down_sorting";
import { IoIosArrowDropup } from "react-icons/io";
import { BsBookmarkStar } from "react-icons/bs";

export default function Body({ content, setContent, task, setTask }) {
  const [clickdelete, setClickDelete] = useState(false);
  const [isStrick, setStrick] = useState({});
  const [isSort, setSort] = useState(false);
  const [isDrop, setDrop] = useState(false);

  const searchInputRef = useRef(null);

  const handleFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleDropDown = () => {
    setDrop(!isDrop);
    console.log(isDrop);
  };

  const handleStrick = (id) => {
    setStrick((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSort = (type) => {
    setSort(!isSort);
    setDrop(!isDrop);
    sort(type);
  };

  const addTask = () => {
    setContent(false);
  };

  const fetch = async () => {
    try {
      const response = await axios.get("http://localhost:3001/fetch");
      setTask(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const sort = async (type) => {
    try {
      const response = await axios.get(`http://localhost:3001/sort/${type}`);
      setTask(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id) => {
    console.log(id);
    setClickDelete(false);
    try {
      const response = await axios.delete(`http://localhost:3001/delete/${id}`);
    } catch (err) {
      console.log(err);
    }
    setClickDelete(!clickdelete);
  };

  useEffect(() => {
    {
      isSort ? sort() : fetch();
    }
  }, [content, clickdelete, isSort]);

  return (
    <>
      <div className="flex flex-row h-full w-full justify-center items-center">
        <div className=" flex flex-col h-[420px] w-[800px] ml-[120px] my-[20px] px-[40px] py-[40px] bg-blue rounded-[20px]">
          <div className="flex flex-row gap-[30px] justify-center items-center">
            <div className="relative z-10">
              <button
                className="bg-yello rounded-[5px] px-[15px] py-[5px] h-[40px] font-sans flex flex-row justify-center items-center gap-[5px] mb-[5px] hover: cursor-pointer "
                onClick={handleDropDown}
              >
                SORT BY {isDrop ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
              </button>
              {isDrop ? <DropDown handlesort={handleSort} /> : ""}
            </div>
            <input
              type="input"
              ref={searchInputRef}
              className="text-white font-sans outline-none bg-gr bg-opacity-20 px-[10px] py-[5px] h-[40px] w-[400px] rounded-[5px] items-center justify-center"
            />
            <GoSearch
              className="text-[25px] text-white hover: cursor-pointer"
              onClick={handleFocus}
            />
          </div>
          <div className="flex flex-1 flex-col gap-[20px] items-center my-[30px]  overflow-y-auto no-scrollbar">
            {task.map((t) => (
              <div
                key={t.ID}
                className="w-[600px] h-[40px] bg-gr bg-opacity-20 font-sans text-white text-[15px] rounded-[20px] flex flex-row items-center justify-between p-[20px]"
              >
                <CiCircleCheck
                  className={`text-[27px] ${
                    isStrick[t.ID] ? "text-yello" : "white"
                  } hover: cursor-pointer`}
                  onClick={() => handleStrick(t.ID)}
                />
                <p className={`${isStrick[t.ID] ? "line-through" : ""}`}>
                  {t.TASK}
                </p>
                <p>{t.DUE_DATE}</p>
                <div className="flex flex-row justify-center items-center gap-[2px] w-[60px]">
                  <div className="w-[25px]">
                    {t.IMPORTANCE ? <BsBookmarkStar /> : ""}
                  </div>
                  <GoTrash
                    className="text-[24px] hover: cursor-pointer"
                    onClick={() => deleteTask(t.ID)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row  mt-[auto] mb-[40px] ml-[30px]">
          <MdOutlineAddCircle
            className="text-[60px] text-white hover:text-yello"
            onClick={addTask}
          />
        </div>
      </div>
    </>
  );
}
