import type { Metadata } from "next";
import "./globals.css";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Bincom PHP Test",
  description: "JayZ's proof of skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body className="min-h-screen">
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	);
}

