import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import { getMyImages } from "~/server/queries";
import Link from "next/link";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="h-48 w-48">
          <Link href={`/images/${image.id}`}>
            <Image src={image.url} alt={image.name} width={480} height={480} />
          </Link>
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
