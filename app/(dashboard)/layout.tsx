import { Sidebar } from "../../components/Sidebar";
import "../../styles/global.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-full p-0 m-0">
      <head />
      <body className="w-full h-full p-0 m-0">
        <div className="w-full h-full flex gap-1">
          <Sidebar />

          <div className="border border-black p-2 m-2 rounded-md flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
