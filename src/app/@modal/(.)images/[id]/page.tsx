import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!id) throw new Error("Missing id");

  if (isNaN(Number(id))) throw new Error("Invalid id");

  const image = await getImage(Number(id));

  return (
    <div>
      <img src={image.url} alt={image.name} className="w-96" />
    </div>
  );
}
