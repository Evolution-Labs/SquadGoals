import { useSelector } from "react-redux";



const Squad = () => {
  const squadInfo = useSelector((state) => state.squadReducer);

  return (
    <div className="border border-gray-200 shadow-md row-span-2 rounded-md bg-white h-full">
      <div className='flex justify-between p-2'>
        <div className="flex">
          <div className="text-3xl font-bold">{squadInfo.name}</div>
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="flex">
          {squadInfo.description}
        </div>
      </div>
    </div>
  );
};
export default Squad;