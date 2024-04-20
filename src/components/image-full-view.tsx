import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";

import { getImage } from "~/server/queries";

export default async function ImageFullView({ id }: { id: number }) {
  const image = await getImage(id);
  const user = await clerkClient.users.getUser(image.userId);

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
      <div className="flex w-48 flex-col gap-2 border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{user.username}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Craeted On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
