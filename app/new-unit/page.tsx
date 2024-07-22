import NewUnitForm from "@/components/pu/NewUnitForm";
import GoBack from "@/components/widgets/goBack";
import { fetchParties } from "@/data/party";
import { notFound } from "next/navigation";

export default async function NewPollingUnitPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const lga = searchParams.lga;
  const ward = searchParams.ward;

  if (!lga || !ward) return notFound();

  const data = await fetchParties();

  if (data.error || !data.data) return notFound();

  return (
    <div className="px-3">
      <header className="relative px-8 py-6 xs:px-2 xs:py-5 flex items-center gap-5">
        <GoBack />

        <h1 className="text-textcolor font-bold text-2xl xs:text-xl tracking-wider xs:tracking-wide capitalize">
          Upload Polling Unit Election Results
        </h1>
      </header>

      <hr className="w-[90%] mx-auto" />

      <main>
        <NewUnitForm
          parties={data.data.map((val) => val.partyname)}
          ward_id={parseInt(ward as string)}
          lga_id={parseInt(lga as string)}
        />
      </main>
    </div>
  );
}
