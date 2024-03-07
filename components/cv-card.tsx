import { getCVs } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";

const CVCard = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const cvs = await getCVs(query, currentPage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cvs.map((cv, index) => (
        <div
          key={cv.id}
          className="bg-white shadow-lg rounded-md p-6 flex flex-col justify-between"
        >
          <div>
            <p className="text-lg font-semibold">{cv.name}</p>
            <p className="text-gray-500 mb-2 mt-2">Phone: {cv.phone}</p>
            <p className="text-gray-500 mb-2">Gender: {cv.gender}</p>
            <p className="text-gray-500 mb-2">Tech Stack: {cv.techStack}</p>
            <p className="text-gray-500 mb-2">Created At: {formatDate(cv.createdAt.toString())}</p>
          </div>
          <div className="flex justify-end mt-4">
            <EditButton id={cv.id} />
            <DeleteButton id={cv.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CVCard;
