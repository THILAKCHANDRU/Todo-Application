export default function DropDown({handlesort}) {
  return (
    <div
      className={`absolute flex flex-col h-auto w-[120px] rounded-[7px] overflow-hidden font-sans text-[13px] "}`}
    >
      <button
        className="flex justify-center items-center bg-white"
        onClick={() => handlesort("importance")}
      >
        IMPORTANCE
      </button>
      <hr className="border-t-0.5 border-blue-500"></hr>
      <button
        className="flex justify-center items-center bg-white"
        onClick={() => handlesort("DATE")}
      >
        DATE
      </button>
      <hr></hr>
      <button
        className="flex justify-center items-center bg-white"
        onClick={() => handlesort("TIME")}
      >
        TIME
      </button>
    </div>
  );
}
