import Link from "next/link";
import { BackIcon } from "../svgs/svg";

function GoBack({ url }: { url?: string }) {
  return (
    <Link
      href={url ?? "/"}
      className="rounded-[50%] border border-textcolor/50 p-1"
    >
      <BackIcon className="w-6 h-6 stroke-primary" />
    </Link>
  );
}

export default GoBack;
