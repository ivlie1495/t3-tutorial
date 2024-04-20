import ImageFullView from "~/components/ImageFullView";

import { Modal } from "./modal";

export default async function ImageModal({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!id) throw new Error("Missing id");

  if (isNaN(Number(id))) throw new Error("Invalid id");

  return (
    <Modal>
      <ImageFullView id={Number(id)} />
    </Modal>
  );
}
