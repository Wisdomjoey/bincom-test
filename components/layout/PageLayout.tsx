function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative">
			<span className="fixed top-0 left-0 h-[100dvh] w-10 tablet:w-5 xs:w-3 rounded-r-[2.5rem] tablet:rounded-r-[1.25rem] xs:rounded-r-[0.75rem] bg-primary"></span>

			<div className="px-10 tablet:px-5 xs:px-3 min-h-[100dvh]">{children}</div>

			<span className="fixed top-0 right-0 h-[100dvh] w-10 tablet:w-5 xs:w-3 rounded-l-[2.5rem] tablet:rounded-l-[1.25rem] xs:rounded-l-[0.75rem] bg-primary"></span>
		</div>
	);
}

export default PageLayout;
