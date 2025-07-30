import { Metadata } from "next";
import AllTimeRankingsPage from "./AllTimeRankings";

export const metadata: Metadata = {
  title: "MBL All-Time Top 25 Player Rankings",
  description:
    "Explore the MBL's all-time top 25 player rankings based on aggregated career statistics.",
};

const Page = () => {
  return <AllTimeRankingsPage />;
};

export default Page;
