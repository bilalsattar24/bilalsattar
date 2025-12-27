"use client";

import { useState, useEffect } from "react";
import { triviaQuestions, Question } from "./questions";
import { motion, AnimatePresence } from "framer-motion";

interface LeaderboardEntry {
  name: string;
  score: number;
  timestamp: string;
}

type GameState = "welcome" | "playing" | "results" | "leaderboard";

export default function RayanTrivia() {
  const [gameState, setGameState] = useState<GameState>("welcome");
  const [playerName, setPlayerName] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [showFunFact, setShowFunFact] = useState(false);

  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const shuffleArray = <T,>(items: T[]): T[] => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const buildShuffledQuestions = (): Question[] => {
    const shuffled = shuffleArray(triviaQuestions).map((q) => {
      const correctOption = q.options[q.correctAnswer];
      const options = shuffleArray(q.options);
      const correctAnswer = options.findIndex((opt) => opt === correctOption);
      return {
        ...q,
        options,
        correctAnswer,
      };
    });
    return shuffled;
  };

  // Calculate points based on time taken (0-10 seconds)
  const calculatePoints = (timeInSeconds: number): number => {
    if (timeInSeconds >= 10) return 50; // Minimum points after 10 seconds
    // Linear scale: 100 points at 0 seconds, down to 50 points at 10 seconds
    const points = Math.max(50, Math.round(100 - timeInSeconds * 5));
    return points;
  };

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch("/api/leaderboard");
      const data = await res.json();
      setLeaderboard(data);
    } catch (error) {
      console.error("Failed to fetch leaderboard:", error);
    }
  };

  const saveScore = async () => {
    try {
      await fetch("/api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: playerName, score }),
      });
      await fetchLeaderboard();
    } catch (error) {
      console.error("Failed to save score:", error);
    }
  };

  const startGame = () => {
    if (playerName.trim()) {
      setShuffledQuestions(buildShuffledQuestions());
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowFunFact(false);
      setGameState("playing");
      setQuestionStartTime(Date.now());
    }
  };

  const handleAnswer = (answerIndex: number) => {
    if (!currentQuestion) return;
    if (selectedAnswer !== null) return; // Already answered

    const timeElapsed = (Date.now() - questionStartTime) / 1000;
    const correct = answerIndex === currentQuestion.correctAnswer;

    setSelectedAnswer(answerIndex);
    setIsCorrect(correct);

    if (correct) {
      const points = calculatePoints(timeElapsed);
      setScore((prev) => prev + points);
      setShowFunFact(true);
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setShowFunFact(false);
        setQuestionStartTime(Date.now());
      } else {
        // Game finished
        setGameState("results");
        saveScore();
      }
    }, 2500);
  };

  const resetGame = () => {
    setGameState("welcome");
    setPlayerName("");
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowFunFact(false);
    setShuffledQuestions([]);
  };

  const viewLeaderboard = async () => {
    await fetchLeaderboard();
    setGameState("leaderboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {/* Welcome Screen */}
          {gameState === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-center mb-6">
                <div className="text-6xl mb-4">🎂🎈🎉</div>
                <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  Rayan&apos;s Birthday
                </h1>
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600 mb-4">
                  Trivia Challenge!
                </h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-bold text-purple-600">
                  Thank you for joining the party! 🥳
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-6">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300">
                  <h3 className="text-xl font-black text-purple-800 mb-3 text-center">
                    📚 What You&apos;ll Be Quizzed On:
                  </h3>
                  <p className="text-gray-700 text-base text-center font-medium leading-relaxed">
                    Test your knowledge about Rayan, his favorite things, and
                    fun kindergarten facts! From Paw Patrol to shapes, colors,
                    and more!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 border-2 border-orange-300">
                  <h3 className="text-xl font-black text-orange-800 mb-3 text-center">
                    🎮 Game Rules:
                  </h3>
                  <ul className="text-gray-700 text-base space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">⚡</span>
                      <span>
                        <strong>Speed Matters:</strong> Answer quickly to earn
                        more points! (50-100 points per question)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">🎯</span>
                      <span>
                        <strong>One Shot Only:</strong> You only get ONE attempt
                        per question, so choose carefully!
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">🏆</span>
                      <span>
                        <strong>Beat the Best:</strong> Your final score goes on
                        the leaderboard!
                      </span>
                    </li>
                  </ul>
                </div>

                <input
                  type="text"
                  placeholder="Enter your name..."
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && startGame()}
                  className="w-full px-6 py-4 text-lg text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-2xl border-4 border-purple-300 focus:border-purple-500 focus:outline-none transition-colors"
                  maxLength={30}
                />

                <button
                  onClick={startGame}
                  disabled={!playerName.trim()}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl py-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                  Start Game! 🚀
                </button>

                <button
                  onClick={viewLeaderboard}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-xl py-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  View Leaderboard 🏅
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Playing Screen */}
          {gameState === "playing" && currentQuestion && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-gray-600">
                    Question {currentQuestionIndex + 1} of{" "}
                    {shuffledQuestions.length}
                  </span>
                  <span className="text-sm font-bold text-purple-600">
                    Score: {score} 🌟
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${
                        ((currentQuestionIndex + 1) /
                          shuffledQuestions.length) *
                        100
                      }%`,
                    }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
                  {currentQuestion.question}
                </h3>

                {/* Answer Options */}
                <div className="space-y-4">
                  {currentQuestion.options.map((option, index) => {
                    let buttonClass =
                      "w-full p-5 text-lg font-bold rounded-2xl border-4 transition-all transform ";

                    if (selectedAnswer === null) {
                      buttonClass +=
                        "border-purple-300 hover:border-purple-500 hover:scale-105 bg-white hover:bg-purple-50 text-gray-800";
                    } else if (index === currentQuestion.correctAnswer) {
                      buttonClass +=
                        "border-green-500 bg-green-100 text-green-800 scale-105";
                    } else if (index === selectedAnswer) {
                      buttonClass += "border-red-500 bg-red-100 text-red-800";
                    } else {
                      buttonClass +=
                        "border-gray-300 bg-gray-100 text-gray-500 opacity-50";
                    }

                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                        className={buttonClass}
                        whileHover={
                          selectedAnswer === null ? { scale: 1.05 } : {}
                        }
                        whileTap={
                          selectedAnswer === null ? { scale: 0.95 } : {}
                        }>
                        <span className="flex items-center justify-between">
                          <span>{option}</span>
                          {selectedAnswer !== null &&
                            index === currentQuestion.correctAnswer && (
                              <span className="text-2xl">✓</span>
                            )}
                          {selectedAnswer === index &&
                            index !== currentQuestion.correctAnswer && (
                              <span className="text-2xl">✗</span>
                            )}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Fun Fact */}
              <AnimatePresence>
                {showFunFact && currentQuestion.funFact && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-4 border-2 border-green-300">
                    <p className="text-green-800 font-medium text-center">
                      💡 {currentQuestion.funFact}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Results Screen */}
          {gameState === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}>
                <div className="text-6xl mb-6">🎊</div>
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  Amazing Job!
                </h2>
                <p className="text-2xl text-gray-700 mb-2">{playerName}</p>
                <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-5xl font-black px-8 py-4 rounded-2xl mb-8">
                  {score} Points! 🌟
                </div>
              </motion.div>

              <div className="space-y-4">
                <button
                  onClick={viewLeaderboard}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl py-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  View Leaderboard 🏅
                </button>
                <button
                  onClick={resetGame}
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold text-xl py-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Play Again 🔄
                </button>
              </div>
            </motion.div>
          )}

          {/* Leaderboard Screen */}
          {gameState === "leaderboard" && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8 text-center">
                🏆 Leaderboard
              </h2>

              <div className="space-y-3 mb-8 max-h-96 overflow-y-auto">
                {leaderboard.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    No scores yet. Be the first to play!
                  </p>
                ) : (
                  leaderboard.map((entry, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center justify-between p-4 rounded-2xl ${
                        index === 0
                          ? "bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-400"
                          : index === 1
                          ? "bg-gradient-to-r from-gray-200 to-gray-300 border-4 border-gray-400"
                          : index === 2
                          ? "bg-gradient-to-r from-orange-200 to-orange-300 border-4 border-orange-400"
                          : "bg-gray-100 border-2 border-gray-300"
                      }`}>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-black w-8">
                          {index === 0
                            ? "🥇"
                            : index === 1
                            ? "🥈"
                            : index === 2
                            ? "🥉"
                            : `${index + 1}.`}
                        </span>
                        <span className="font-bold text-lg">{entry.name}</span>
                      </div>
                      <span className="text-xl font-black text-purple-600">
                        {entry.score} 🌟
                      </span>
                    </motion.div>
                  ))
                )}
              </div>

              <button
                onClick={resetGame}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl py-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                Play Game! 🎮
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
