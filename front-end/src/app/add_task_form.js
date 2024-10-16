import axios from "axios";
import { useState } from "react";

export default function Form({ content, setContent, task, setTask }) {
  const [taskname,setTaskname]=useState()
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [importance, setImportance] = useState();

  const handleTask = (e) => {
    setTaskname(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleImportance = (e) => {
    setImportance(e.target.value);
  };

  const confirm = async () => {
    const key = Object.keys(task)
    const len = key.length
    const newId = task[len-1].ID + 1
    const body = {
      "ID": newId,
      "TASK": taskname,
      "DESCRIPTION": description,
      "DUE_DATE": `${date} ${time}`,
      "IMPORTANCE": importance ? 1 : 0,
    };
    try {
      const res = await axios.post("http://localhost:3001/update", body);
      console.log(res);
      setContent(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-1 w-full bg-white  justify-center items-center">
        <div className="flex flex-col h-[500px] w-[650px] bg-blue my-[10px] rounded-[20px] gap-[20px]">
          <div>
            <h1 className="text-center text-4xl pt-5 font-sans font-bold text-white">
              NEW
            </h1>
            <h1 className="text-center text-4xl text-yello relative	bottom-4">
              TASK
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-center items-center my-[10px] ml-[60px]">
              <p className="text-white font-sans mr-[10px]">TASK :</p>
              <input
                type="input"
                onChange={handleTask}
                value={taskname}
                className="outline-none h-[30px] w-[400px] px-[10px] py-[5px] bg-gr bg-opacity-20 text-[15px] font-sans text-white rounded-[15px]"
              />
            </div>

            <div className="flex flex-row justify-center items-center my-[10px]">
              <p className="text-white font-sans mr-[10px]">DESCRIPTION :</p>
              <textarea
                class="w-[400px] h-[100px] px-[10px] py-[10px] rounded-[10px] outline-none font-sans bg-gr bg-opacity-20 text-white resize-none"
                rows="5"
                onChange={handleDescription}
                value={description}
              ></textarea>
            </div>

            <div className="flex flex-row gap-[5px] justify-center items-center ml-[70px]">
              <div className="flex flex-row justify-center items-center my-[10px] gap-[5px]">
                <p className="text-white font-sans mr-[10px]">DUE :</p>
                <input
                  type="date"
                  onChange={handleDate}
                  value={date}
                  className="bg-gr bg-opacity-20 font-sans text-white px-[10px] rounded-[10px] outline-none"
                />
                <input
                  type="time"
                  onChange={handleTime}
                  value={time}
                  className="bg-gr bg-opacity-20 font-sans text-white px-[10px] rounded-[10px] outline-none"
                />
              </div>
              <div className="flex flex-row gap-[5px] ml-[10px]">
                <input
                  type="radio"
                  className="text-white focus:outline-none"
                  onChange={handleImportance}
                  value={importance}
                />
                <p className="text-white font-sans mr-[10px]">IMPORTANT</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-[30px]">
              <button
                className="font-sans px-[10px] py-[5px] bg-yello text-black rounded-[10px] w-[80px]"
                onClick={confirm}
              >
                DONE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
