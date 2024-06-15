import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import logo from '../logo.svg';
import '../App.css';
import { Link } from "react-router-dom";

function NavBar() {
    return <div className="AppBar">
        <AppBar position="sticky">
            <Toolbar>
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
                    Developer Portfolio 
                </Typography>
                <Button component={Link} to={`/AboutMe`} color="inherit">About Me</Button>
                <Button component={Link} to={`/Skills`} color="inherit">Skills</Button>
                <Button component={Link} to={`/Projects`} color="inherit">Projects</Button>
                <Button component={Link} to={`/Contacts`} color="inherit">Contacts</Button>
            </Toolbar>
        </AppBar>
    </div>
}
export default NavBar