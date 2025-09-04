"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Search, Filter, User, TrendingUp, BarChart2 } from 'lucide-react';
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
          error: (error: Error) => {
            setError("Error parsing CSV data: " + error.message);
            setLoading(false);
          },
        });
      } catch (err) {
        setError("Error loading data: " + (err as Error).message);
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
      const fullName = `${player["First Name"] || ""} ${player["Last Name"] || ""}`.toLowerCase();
      const searchMatch = searchTerm === "" || searchTerms.every((term) => fullName.includes(term));
      const seasonMatch = selectedSeason === "all" || player.Season === selectedSeason;
      const divisionMatch = selectedDivision === "all" || player.DIV === selectedDivision;
      return searchMatch && seasonMatch && divisionMatch;
    });
  }, [data, searchTerm, selectedSeason, selectedDivision]);

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page, rowsPerPage]);

  const handleChangePage = (newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatColor = (stat: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    if (stat === "PTS" && numValue > 150) return 'text-green-500';
    if (stat === "REB" && numValue > 50) return 'text-blue-500';
    if (stat === "AST" && numValue > 30) return 'text-yellow-500';
    if (stat === "STL" && numValue > 20) return 'text-purple-500';
    return 'text-gray-800 dark:text-gray-200';
  };

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            <BarChart2 className="inline-block h-10 w-10 sm:h-12 sm:w-12 mr-3 align-middle" />
            MBL Player Stats
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Explore comprehensive player statistics across all seasons and divisions.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard icon={<User />} title="Total Records" value={data.length} color="from-red-500 to-red-600" />
            <StatCard icon={<TrendingUp />} title="Seasons" value={seasons.length} color="from-green-500 to-green-600" />
            <StatCard icon={<Filter />} title="Divisions" value={divisions.length} color="from-blue-500 to-blue-600" />
            <StatCard icon={<Search />} title="Filtered" value={filteredData.length} color="from-yellow-500 to-yellow-600" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <SelectControl label="Season" value={selectedSeason} onChange={setSelectedSeason} options={seasons} />
            <SelectControl label="Division" value={selectedDivision} onChange={setSelectedDivision} options={divisions.map(d => `Division ${d}`)} originalOptions={divisions} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700/50">
                  <tr>
                    {['Player', 'Season', 'Div', 'Team', 'GP', 'PTS', 'REB', 'AST', 'STL', 'BLK', 'TSP'].map(header => (
                      <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <AnimatePresence>
                    {paginatedData.map((player, index) => (
                      <motion.tr
                        key={`${player["First Name"]}-${player["Last Name"]}-${player.Season}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-gray-700/50 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{player["First Name"]} {player["Last Name"]}</td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-600/30 text-purple-300">{player.Season || 'N/A'}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-600/30 text-pink-300">{player.DIV || 'N/A'}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{player.Team || 'N/A'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{player.GP || '0'}</td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${getStatColor("PTS", player.PTS)}`}>{player.PTS || '0'}</td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${getStatColor("REB", player.REB)}`}>{player.REB || '0'}</td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${getStatColor("AST", player.AST)}`}>{player.AST || '0'}</td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${getStatColor("STL", player.STL)}`}>{player.STL || '0'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{player.BLK || '0'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-300">{player.TSP || '0'}</td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-700/50 px-4 py-3 flex items-center justify-between sm:px-6 border-t border-gray-700">
              <div className="flex-1 flex justify-between sm:hidden">
                <button onClick={() => handleChangePage(page - 1)} disabled={page === 0} className="relative inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700 disabled:opacity-50">Previous</button>
                <button onClick={() => handleChangePage(page + 1)} disabled={page >= Math.ceil(filteredData.length / rowsPerPage) - 1} className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700 disabled:opacity-50">Next</button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    Showing <span className="font-medium">{page * rowsPerPage + 1}</span> to <span className="font-medium">{Math.min((page + 1) * rowsPerPage, filteredData.length)}</span> of <span className="font-medium">{filteredData.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button onClick={() => handleChangePage(page - 1)} disabled={page === 0} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-600 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700 disabled:opacity-50">Previous</button>
                    <select value={rowsPerPage} onChange={handleChangeRowsPerPage} className="bg-gray-800 border-gray-600 text-gray-300 text-sm focus:ring-purple-500 focus:border-purple-500">
                      {[10, 25, 50, 100].map(size => <option key={size} value={size}>Show {size}</option>)}
                    </select>
                    <button onClick={() => handleChangePage(page + 1)} disabled={page >= Math.ceil(filteredData.length / rowsPerPage) - 1} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-600 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700 disabled:opacity-50">Next</button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <footer className="text-center mt-10 text-gray-500 text-sm">
          <p>MBL Player Statistics Dashboard • {filteredData.length} players displayed</p>
        </footer>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactElement;
  title: string;
  value: number | string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, color }) => (
  <div className={`bg-gradient-to-br ${color} p-4 rounded-xl shadow-lg text-white`}>
    <div className="flex items-center">
      <div className="p-3 bg-black/20 rounded-lg mr-4">{React.cloneElement(icon, { className: "h-6 w-6" })}</div>
      <div>
        <p className="text-sm font-medium text-gray-200">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
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

const SelectControl: React.FC<SelectControlProps> = ({ label, value, onChange, options, originalOptions }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
      <option value="all">All {label}s</option>
      {(originalOptions || options).map((opt, i) => (
        <option key={opt} value={opt}>{options[i]}</option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
  </div>
);

export default MBLStatsPage;
