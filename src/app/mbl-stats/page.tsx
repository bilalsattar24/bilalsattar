import { Metadata } from "next";
import MBLStatsPage from "./MBLStats";

export const metadata: Metadata = {
  title: "MBL Player Stats | Interactive Career Statistics",
  description:
    "Dive deep into MBL player stats. Search, filter, and explore comprehensive career statistics for every player, season, and division in a beautiful, responsive interface.",
};

const Page = () => {
  return <MBLStatsPage />;
};

export default Page;
