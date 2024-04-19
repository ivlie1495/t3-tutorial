import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import { getMyImages } from "~/server/queries";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="h-48 w-48">
          <Image src={image.url} alt={image.name} width={480} height={480} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full p-4 text-2xl">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

export const dynamic = "force-dynamic";
