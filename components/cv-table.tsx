import { getCVs } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";

const CVTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const cvs = await getCVs(query, currentPage);

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Gender</th>
          <th className="py-3 px-6">Tech Stack</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {cvs.map((cv, index) => (
          <tr key={cv.id} className="bg-white border-b">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{cv.name}</td>
            <td className="py-3 px-6">{cv.phone}</td>
            <td className="py-3 px-6">{cv.gender}</td>
            <td className="py-3 px-6">{cv.techStack}</td>
            <td className="py-3 px-6">
              {formatDate(cv.createdAt.toString())}
            </td>
            <td className="flex justify-center gap-1 py-3">
              <EditButton id={cv.id} />
              <DeleteButton id={cv.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CVTable;