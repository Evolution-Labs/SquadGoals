import { useSelector } from "react-redux";



const Squad = () => {
  const squadInfo = useSelector((state) => state.squadReducer);

  return (
    <div className="border border-gray-200 shadow-md row-span-2 rounded-md bg-white mb-4 p-4 min-h-[200px]">
      <div className='flex justify-between'>
        <div className="flex">
          <div className="text-3xl font-bold mb-4">{squadInfo.name}</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          {squadInfo.description}
        </div>
      </div>
    </div>
  );
};
export default Squad;