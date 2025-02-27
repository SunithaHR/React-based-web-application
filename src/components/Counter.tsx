import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Box, Typography } from "@mui/material";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Function to determine background color based on count
  const getColor = (value: number): string => {
    if (value === 0) return "#ffffff"; // White
    if (value <= 30) return "#d32f2f"; // Red
    if (value <= 60) return "#1976d2"; // Blue
    if (value <= 90) return "#ff9800"; // Orange
    return "#2e7d32"; // Green
  };

  // Background animation
  const backgroundStyle = useSpring({
    backgroundColor: getColor(count),
    config: { tension: 120, friction: 14, mass: 1 },
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "200px",
        borderRadius: "8px",
        overflow: "hidden",
        textAlign: "center",
        boxShadow: 3,
        border: "1px solid #ccc",
        my: 3,
      }}
    >
      {/* Animated Background */}
      <animated.div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
          ...backgroundStyle, 
        }}
      />

      {/* Counter & Buttons */}
      <Box sx={{ position: "relative", zIndex: 2, padding: 2 }}>
        <Typography variant="h4">Counter: {count}</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
          <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
            Increment
          </Button>
          <Button variant="contained" color="error" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button variant="contained" color="secondary" onClick={() => setCount(Math.max(count - 1, 0))}>
            Decrement
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
