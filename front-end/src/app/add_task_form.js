export default function Form({ content, setContent }) {
  const confirm = () => {
    setContent(true);
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
                className="outline-none h-[30px] w-[400px] px-[10px] py-[5px] bg-gr bg-opacity-20 text-[15px] font-sans text-white rounded-[15px]"
              />
            </div>

            <div className="flex flex-row justify-center items-center my-[10px]">
              <p className="text-white font-sans mr-[10px]">DESCRIPTION :</p>
              <textarea
                class="w-[400px] h-[100px] px-[10px] py-[10px] rounded-[10px] outline-none font-sans bg-gr bg-opacity-20 text-white resize-none"
                rows="5"
              ></textarea>
            </div>

            <div className="flex flex-row gap-[5px] justify-center items-center ml-[70px]">
              <div className="flex flex-row justify-center items-center my-[10px] gap-[5px]">
                <p className="text-white font-sans mr-[10px]">DUE :</p>
                <input
                  type="date"
                  className="bg-gr bg-opacity-20 font-sans text-white px-[10px] rounded-[10px]"
                />
                <input
                  type="time"
                  className="bg-gr bg-opacity-20 font-sans text-white px-[10px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-row gap-[5px] ml-[10px]">
                <input type="radio" className="text-white focus:outline-none" />
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
