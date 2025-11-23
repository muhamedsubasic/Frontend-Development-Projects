import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function PostsPage() {
    return (
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "90vh" }}>
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper elevation={10} style={{ padding: 16 }}>
                        <Typography variant="h5" gutterBottom>
                            Post 1
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex beatae ad exercitationem ducimus maxime eligendi ab, hic quam laborum error commodi enim repellendus voluptates ipsam, necessitatibus rerum, quae amet. Dolore.
                            Earum aliquid pariatur saepe neque ut quos distinctio doloremque quam quasi vero. Ullam dolor aspernatur possimus ea nemo. Deleniti nisi cum commodi consequuntur maiores numquam dolor eum impedit praesentium nulla!
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper elevation={10} style={{ padding: 16 }}>
                        <Typography variant="h5" gutterBottom>
                            Post 2
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos soluta nesciunt debitis veritatis neque dignissimos aliquam at aspernatur facere! Quis impedit velit officiis officia similique aspernatur modi asperiores,
                            cumque id?
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper elevation={10} style={{ padding: 16 }}>
                        <Typography variant="h5" gutterBottom>
                            Post 3
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, aspernatur sint vitae iusto praesentium vero culpa ullam nobis nostrum quibusdam eveniet itaque ipsum, distinctio molestias saepe corrupti ab recusandae
                            aliquam? Ipsam a cupiditate non adipisci. Adipisci, minus cupiditate? Tenetur sed aspernatur ratione reiciendis, laborum facere quo non provident, atque, consequatur qui magnam! Ipsam quas impedit adipisci quam iure sunt
                            officia. Dignissimos tempora aliquid fugiat a vel accusamus sed, iure nobis, sint magnam commodi at in quibusdam! Excepturi et dolorem non, sequi, nihil ea consequuntur, odit exercitationem quae veritatis hic fugit?
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper elevation={10} style={{ padding: 16 }}>
                        <Typography variant="h5" gutterBottom>
                            Post 4
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, nihil a? Necessitatibus sed atque ipsum sunt vero. Ad suscipit et consectetur quis est natus accusantium impedit, optio voluptatem autem debitis!
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
