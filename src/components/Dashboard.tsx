import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const DashboardPage: React.FC = () => {
  // Load user data from localStorage
  const storedUser = localStorage.getItem("userData");
  const user = storedUser ? JSON.parse(storedUser) : {};

  const [counter, setCounter] = useState(1);
  const [profileCompletion, setProfileCompletion] = useState(100);
  const [lastUpdate, setLastUpdate] = useState(
    localStorage.getItem("lastUpdate") || new Date().toLocaleString()
  );

  // Update lastUpdate whenever user data changes
  useEffect(() => {
    localStorage.setItem("lastUpdate", new Date().toLocaleString());
    setLastUpdate(new Date().toLocaleString());
  }, [user]);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <CssBaseline />
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Dashboard
      </Typography>
      <Typography variant="subtitle1">
        Welcome, {user.name || "User"}
      </Typography>

      {/* Dashboard Stats Cards */}
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Counter Value</Typography>
              <Typography variant="h4">{counter}</Typography>
              <Typography variant="caption">Lifetime clicks</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Profile</Typography>
              <Typography variant="h4">{profileCompletion}%</Typography>
              <Typography variant="caption">Completion rate</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Last Update</Typography>
              <Typography variant="h5">{lastUpdate}</Typography>
              <Typography variant="caption">Profile last modified</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* User Profile Section */}
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            User Profile
          </Typography>
          <Typography variant="subtitle2">
            Your personal information and statistics
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography>Name</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                {user.name || "Not available"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>User ID</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                {user.userId || "Not available"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Email</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                {user.email || "Not available"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Created</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                {user.created || "Not available"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Phone</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                {user.phone || "Not available"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Last Updated</Typography>
              <Typography sx={{ fontWeight: "bold" }}>{lastUpdate}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Address</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                {user.address || "Not available"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Profile Completeness</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                {profileCompletion}%
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardPage;