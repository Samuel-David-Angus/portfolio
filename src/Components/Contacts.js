import { Grid } from "@mui/material";

function Contacts() {
    return <main>
        <h2 style={{padding:"5%"}}>Contact me through:</h2>
        <Grid container spacing={2} sx={{ width: "50%", margin: "0 auto", justifyContent: "center", alignItems: "center", padding:"5%" }} >
            <Grid item xs={6} sx={{textAlign: "left"}}>
                <h3>Email :</h3>
            </Grid>
            <Grid item xs={6} sx={{textAlign: "left"}}>
                <ul style={{margin: 0, padding:0}}>
                    <li>angus.samuel.dc@gmail.com</li>
                    <li>samueldavid.angus@cit.edu</li>
                </ul>
            </Grid>
            <Grid item xs={6} sx={{textAlign: "left"}}>
                <h3>Contact No. :</h3>
            </Grid>
            <Grid item xs={6} sx={{textAlign: "left", padding:0}}>
                09673850529
            </Grid>
        </Grid>
    </main>
}
export default Contacts;