"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://us.i.posthog.com",
  });
}

const PostHogAuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const info = useUser();

  useEffect(() => {
    if (info.user) {
      posthog.identify(info.user.id, {
        email: info.user?.emailAddresses[0]?.emailAddress,
        name: info.user?.fullName,
      });
    } else if (!auth.isSignedIn) {
      posthog.reset();
    }
  }, [auth, info]);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export const CSPostHogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PostHogProvider>
  );
};
