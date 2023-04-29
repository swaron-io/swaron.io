import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 h-32 w-screen px-72 text-gray">
      <div className="flex w-full justify-center border-t border-gray_low">
        <div className="flex gap-4 px-6 py-10">
          <Link href="https://twitter.com/swaron_io">
            <TwitterIcon />
          </Link>
          <Link href="https://linkedin.com">
            <LinkedinIcon />
          </Link>
          <Link href="https://instagram.com">
            <InstagramIcon />
          </Link>
          <Link href="https://twitch.tv">
            <TwitchIcon />
          </Link>
          <Link href="https://github.com/swaron-io">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
