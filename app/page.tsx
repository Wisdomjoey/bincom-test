import PollingUnitsDisplay from "@/components/PollingUnitsDisplay";
import PUResultGraph from "@/components/PUResultGraph";
import TotalOverview from "@/components/TotalOverview";

export default function Home() {
	return (
		<div className="px-3">
			<header className="relative px-8 py-6 xs:px-2 xs:py-5">
				<h1 className="text-textcolor font-bold text-2xl xs:text-xl tracking-wider xs:tracking-wide">
					2011 Election Results For Delta State
				</h1>
			</header>

			<hr className="w-[90%] mx-auto" />

			<main className="p-5 xs:px-0 space-y-5 sm:space-y-14">
				<section>
					<h2 className="text-textcolor text-xl xs:text-lg font-medium">
						Overview
					</h2>

					<div className="flex items-center gap-10 sm:flex-col">
						<div className="flex-1 sm:w-full">
							<PUResultGraph />
						</div>

						<hr className="md:h-60 sm:w-60 xs:w-32 md:border-l" />

						<div className="flex-1 sm:w-full">
							<TotalOverview />
						</div>
					</div>
				</section>

				<section className="space-y-10">
					<h2 className="text-textcolor text-xl xs:text-lg font-medium">
						Polling Units
					</h2>

					<div className="overflow-x-hidden">
						<PollingUnitsDisplay />
					</div>
				</section>
			</main>
		</div>
	);
}


