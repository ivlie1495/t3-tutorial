"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

import { Button } from "~/components/ui/button";

const GlobalError = ({ error }: { error: Error & { digest?: string } }) => {
  const router = useRouter();

  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <h2 className="text-xl">{error?.message || "Something went wrong"}</h2>
        <p>Digest: {error?.digest}</p>
        <Button className="mt-4" onClick={() => router.back()}>
          Try again
        </Button>
      </body>
    </html>
  );
};

export default GlobalError;
