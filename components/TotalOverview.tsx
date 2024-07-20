function TotalOverview() {
	return (
		<div className="grid grid-cols-2 gap-5">
			{[
				{ head: "State", text: "Delta" },
				{ head: "LGAs", text: "0" },
				{ head: "Wards", text: "0" },
				{ head: "Polling Units", text: "0" },
			].map((val, ind) => (
				<div
					key={ind}
					className="rounded-md px-5 py-6 bg-secondary/50 space-y-2"
				>
					<h2 className="text-xl xs:text-lg font-medium text-secondary">
						{val.head}
					</h2>

					<p className="text-primary text-2xl xs:text-xl font-bold">
						{val.text}
					</p>
				</div>
			))}
		</div>
	);
}

export default TotalOverview;
