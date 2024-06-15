import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import logo from '../logo.svg';
import '../App.css';

function NavBar() {
    return <div className="AppBar">
        <AppBar position="sticky">
            <Toolbar>
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
                    Developer Portfolio 
                </Typography>
                <Button color="inherit">About Me</Button>
                <Button color="inherit">Skills</Button>
                <Button color="inherit">Projects</Button>
                <Button color="inherit">Contacts</Button>
            </Toolbar>
        </AppBar>
    </div>
}
export default NavBar