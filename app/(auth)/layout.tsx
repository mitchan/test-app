import "../../styles/global.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <html lang="en" className="w-full h-full p-0 m-0">
      <head />
      <body className="w-full h-full p-0 m-0">{props.children}</body>
    </html>
  );
}
