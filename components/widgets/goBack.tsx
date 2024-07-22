import Link from "next/link";
import { BackIcon } from "../svgs/svg";

function GoBack({ url }: { url?: string }) {
  return (
    <Link
      href={url ?? "/"}
      className="rounded-[50%] border border-textcolor p-3"
    >
      <BackIcon className="w-5 h-5 stroke-primary" />
    </Link>
  );
}

export default GoBack;
