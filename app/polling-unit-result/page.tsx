import BasicInfo from "@/components/pu/BasicInfo";
import PUResult from "@/components/pu/PUResult";
import { fetchPUById } from "@/data/polling_unit";
import { notFound } from "next/navigation";

export default async function PollingUnitResultPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const name = searchParams.name;
  const id = searchParams.id;

  if (!name || !id) return notFound();

  const unit = await fetchPUById(parseInt(id as string));

  if (unit.error || !unit.data) return notFound();

  return (
    <div className="px-3">
      <header className="relative px-8 py-6 xs:px-2 xs:py-5">
        <h1 className="text-textcolor font-bold text-2xl xs:text-xl tracking-wider xs:tracking-wide">
          {name}: Polling Unit Election Results
        </h1>
      </header>

      <hr className="w-[90%] mx-auto" />

      <main className="p-5 xs:px-0 space-y-5 sm:space-y-6">
        <section>
          <h2 className="text-textcolor text-xl xs:text-lg font-medium">
            Polling Unit Info
          </h2>

          <BasicInfo unit={unit.data} />
        </section>

        <hr className="w-[90%] mx-auto" />

        <section>
          <h2 className="text-textcolor text-xl xs:text-lg font-medium">
            Election Results
          </h2>

          <PUResult id={unit.data.uniqueid} />
        </section>
      </main>
    </div>
  );
}
