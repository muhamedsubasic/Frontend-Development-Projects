import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

function Home() {
    return (
        <Container sx={{ justifyContent: "center", textAlign: "center" }}>
            <Typography variant="h1">Welcome to My React Project</Typography>
            <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
                This is a simple homepage of a React project using Material Ui. 
            </Typography>
        </Container>
    );
}

export default Home;
