import ImageFullView from "~/components/image-full-view";

export default async function ImagePage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!id) throw new Error("Missing id");

  if (isNaN(Number(id))) throw new Error("Invalid id");

  return (
    <div className="h-screen p-4">
      <ImageFullView id={Number(id)} />
    </div>
  );
}
