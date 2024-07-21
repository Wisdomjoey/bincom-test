import { notFound } from "next/navigation";

export default function PollingUnitResultPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  //   const name = searchParams.name;
  //   const id = searchParams.id;

  //   if (!name || !id) return notFound();

  return (
    <div className="px-3">
      <header className="relative px-8 py-6 xs:px-2 xs:py-5">
        <h1 className="text-textcolor font-bold text-2xl xs:text-xl tracking-wider xs:tracking-wide">
          {"name"}: Polling Unit Election Results
        </h1>
      </header>

      <hr className="w-[90%] mx-auto" />

      <main className="p-5 xs:px-0 space-y-5 sm:space-y-6">
        <section>
          <h2 className="text-textcolor text-xl xs:text-lg font-medium">
            Polling Unit Info
          </h2>

          <div className="md:grid grid-cols-3 tablet:grid-cols-2 gap-5">
            {[].map((val, ind) => (
              <div key={ind} className="space-y-1">
                <h3 className="text-primary font-medium text-lg uppercase xs:text-base">
                  {}
                </h3>

                <p className="text-textcolor text-2xl xs:text-xl">{}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="w-[90%] mx-auto" />

        <section>
          <h2 className="text-textcolor text-xl xs:text-lg font-medium">
            Election Results
          </h2>

          <div className="flex flex-col gap-5">
            
          </div>
        </section>
      </main>
    </div>
  );
}
