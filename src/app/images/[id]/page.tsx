import ImageFullView from "~/components/ImageFullView";

export default async function ImagePage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!id) throw new Error("Missing id");

  if (isNaN(Number(id))) throw new Error("Invalid id");

  return <ImageFullView id={Number(id)} />;
}
