import Image from "next/image";

import { getImage } from "~/server/queries";

export default async function ImageFullView({ id }: { id: number }) {
  const image = await getImage(id);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="relative flex flex-1 items-center justify-center">
        <Image
          src={image.url}
          alt={image.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex w-48 flex-col">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
