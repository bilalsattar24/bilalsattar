"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Grid,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  useTheme,
  useMediaQuery,
  Skeleton,
  Alert,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Person as PersonIcon,
  TrendingUp as TrendingUpIcon,
  Sports as SportsIcon,
} from "@mui/icons-material";
import Papa from "papaparse";
import { motion, AnimatePresence } from "framer-motion";

interface PlayerStats {
  DIV: string;
  Season: string;
  "Season.1": string;
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [data, setData] = useState<PlayerStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("all");
  const [selectedDivision, setSelectedDivision] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Load CSV data
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/stats.csv");
        if (!response.ok) {
          throw new Error("Failed to load stats data");
        }
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setData(results.data as PlayerStats[]);
            setLoading(false);
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          error: (error: any) => {
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

  // Get unique seasons and divisions
  const { seasons, divisions } = useMemo(() => {
    const seasonsSet = new Set<string>();
    const divisionsSet = new Set<string>();

    data.forEach((player) => {
      if (player.Season && player.Season.trim()) {
        seasonsSet.add(player.Season.trim());
      }
      if (player["Season.1"] && player["Season.1"].trim()) {
        seasonsSet.add(player["Season.1"].trim());
      }
      if (player.DIV && player.DIV.trim()) {
        divisionsSet.add(player.DIV.trim());
      }
    });

    return {
      seasons: Array.from(seasonsSet).sort(),
      divisions: Array.from(divisionsSet).sort(),
    };
  }, [data]);

  // Filter data based on search and filters
  const filteredData = useMemo(() => {
    return data.filter((player) => {
      // Search filter (first name or last name)
      const searchMatch =
        searchTerm === "" ||
        player["First Name"]
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        player["Last Name"]?.toLowerCase().includes(searchTerm.toLowerCase());

      // Season filter
      const seasonMatch =
        selectedSeason === "all" ||
        player.Season === selectedSeason ||
        player["Season.1"] === selectedSeason;

      // Division filter
      const divisionMatch =
        selectedDivision === "all" || player.DIV === selectedDivision;

      return searchMatch && seasonMatch && divisionMatch;
    });
  }, [data, searchTerm, selectedSeason, selectedDivision]);

  // Paginated data
  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page, rowsPerPage]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatColor = (stat: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    if (stat === "PTS" && numValue > 150) return theme.palette.success.main;
    if (stat === "REB" && numValue > 50) return theme.palette.info.main;
    if (stat === "AST" && numValue > 30) return theme.palette.warning.main;
    if (stat === "STL" && numValue > 20) return theme.palette.secondary.main;
    return theme.palette.text.primary;
  };

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Skeleton variant="text" width={300} height={60} />
          <Skeleton variant="text" width={500} height={30} />
        </Box>
        <Grid container spacing={3}>
          {[...Array(6)].map((_, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Skeleton variant="rectangular" height={200} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        py: 4,
      }}>
      <Container maxWidth="xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "white",
                mb: 2,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}>
              <SportsIcon
                sx={{ fontSize: "inherit", mr: 2, verticalAlign: "middle" }}
              />
              MBL Player Stats
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.9)",
                maxWidth: 600,
                mx: "auto",
              }}>
              Explore comprehensive player statistics across all seasons and
              divisions
            </Typography>
          </Box>
        </motion.div>

        {/* Stats Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: "linear-gradient(45deg, #FF6B6B, #FF8E8E)",
                  color: "white",
                  textAlign: "center",
                }}>
                <CardContent>
                  <PersonIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h4" fontWeight="bold">
                    {data.length}
                  </Typography>
                  <Typography variant="body2">Total Records</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: "linear-gradient(45deg, #4ECDC4, #44A08D)",
                  color: "white",
                  textAlign: "center",
                }}>
                <CardContent>
                  <TrendingUpIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h4" fontWeight="bold">
                    {seasons.length}
                  </Typography>
                  <Typography variant="body2">Seasons</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: "linear-gradient(45deg, #A8E6CF, #7FCDCD)",
                  color: "white",
                  textAlign: "center",
                }}>
                <CardContent>
                  <FilterIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h4" fontWeight="bold">
                    {divisions.length}
                  </Typography>
                  <Typography variant="body2">Divisions</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: "linear-gradient(45deg, #FFD93D, #FF6B6B)",
                  color: "white",
                  textAlign: "center",
                }}>
                <CardContent>
                  <SearchIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h4" fontWeight="bold">
                    {filteredData.length}
                  </Typography>
                  <Typography variant="body2">Filtered Results</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Search Players"
                  variant="outlined"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <SearchIcon sx={{ mr: 1, color: "action.active" }} />
                    ),
                  }}
                  placeholder="Search by first or last name..."
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Season</InputLabel>
                  <Select
                    value={selectedSeason}
                    label="Season"
                    onChange={(e) => setSelectedSeason(e.target.value)}>
                    <MenuItem value="all">All Seasons</MenuItem>
                    {seasons.map((season) => (
                      <MenuItem key={season} value={season}>
                        {season}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Division</InputLabel>
                  <Select
                    value={selectedDivision}
                    label="Division"
                    onChange={(e) => setSelectedDivision(e.target.value)}>
                    <MenuItem value="all">All Divisions</MenuItem>
                    {divisions.map((division) => (
                      <MenuItem key={division} value={division}>
                        Division {division}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>

        {/* Results Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          <Paper sx={{ borderRadius: 3, overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: isMobile ? 400 : 600 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        color: "white",
                      }}>
                      Player
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        color: "white",
                      }}>
                      Season
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        color: "white",
                      }}>
                      Div
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        color: "white",
                      }}>
                      Team
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        color: "white",
                      }}>
                      GP
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        color: "white",
                      }}>
                      PTS
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        color: "white",
                      }}>
                      REB
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        color: "white",
                      }}>
                      AST
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        color: "white",
                      }}>
                      STL
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        color: "white",
                      }}>
                      BLK
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "primary.main",
                        color: "white",
                      }}>
                      TSP
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <AnimatePresence>
                    {paginatedData.map((player, index) => (
                      <TableRow
                        key={`${player["First Name"]}-${player["Last Name"]}-${player.Season}-${index}`}
                        component={motion.tr}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        sx={{
                          "&:hover": {
                            bgcolor: "action.hover",
                            transform: "scale(1.01)",
                            transition: "all 0.2s ease-in-out",
                          },
                        }}>
                        <TableCell>
                          <Box>
                            <Typography variant="body2" fontWeight="bold">
                              {player["First Name"]} {player["Last Name"]}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={player.Season || player["Season.1"] || "N/A"}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={player.DIV || "N/A"}
                            size="small"
                            color="secondary"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" color="text.secondary">
                            {player.Team || "N/A"}
                          </Typography>
                        </TableCell>
                        <TableCell>{player.GP || "0"}</TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{ color: getStatColor("PTS", player.PTS) }}>
                            {player.PTS || "0"}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                            sx={{ color: getStatColor("REB", player.REB) }}>
                            {player.REB || "0"}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                            sx={{ color: getStatColor("AST", player.AST) }}>
                            {player.AST || "0"}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                            sx={{ color: getStatColor("STL", player.STL) }}>
                            {player.STL || "0"}
                          </Typography>
                        </TableCell>
                        <TableCell>{player.BLK || "0"}</TableCell>
                        <TableCell>
                          <Typography variant="body2" fontWeight="bold">
                            {player.TSP || "0"}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </AnimatePresence>
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={filteredData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{ borderTop: 1, borderColor: "divider" }}
            />
          </Paper>
        </motion.div>

        {/* Footer */}
        <Box sx={{ textAlign: "center", mt: 6, color: "white" }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            MBL Player Statistics Dashboard • {filteredData.length} players
            displayed
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MBLStatsPage;
