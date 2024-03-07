export const TableSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-md p-6 flex flex-col justify-between animate-pulse"
        >
          <div>
            <div className="h-4 w-32 mb-2 rounded bg-gray-100"></div>
            <div className="h-4 w-20 mb-2 rounded bg-gray-100"></div>
            <div className="h-4 w-32 mb-2 rounded bg-gray-100"></div>
            <div className="h-4 w-32 mb-2 rounded bg-gray-100"></div>
            <div className="h-4 w-32 mb-2 rounded bg-gray-100"></div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="h-7 w-7 mr-2 rounded-sm bg-gray-100"></div>
            <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
