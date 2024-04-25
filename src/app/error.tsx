"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

import { Button } from "~/components/ui/button";

type ErrorProps = Error & { digest?: string };

export default function Error({ error }: { error: ErrorProps }) {
  const router = useRouter();

  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2 className="text-xl">{error.message || "Something went wrong"}</h2>
      <p>Digest: {error.digest}</p>
      <Button className="mt-4" onClick={router.back}>
        Back
      </Button>
    </div>
  );
}
