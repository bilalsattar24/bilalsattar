"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
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

      // Aggregate stats, converting to number and handling potential null/undefined
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
      // Sort in descending order based on the selected sortBy criterion
      const valA = a[sortBy];
      const valB = b[sortBy];

      if (typeof valA === "string" && typeof valB === "string") {
        return valB.localeCompare(valA); // For descending order
      }

      return (Number(valB) || 0) - (Number(valA) || 0);
    });

    return sortedPlayers.slice(0, 25); // Get top 25
  }, [playerData, sortBy]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          Loading player stats...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: 3,
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}>
          MBL All-Time Top 25 Player Rankings
        </Typography>
      </motion.div>

      <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as keyof AggregatedPlayerStats)
            }
            label="Sort By">
            <MenuItem value="PTS">Total Points</MenuItem>
            <MenuItem value="REB">Total Rebounds</MenuItem>
            <MenuItem value="AST">Total Assists</MenuItem>
            <MenuItem value="STL">Total Steals</MenuItem>
            <MenuItem value="BLK">Total Blocks</MenuItem>
            <MenuItem value="GP">Games Played</MenuItem>
            <MenuItem value="FGM">Field Goals Made</MenuItem>
            <MenuItem value="FGA">Field Goals Attempted</MenuItem>
            <MenuItem value="3PM">Three Pointers Made</MenuItem>
            <MenuItem value="3PA">Three Pointers Attempted</MenuItem>
            <MenuItem value="FTM">Free Throws Made</MenuItem>
            <MenuItem value="FTA">Free Throws Attempted</MenuItem>
            <MenuItem value="TO">Turnovers</MenuItem>
            <MenuItem value="PF">Personal Fouls</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Paper elevation={3} sx={{ p: 2, borderRadius: "12px" }}>
        <TableContainer>
          <Table aria-label="all-time rankings table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Rank</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Player</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  GP
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  PTS
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  REB
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  AST
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  STL
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  BLK
                </TableCell>
                {!isMobile && (
                  <>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      TO
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      PF
                    </TableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {aggregatedStats.map((player, index) => (
                <TableRow
                  key={player.fullName}
                  component={motion.tr}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  sx={{
                    backgroundColor:
                      index < 3
                        ? theme.palette.primary.light + "20"
                        : "inherit",
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {index + 1}
                      {index < 3 && (
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor:
                              index === 0
                                ? "#FFD700"
                                : index === 1
                                ? "#C0C0C0"
                                : "#CD7F32",
                          }}
                        />
                      )}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: index < 3 ? "bold" : "normal" }}>
                    {player.fullName}
                  </TableCell>
                  <TableCell align="right">
                    {player.GP.toLocaleString()}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: sortBy === "PTS" ? "bold" : "normal" }}>
                    {player.PTS.toLocaleString()}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: sortBy === "REB" ? "bold" : "normal" }}>
                    {player.REB.toLocaleString()}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: sortBy === "AST" ? "bold" : "normal" }}>
                    {player.AST.toLocaleString()}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: sortBy === "STL" ? "bold" : "normal" }}>
                    {player.STL.toLocaleString()}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: sortBy === "BLK" ? "bold" : "normal" }}>
                    {player.BLK.toLocaleString()}
                  </TableCell>
                  {!isMobile && (
                    <>
                      <TableCell
                        align="right"
                        sx={{
                          fontWeight: sortBy === "TO" ? "bold" : "normal",
                        }}>
                        {player.TO.toLocaleString()}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontWeight: sortBy === "PF" ? "bold" : "normal",
                        }}>
                        {player.PF.toLocaleString()}
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default AllTimeRankingsPage;
