import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function About() {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "90vh" }} spacing={5}>
            <Grid item>
                <Paper elevation={10} style={{ width: 256, padding: 16 }}>
                    <h2>Title 1</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quibusdam illo, aut reiciendis quae maiores eos quisquam nam ipsa debitis. Quam vero enim iusto rerum. Dignissimos reprehenderit perferendis recusandae porro!
                        Error quam quod incidunt neque obcaecati consectetur libero accusantium accusamus. Tenetur rem non tempore at consectetur velit, eius voluptates omnis. Labore reprehenderit dolorum facilis illum deserunt blanditiis error eos
                        vitae?
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={10} style={{ width: 256, padding: 16 }}>
                    <h2>Title 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium maxime laborum magnam cupiditate fuga alias, quaerat nisi nesciunt, modi nihil voluptatibus. Deleniti iure eveniet provident magni dolor necessitatibus, delectus enim.
                    Nisi maiores nihil aliquid quia cumque amet quam vitae architecto rem ab blanditiis iure cupiditate, excepturi nulla ad totam voluptatem. Delectus commodi aliquid laudantium, nobis maxime voluptates? Soluta, enim ullam.
                    Veritatis laudantium velit esse amet pariatur. Natus voluptatem nostrum qui corrupti sint, vitae aut dolore! Recusandae culpa possimus reprehenderit consequuntur quae impedit eos doloribus fugit. Quibusdam non autem quo est.</p>
                </Paper>
            </Grid>
        </Grid>
    );
}
