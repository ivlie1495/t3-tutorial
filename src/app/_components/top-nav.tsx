import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import SimpleUploadButton from "./upload-button";

const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
