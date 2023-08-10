import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/redux/provider";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pogodynka",
	description:
		"Weather app with various features such as displaying weather for users current location, searched location. Used technologies: lang - typescript; framework - next.js; state manager - react-redux; other: tailwindcss, react-leaflet, shadcn/ui",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${roboto.className} overflow-auto h-screen`}>
				<Header />
				<Providers>
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
