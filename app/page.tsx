"use client";

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

			<main className="py-5 px-5">
				<section>
					<h2 className="text-textcolor text-xl xs:text-lg font-medium">
						Overview
					</h2>

					<div className="flex items-center gap-10 sm:flex-col">
						<div className="flex-1">
							<PUResultGraph />
						</div>

						<hr className="h-20 sm:w-20" />

						<div className="flex-1">
							<TotalOverview />
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}


