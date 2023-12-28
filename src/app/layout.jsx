import EnterExitMotion from "@/components/EnterExitMotion";
import NavBar from "@/components/NavBar";
import "@/globals.css";
import { fetchData } from "@/lib/fetchData";
import { Toaster } from "react-hot-toast";
import RouteChanging from "@/components/RouteChanging";

export const revalidate = 18000;

export const metadata = {
  title: "Breeze And Be",
  icons: ["/logo.svg"],
  description: "BREEZE IN THE ESSENCE, BE YOUR RADIANT SELF.",
  openGraph: {
    // title: "Breeze And Be",
    // description: "BREEZE IN THE ESSENCE, BE YOUR RADIANT SELF.",
    // url: "https://www.breezeandbe.com",
    // siteName: "Breeze And Be",
    images: [
      {
        url: `https://www.breezeandbe.com/opengraph-image.jpg?v=${new Date().getTime()}`,
        width: 1600,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  const { data, error } = await fetchData("home");
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <NavBar contact={data?.contact[0]} />
        <Toaster />
        <RouteChanging changing={true}>
          <EnterExitMotion>{children}</EnterExitMotion>
        </RouteChanging>
      </body>
    </html>
  );
}
