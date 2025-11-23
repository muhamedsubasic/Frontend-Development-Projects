import React, { useState } from "react";
import { Grid, TextField, FormControl, Button, FormControlLabel, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "0 20px",
    },
    formContainer: {
        position: "relative",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "400px",
        width: "100%",
        marginBottom: "50px",
    },
    formHeader: {
        position: "absolute",
        top: "-15px",
        left: "20px",
        padding: "0 10px",
        fontWeight: "bold",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    line: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "1px",
        backgroundColor: "#ccc",
        zIndex: -1,
    },
    alert: {
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 100,
    },
};

export default function Contact() {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        acceptTOS: false,
    });

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        acceptTOS: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: false,
        });
    };

    const validateForm = () => {
        const newErrors = {
            firstName: formValues.firstName.trim() === "",
            lastName: formValues.lastName.trim() === "",
            email: formValues.email.trim() === "",
            acceptTOS: !formValues.acceptTOS,
        };
        setErrors(newErrors);
        return !Object.values(newErrors).includes(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted", formValues);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <div style={styles.formHeader}>Contact me</div>
                <div style={styles.line} />
                <form onSubmit={handleSubmit}>
                    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item>
                            <FormControl fullWidth variant="outlined">
                                <TextField
                                    id="outlined-basic"
                                    label="FirstName"
                                    variant="outlined"
                                    name="firstName"
                                    value={formValues.firstName}
                                    onChange={handleInputChange}
                                    error={errors.firstName}
                                    helperText={errors.firstName ? "First name is required" : ""}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth variant="outlined">
                                <TextField
                                    id="outlined-basic"
                                    label="LastName"
                                    variant="outlined"
                                    name="lastName"
                                    value={formValues.lastName}
                                    onChange={handleInputChange}
                                    error={errors.lastName}
                                    helperText={errors.lastName ? "Last name is required" : ""}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth variant="outlined">
                                <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={formValues.email} onChange={handleInputChange} error={errors.email} helperText={errors.email ? "Email is required" : ""} />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth variant="outlined">
                                <TextField id="outlined-basic" label="Message" variant="outlined" name="message" value={formValues.message} onChange={handleInputChange} multiline fullWidth />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControlLabel control={<Switch />} label="Accept Terms of Service" checked={formValues.acceptTOS} onChange={(e) => setFormValues({ ...formValues, acceptTOS: e.target.checked })} error={errors.acceptTOS} />
                            {errors.acceptTOS && <Typography color="error">Please accept the Terms of Service</Typography>}
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {submitted && (
                <div style={styles.alert}>
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        Your form has been submitted successfully.
                    </Alert>
                </div>
            )}
        </div>
    );
}
