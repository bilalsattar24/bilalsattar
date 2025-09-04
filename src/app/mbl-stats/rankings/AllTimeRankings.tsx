"use client";

import React, { useState, useEffect, useMemo } from "react";
import Papa from "papaparse";
import { motion } from "framer-motion";

interface PlayerStatsRow {
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
  FGM: string;
  FGA: string;
  "FG%": string;
  "3PM": string;
  "3PA": string;
  "3P%": string;
  FTM: string;
  FTA: string;
  "FT%": string;
}

interface AggregatedPlayerStats {
  fullName: string;
  GP: number;
  PTS: number;
  REB: number;
  AST: number;
  STL: number;
  BLK: number;
  TO: number;
  PF: number;
  FGM: number;
  FGA: number;
  "3PM": number;
  "3PA": number;
  FTM: number;
  FTA: number;
}

const AllTimeRankingsPage = () => {
  const [playerData, setPlayerData] = useState<PlayerStatsRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<keyof AggregatedPlayerStats>("PTS");

  useEffect(() => {
    const fetchCsvData = async () => {
      try {
        const response = await fetch("/stats.csv");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const reader = response.body?.getReader();
        const result = await reader?.read();
        const decoder = new TextDecoder("utf-8");
        const csv = decoder.decode(result?.value);

        Papa.parse<PlayerStatsRow>(csv, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            setPlayerData(results.data);
            setLoading(false);
          },
          error: (err: Error) => {
            setError(`Failed to parse CSV: ${err.message}`);
            setLoading(false);
          },
        });
      } catch (e) {
        if (e instanceof Error) {
          setError(`Failed to load data: ${e.message}`);
        } else {
          setError("An unknown error occurred while loading data.");
        }
        setLoading(false);
      }
    };

    fetchCsvData();
  }, []);

  const aggregatedStats = useMemo(() => {
    const playerMap = new Map<string, AggregatedPlayerStats>();

    playerData.forEach((row) => {
      const fullName = `${row["First Name"]} ${row["Last Name"]}`.trim();
      if (!fullName || fullName === " ") return; // Skip rows with no name

      let player = playerMap.get(fullName);
      if (!player) {
        player = {
          fullName,
          GP: 0,
          PTS: 0,
          REB: 0,
          AST: 0,
          STL: 0,
          BLK: 0,
          TO: 0,
          PF: 0,
          FGM: 0,
          FGA: 0,
          "3PM": 0,
          "3PA": 0,
          FTM: 0,
          FTA: 0,
        };
        playerMap.set(fullName, player);
      }

      player.GP += Number(row.GP) || 0;
      player.PTS += Number(row.PTS) || 0;
      player.REB += Number(row.REB) || 0;
      player.AST += Number(row.AST) || 0;
      player.STL += Number(row.STL) || 0;
      player.BLK += Number(row.BLK) || 0;
      player.TO += Number(row.TO) || 0;
      player.PF += Number(row.PF) || 0;
      player.FGM += Number(row.FGM) || 0;
      player.FGA += Number(row.FGA) || 0;
      player["3PM"] += Number(row["3PM"]) || 0;
      player["3PA"] += Number(row["3PA"]) || 0;
      player.FTM += Number(row.FTM) || 0;
      player.FTA += Number(row.FTA) || 0;
    });

    const sortedPlayers = Array.from(playerMap.values()).sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      if (typeof valA === "string" && typeof valB === "string") {
        return valB.localeCompare(valA);
      }
      return (Number(valB) || 0) - (Number(valA) || 0);
    });

    return sortedPlayers.slice(0, 25);
  }, [playerData, sortBy]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mt-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
        <p className="text-center text-lg mt-2">Loading player stats...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>
          MBL All-Time Top 25 Player Rankings
        </h1>
      </motion.div>

      <div className="mb-6 flex justify-center">
        <div className="relative">
          <label htmlFor="sort-by" className="sr-only">Sort By</label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as keyof AggregatedPlayerStats)}
            className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-w-[200px]">
            <option value="PTS">Total Points</option>
            <option value="REB">Total Rebounds</option>
            <option value="AST">Total Assists</option>
            <option value="STL">Total Steals</option>
            <option value="BLK">Total Blocks</option>
            <option value="GP">Games Played</option>
            <option value="FGM">Field Goals Made</option>
            <option value="FGA">Field Goals Attempted</option>
            <option value="3PM">Three Pointers Made</option>
            <option value="3PA">Three Pointers Attempted</option>
            <option value="FTM">Free Throws Made</option>
            <option value="FTA">Free Throws Attempted</option>
            <option value="TO">Turnovers</option>
            <option value="PF">Personal Fouls</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-xl p-2 bg-white overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Player</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">GP</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">PTS</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">REB</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">AST</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">STL</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">BLK</th>
              <th className="hidden sm:table-cell px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">TO</th>
              <th className="hidden sm:table-cell px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">PF</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {aggregatedStats.map((player, index) => {
              const isTopThree = index < 3;
              const rankColor = [
                'bg-yellow-100/50',
                'bg-gray-200/50',
                'bg-orange-200/50'
              ][index] || '';

              return (
                <motion.tr
                  key={player.fullName}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  className={`${rankColor} hover:bg-gray-100`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${isTopThree ? 'text-lg' : ''}`}>{index + 1}</span>
                      {isTopThree && (
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor:
                              index === 0
                                ? "#FFD700"
                                : index === 1
                                ? "#C0C0C0"
                                : "#CD7F32",
                          }}
                        />
                      )}
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap ${isTopThree ? 'font-bold' : ''}`}>
                    {player.fullName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">{player.GP.toLocaleString()}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-right ${sortBy === "PTS" ? 'font-bold' : ''}`}>{player.PTS.toLocaleString()}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-right ${sortBy === "REB" ? 'font-bold' : ''}`}>{player.REB.toLocaleString()}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-right ${sortBy === "AST" ? 'font-bold' : ''}`}>{player.AST.toLocaleString()}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-right ${sortBy === "STL" ? 'font-bold' : ''}`}>{player.STL.toLocaleString()}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-right ${sortBy === "BLK" ? 'font-bold' : ''}`}>{player.BLK.toLocaleString()}</td>
                  <td className={`hidden sm:table-cell px-6 py-4 whitespace-nowrap text-right ${sortBy === "TO" ? 'font-bold' : ''}`}>{player.TO.toLocaleString()}</td>
                  <td className={`hidden sm:table-cell px-6 py-4 whitespace-nowrap text-right ${sortBy === "PF" ? 'font-bold' : ''}`}>{player.PF.toLocaleString()}</td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTimeRankingsPage;
