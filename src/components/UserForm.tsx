import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    address: "",
    email: "",
    phone: "",
    created: "", // Add a 'created' field
  });
  const [isFormDirty, setIsFormDirty] = useState(false);

  useEffect(() => {
    // Autogenerate user ID when form loads
    const userId = "USER-" + Math.floor(1000 + Math.random() * 9000);
    setFormData((prev) => ({ ...prev, userId }));

    // Warn user before closing if there are unsaved changes
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isFormDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes!";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isFormDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsFormDirty(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Set the 'created' field to the current date and time
    const created = new Date().toLocaleString();
    const updatedFormData = { ...formData, created };

    // Save the updated form data to localStorage
    localStorage.setItem("userData", JSON.stringify(updatedFormData));
    setIsFormDirty(false);
    alert("User data saved!");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>User Data Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="User ID" name="userId" value={formData.userId} disabled sx={{ mb: 2 }} />
        <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required sx={{ mb: 2 }} />
        <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} required sx={{ mb: 2 }} />
        <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required sx={{ mb: 2 }} />
        <TextField fullWidth label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required sx={{ mb: 2 }} />
        <Button variant="contained" type="submit" fullWidth>
          Save
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;