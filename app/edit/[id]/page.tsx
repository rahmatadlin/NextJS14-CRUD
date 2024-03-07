import UpdateForm from "@/components/edit-form";
import { getCVById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateCVPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const cv = await getCVById(id);

  if (!cv) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update CV</h1>
      <UpdateForm cv={cv} />
    </div>
  );
};

export default UpdateCVPage;