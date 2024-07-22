import ResultOverview from "@/components/compare/ResultOverview";
import PollingUnitsTable from "@/components/PollingUnitsTable";
import GoBack from "@/components/widgets/goBack";
import { fetchLGAPUs } from "@/data/polling_unit";
import { fetchLGAPUResults, fetchLGAResult } from "@/data/result";
import { notFound } from "next/navigation";

export default async function ComparePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const lga = searchParams.lga;
  const name = searchParams.name;

  if (!lga || !name) return notFound();

  const data1 = await fetchLGAPUs(parseInt(lga as string));

  if (data1.error || !data1.data) return notFound();

  const data2 = await fetchLGAResult(parseInt(lga as string));

  if (data2.error || !data2.data) return notFound();

  const data3 = await fetchLGAPUResults(parseInt(lga as string));

  if (data3.error || !data3.data) return notFound();
console.log(data3)
  return (
    <div className="px-3">
      <header className="relative px-8 py-6 xs:px-2 xs:py-5 flex items-center gap-5">
        <GoBack />

        <h1 className="text-textcolor font-bold text-2xl xs:text-xl tracking-wider xs:tracking-wide capitalize">
          Compare {name} Election Results
        </h1>
      </header>

      <hr className="w-[90%] mx-auto" />

      <main>
        <main className="p-5 xs:px-0 space-y-10">
          <section className="space-y-5">
            <h2 className="text-textcolor text-xl xs:text-lg font-medium">
              Result Overview
            </h2>

            <ResultOverview lgaResults={data2.data} puResults={data3.data} />
          </section>

          <hr className="w-[90%] mx-auto" />

          <section className="space-y-5">
            <h2 className="text-textcolor text-xl xs:text-lg font-medium">
              Polling Units
            </h2>

            <PollingUnitsTable pollUnits={data1.data} />
          </section>
        </main>
      </main>
    </div>
  );
}
