import Image from 'next/image';
import { EyeIcon,ForwardIcon } from "@heroicons/react/24/outline";
const EventCard = ({ name, description, startDate, endDate, open, imageSrc, joinEvent, location }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={name} 
          width={300}
          height={300}
          className='w-full h-full'
        />
        {/* {!open && <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>} */}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mb-2">{new Date(startDate).toDateString()}-{new Date(endDate).toDateString()}</p>
        <p className="text-sm text-gray-700 mb-2">{description.substring(0,45)}...</p>
        <p className="text-sm text-gray-700 mb-2"><span className='font-bold'>Organizer:</span> EcoSnap Team</p>
        <p className="text-sm text-gray-700 mb-4"><span className="font-bold">Location:</span> {location}</p>
        <div className="flex justify-between">
        <button
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 flex"
            onClick={joinEvent}
          >
            View Event
            <EyeIcon className='h-6 mx-1'></EyeIcon>

          </button>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 flex"
            onClick={joinEvent}
            disabled={!open}
          >
            {!open ? "Contribute" : "Closed"}
            <ForwardIcon className='h-6 mx-1'></ForwardIcon>

          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
