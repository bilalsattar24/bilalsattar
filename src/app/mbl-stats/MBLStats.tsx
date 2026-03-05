"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  BarChart2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  Flame,
  Search,
  Shield,
  Sparkles,
  Target,
  Trophy,
  User,
} from "lucide-react";
import Papa from "papaparse";
import { motion, AnimatePresence } from "framer-motion";

interface PlayerStats {
  DIV: string;
  Season: string;
  "Last Name": string;
  "First Name": string;
  Team: string;
  GP: string;
  PTS: string;
  REB: string;
  AST: string;
  STL: string;
  BLK: string;
  TO: string;
  PF: string;
  TF: string;
  TSP: string;
}

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

const MBLStatsPage = () => {
  const [data, setData] = useState<PlayerStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("all");
  const [selectedDivision, setSelectedDivision] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/stats.csv");
        if (!response.ok) throw new Error("Failed to load stats data");
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setData(results.data as PlayerStats[]);
            setLoading(false);
          },
          error: (parseError: Error) => {
            setError(`Error parsing CSV data: ${parseError.message}`);
            setLoading(false);
          },
        });
      } catch (err) {
        setError(`Error loading data: ${(err as Error).message}`);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const { seasons, divisions } = useMemo(() => {
    const seasonsSet = new Set<string>();
    const divisionsSet = new Set<string>();

    data.forEach((player) => {
      if (player.Season?.trim()) seasonsSet.add(player.Season.trim());
      if (player.DIV?.trim()) divisionsSet.add(player.DIV.trim());
    });

    return {
      seasons: Array.from(seasonsSet).sort(),
      divisions: Array.from(divisionsSet).sort(),
    };
  }, [data]);

  const filteredData = useMemo(() => {
    return data.filter((player) => {
      const searchTerms = searchTerm.toLowerCase().split(" ").filter(Boolean);
      const fullName =
        `${player["First Name"] || ""} ${player["Last Name"] || ""}`.toLowerCase();
      const searchMatch =
        searchTerm === "" ||
        searchTerms.every((term) => fullName.includes(term));
      const seasonMatch =
        selectedSeason === "all" || player.Season === selectedSeason;
      const divisionMatch =
        selectedDivision === "all" || player.DIV === selectedDivision;

      return searchMatch && seasonMatch && divisionMatch;
    });
  }, [data, searchTerm, selectedSeason, selectedDivision]);

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page, rowsPerPage]);

  const summary = useMemo(() => {
    const uniquePlayers = new Set(
      data.map((player) =>
        `${player["First Name"] || ""} ${player["Last Name"] || ""}`.trim(),
      ),
    );

    const topScorer = data.reduce<PlayerStats | null>((best, player) => {
      const currentPoints = parseFloat(player.PTS) || 0;
      const bestPoints = best ? parseFloat(best.PTS) || 0 : -1;
      return currentPoints > bestPoints ? player : best;
    }, null);

    const bestEfficiency = data.reduce<PlayerStats | null>((best, player) => {
      const currentTsp = parseFloat(player.TSP) || 0;
      const bestTsp = best ? parseFloat(best.TSP) || 0 : -1;
      return currentTsp > bestTsp ? player : best;
    }, null);

    const topRebounder = data.reduce<PlayerStats | null>((best, player) => {
      const currentRebounds = parseFloat(player.REB) || 0;
      const bestRebounds = best ? parseFloat(best.REB) || 0 : -1;
      return currentRebounds > bestRebounds ? player : best;
    }, null);

    const topPlaymaker = data.reduce<PlayerStats | null>((best, player) => {
      const currentAssists = parseFloat(player.AST) || 0;
      const bestAssists = best ? parseFloat(best.AST) || 0 : -1;
      return currentAssists > bestAssists ? player : best;
    }, null);

    return {
      uniquePlayers: uniquePlayers.size,
      topScorer,
      bestEfficiency,
      topRebounder,
      topPlaymaker,
    };
  }, [data]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / rowsPerPage));
  const startRow = filteredData.length === 0 ? 0 : page * rowsPerPage + 1;
  const endRow = Math.min((page + 1) * rowsPerPage, filteredData.length);

  const handleChangePage = (newPage: number) => {
    if (newPage < 0 || newPage >= totalPages) return;
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatColor = (stat: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    if (stat === "PTS" && numValue > 150) return "text-orange-300";
    if (stat === "REB" && numValue > 50) return "text-cyan-300";
    if (stat === "AST" && numValue > 30) return "text-lime-300";
    if (stat === "STL" && numValue > 20) return "text-fuchsia-300";
    return "text-slate-200";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#07111f] px-4 py-20 text-slate-100 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[rgba(9,17,30,0.82)] p-10 text-center shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-slate-600 border-t-orange-400" />
          <p className="mt-6 text-lg font-medium tracking-[0.02em] text-slate-300">
            Loading player stats...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#07111f] px-4 py-20 text-slate-100 sm:px-6 lg:px-8">
        <div
          className="mx-auto max-w-4xl rounded-[2rem] border border-red-500/30 bg-red-500/10 px-6 py-5 text-red-200 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          role="alert">
          <strong className="font-semibold">Error: </strong>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.20),_transparent_18%),radial-gradient(circle_at_80%_10%,_rgba(14,165,233,0.14),_transparent_18%),linear-gradient(180deg,_#06101d_0%,_#0b1526_48%,_#121f34_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(10,18,31,0.96),rgba(16,27,45,0.92))] px-6 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.40)] sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute -right-16 top-8 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl animate-float" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-24 w-24 rounded-full bg-sky-400/15 blur-3xl animate-float [animation-delay:1s]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
                <BarChart2 className="h-4 w-4" />
                MBL analytics
              </div>
              <h1 className="mt-6 text-[clamp(2.9rem,7vw,5.8rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                Own the scoreboard.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                A standalone basketball stats app for exploring player output
                across seasons, divisions, and team contexts with a sharper,
                game-night visual system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  {data.length} stat lines loaded
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  {summary.uniquePlayers} unique players
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  {seasons.length} seasons tracked
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InsightCard
                icon={<Flame className="h-5 w-5" />}
                label="Scoring leader"
                value={
                  summary.topScorer
                    ? `${summary.topScorer["First Name"]} ${summary.topScorer["Last Name"]}`
                    : "N/A"
                }
                detail={
                  summary.topScorer
                    ? `${summary.topScorer.PTS || "0"} points`
                    : "Awaiting data"
                }
                tone="orange"
              />
              <InsightCard
                icon={<Target className="h-5 w-5" />}
                label="Efficiency leader"
                value={
                  summary.bestEfficiency
                    ? `${summary.bestEfficiency.TSP || "0"}`
                    : "N/A"
                }
                detail={
                  summary.bestEfficiency
                    ? `${summary.bestEfficiency["First Name"]} ${summary.bestEfficiency["Last Name"]}`
                    : "Awaiting data"
                }
                tone="blue"
              />
            </div>
          </div>
        </motion.header>

        <motion.div
          {...cardMotion}
          transition={{ ...cardMotion.transition, delay: 0.12 }}
          className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={<User />}
            title="Records"
            value={data.length}
            tone="orange"
          />
          <StatCard
            icon={<Calendar />}
            title="Seasons"
            value={seasons.length}
            tone="slate"
          />
          <StatCard
            icon={<Shield />}
            title="Divisions"
            value={divisions.length}
            tone="blue"
          />
          <StatCard
            icon={<Sparkles />}
            title="Filtered"
            value={filteredData.length}
            tone="dark"
          />
        </motion.div>

        <motion.div
          {...cardMotion}
          transition={{ ...cardMotion.transition, delay: 0.18 }}
          className="mt-8 grid gap-4 lg:grid-cols-3">
          <LeaderCard
            icon={<Trophy className="h-5 w-5" />}
            title="Top rebounder"
            player={summary.topRebounder}
            statLabel="REB"
            statValue={summary.topRebounder?.REB || "0"}
          />
          <LeaderCard
            icon={<Target className="h-5 w-5" />}
            title="Top playmaker"
            player={summary.topPlaymaker}
            statLabel="AST"
            statValue={summary.topPlaymaker?.AST || "0"}
          />
          <LeaderCard
            icon={<Filter className="h-5 w-5" />}
            title="Current filter state"
            value={selectedSeason === "all" ? "All seasons" : selectedSeason}
            secondary={
              selectedDivision === "all"
                ? "All divisions"
                : `Division ${selectedDivision}`
            }
            statLabel="ROWS"
            statValue={`${filteredData.length}`}
          />
        </motion.div>

        <motion.section
          {...cardMotion}
          transition={{ ...cardMotion.transition, delay: 0.24 }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-[rgba(8,16,29,0.82)] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.34)] backdrop-blur sm:p-6">
          <div className="mb-5 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-200">
                Controls
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                Dial in the matchup.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Search by player name, narrow by season and division, and jump
              through the results without losing momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search by player name..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setPage(0);
                }}
                className="w-full rounded-[1rem] border border-white/10 bg-slate-950/70 py-3 pl-11 pr-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-orange-400/50 focus:bg-slate-950"
              />
            </div>
            <SelectControl
              label="Season"
              value={selectedSeason}
              onChange={(value) => {
                setSelectedSeason(value);
                setPage(0);
              }}
              options={seasons}
            />
            <SelectControl
              label="Division"
              value={selectedDivision}
              onChange={(value) => {
                setSelectedDivision(value);
                setPage(0);
              }}
              options={divisions.map((d) => `Division ${d}`)}
              originalOptions={divisions}
            />
          </div>
        </motion.section>

        <motion.section
          {...cardMotion}
          transition={{ ...cardMotion.transition, delay: 0.28 }}
          className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(8,16,29,0.88)] shadow-[0_25px_90px_rgba(0,0,0,0.38)] backdrop-blur">
          <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-200">
                Box score view
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                Full stat sheet.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                {filteredData.length} matching rows
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                {selectedSeason === "all" ? "All seasons" : selectedSeason}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                {selectedDivision === "all"
                  ? "All divisions"
                  : `Division ${selectedDivision}`}
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr className="bg-[rgba(255,255,255,0.04)] text-slate-400">
                  {[
                    "Player",
                    "Season",
                    "Div",
                    "Team",
                    "GP",
                    "PTS",
                    "REB",
                    "AST",
                    "STL",
                    "BLK",
                    "TSP",
                  ].map((header) => (
                    <th
                      key={header}
                      className="whitespace-nowrap px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <AnimatePresence initial={false}>
                  {paginatedData.map((player, index) => (
                    <motion.tr
                      key={`${player["First Name"]}-${player["Last Name"]}-${player.Season}-${index}`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{
                        duration: 0.26,
                        delay: Math.min(index * 0.015, 0.18),
                      }}
                      className="border-b border-white/5 bg-[rgba(255,255,255,0.01)] transition hover:bg-[rgba(249,115,22,0.08)]">
                      <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-white">
                        {player["First Name"]} {player["Last Name"]}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        <span className="inline-flex rounded-full bg-orange-500/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200 ring-1 ring-orange-400/20">
                          {player.Season || "N/A"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        <span className="inline-flex rounded-full bg-sky-500/12 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 ring-1 ring-sky-400/20">
                          {player.DIV || "N/A"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-300">
                        {player.Team || "N/A"}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-300">
                        {player.GP || "0"}
                      </td>
                      <td
                        className={`whitespace-nowrap px-5 py-4 text-sm font-semibold ${getStatColor("PTS", player.PTS)}`}>
                        {player.PTS || "0"}
                      </td>
                      <td
                        className={`whitespace-nowrap px-5 py-4 text-sm ${getStatColor("REB", player.REB)}`}>
                        {player.REB || "0"}
                      </td>
                      <td
                        className={`whitespace-nowrap px-5 py-4 text-sm ${getStatColor("AST", player.AST)}`}>
                        {player.AST || "0"}
                      </td>
                      <td
                        className={`whitespace-nowrap px-5 py-4 text-sm ${getStatColor("STL", player.STL)}`}>
                        {player.STL || "0"}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-300">
                        {player.BLK || "0"}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-white">
                        {player.TSP || "0"}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-sm text-slate-400">
              Showing{" "}
              <span className="font-semibold text-white">{startRow}</span> to{" "}
              <span className="font-semibold text-white">{endRow}</span> of{" "}
              <span className="font-semibold text-white">
                {filteredData.length}
              </span>{" "}
              results
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <select
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 outline-none transition focus:border-orange-400/50">
                {[10, 25, 50, 100].map((size) => (
                  <option key={size} value={size}>
                    Show {size}
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleChangePage(page - 1)}
                  disabled={page === 0}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40">
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                <span className="px-2 text-sm text-slate-400">
                  Page {page + 1} / {totalPages}
                </span>
                <button
                  onClick={() => handleChangePage(page + 1)}
                  disabled={page >= totalPages - 1}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-40">
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        <footer className="px-1 py-8 text-center text-sm text-slate-500">
          <p>
            MBL Player Statistics Dashboard • {filteredData.length} rows
            currently displayed
          </p>
        </footer>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactElement;
  title: string;
  value: number | string;
  tone: "dark" | "orange" | "blue" | "slate";
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, tone }) => {
  const tones = {
    dark: "bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.96))] text-white border border-white/10",
    orange:
      "bg-[linear-gradient(135deg,rgba(249,115,22,0.96),rgba(234,88,12,0.96))] text-white",
    blue: "bg-[linear-gradient(135deg,rgba(14,165,233,0.94),rgba(3,105,161,0.94))] text-white",
    slate: "bg-[rgba(15,23,42,0.86)] text-white border border-white/10",
  };

  return (
    <div
      className={`rounded-[1.5rem] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] ${tones[tone]}`}>
      <div className="flex items-center gap-4">
        <div className="rounded-[1rem] bg-black/15 p-3">
          {React.cloneElement(icon, { className: "h-5 w-5" })}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-80">
            {title}
          </p>
          <p className="mt-1 text-3xl font-semibold tracking-[-0.04em]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

interface InsightCardProps {
  icon: React.ReactElement;
  label: string;
  value: string;
  detail: string;
  tone: "orange" | "blue";
}

const InsightCard: React.FC<InsightCardProps> = ({
  icon,
  label,
  value,
  detail,
  tone,
}) => (
  <div
    className={`rounded-[1.5rem] border p-5 text-left shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur ${tone === "orange" ? "border-orange-400/20 bg-orange-500/10" : "border-sky-400/20 bg-sky-500/10"}`}>
    <div className="flex items-center gap-3 text-slate-200">
      <div className="rounded-full border border-white/10 p-2">{icon}</div>
      <span className="text-xs font-semibold uppercase tracking-[0.24em]">
        {label}
      </span>
    </div>
    <div className="mt-6 text-xl font-semibold tracking-[-0.03em] text-white">
      {value}
    </div>
    <div className="mt-2 text-sm leading-6 text-slate-300">{detail}</div>
  </div>
);

interface LeaderCardProps {
  icon: React.ReactElement;
  title: string;
  player?: PlayerStats | null;
  value?: string;
  secondary?: string;
  statLabel: string;
  statValue: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  icon,
  title,
  player,
  value,
  secondary,
  statLabel,
  statValue,
}) => (
  <div className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 text-slate-200">
        <div className="rounded-full border border-white/10 p-2">{icon}</div>
        <span className="text-xs font-semibold uppercase tracking-[0.24em]">
          {title}
        </span>
      </div>
      <div className="rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
        {statLabel}
      </div>
    </div>
    <div className="mt-6 text-xl font-semibold tracking-[-0.03em] text-white">
      {value ||
        (player ? `${player["First Name"]} ${player["Last Name"]}` : "N/A")}
    </div>
    <div className="mt-2 text-sm text-slate-400">
      {secondary ||
        (player
          ? `${player.Team || "No team"} • ${player.Season || "No season"}`
          : "Awaiting data")}
    </div>
    <div className="mt-5 text-3xl font-black tracking-[-0.04em] text-orange-300">
      {statValue}
    </div>
  </div>
);

interface SelectControlProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  originalOptions?: string[];
}

const SelectControl: React.FC<SelectControlProps> = ({
  label,
  value,
  onChange,
  options,
  originalOptions,
}) => (
  <div className="relative">
    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full appearance-none rounded-[1rem] border border-white/10 bg-slate-950/70 px-4 py-3 pr-10 text-slate-100 outline-none transition focus:border-orange-400/50 focus:bg-slate-950">
      <option value="all">All {label}s</option>
      {(originalOptions || options).map((opt, i) => (
        <option key={opt} value={opt}>
          {options[i]}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 top-7 flex items-center px-3 text-slate-500">
      <svg
        className="h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
);

export default MBLStatsPage;
