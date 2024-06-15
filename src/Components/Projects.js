import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Link, Typography } from "@mui/material";
import { useState } from "react";

function Projects() {
    const [open, setOpen] = useState(false);
    const [selectedProj, setSelectedProj] = useState(null);
    const styles = {
        maxWidth: 345,
        height: 300,
        display: "inline-block",
        margin: "10px",
    }
    const projects = [
        {
            name: "WattWiz",
            shortDesc: "An app made in android studio that calculated the electric bill based on appliances wattage rating and operating time",
            longDesc: "WattWiz is a mobile application developed using Android Studio. It helps users calculate their electricity bills by considering the wattage rating and operating time of their appliances. It also featured links to videos on educating about electricity and had a feature to export the statistics to an excel sheet.",
            image: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            alt: "WattWiz",
            projectImg: "../wattwizz.png",
            link: "https://example.com/wattwiz"
        },
        {
            name: "FishCab",
            shortDesc: "An app that aimed to aid multi cab fish vendors in reaching as many customers as possible made using Flutter and Firebase.",
            longDesc: "FishCab is a mobile application built with Flutter and Firebase. It serves as a platform for multi-cab fish vendors to reach a wider customer base efficiently. The idea of the app came from multicab fish vendors who go around with a multicab to sell fish but sometimes can't reach all customers since customers dont know when they arrive. The fish customers get is also random so the app interfaces between the seller and the buyer to solve this problem. Below is the mobile app. <a href= https://github.com/Samuel-David-Angus/fishcab_system_admin.git target=_blank>Here is the admin web app</a>",
            image: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            alt: "FishCab",
            projectImg: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            link: "https://github.com/Nexus-Code89/FishCab_Buyer.git"
        },
        {
            name: "Password Strength Classifier",
            shortDesc: "Used AI with the Keras library to classify password strengths based on calculated properties.",
            longDesc: "Password Strength Classifier is a project that uses AI and the Keras library to classify the strength of passwords based on various calculated properties, including entropy, password length etc. A model was trained on password dataset from Kaggle and saved. It was then hosted in streamlit",
            image: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            alt: "Password Strength Classifier",
            projectImg: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            link: "https://github.com/Samuel-David-Angus/PasswordClassifierML.git"
        },
        {
            name: "AdaptiveEdu (Ongoing development)",
            shortDesc: "Web application using Flutter and Firebase with MVVM architecture with the aim of allowing adaptive learning of students.",
            longDesc: "AdaptiveEdu is a web application developed using Flutter and Firebase, utilizing the MVVM architecture. It aims to facilitate adaptive learning for students. It is based on a research paper which maps learning concepts onto a concept map that traces the prerequisites of a lesson. An algorithm is then used to determine the weak points of a learner after an assessment. An AI determines the learning style and the system gives appropriate feedback.",
            image: "https://media.istockphoto.com/id/1485939448/photo/data-processing-digital-technology-software-development-concept-computer-programmer-software.jpg?s=612x612&w=0&k=20&c=AMaqBgU79i_uPbJmGzoO9b_RoLwYpGwCaJsnTAsNPaY=",
            alt: "AdaptiveEdu",
            projectImg: "https://media.istockphoto.com/id/1485939448/photo/data-processing-digital-technology-software-development-concept-computer-programmer-software.jpg?s=612x612&w=0&k=20&c=AMaqBgU79i_uPbJmGzoO9b_RoLwYpGwCaJsnTAsNPaY=",
            link: "https://github.com/Samuel-David-Angus/team_adaptive.git"
        },
        {
            name: "Metro Events",
            shortDesc: "Web application made using React and JSON server that allows management of events.",
            longDesc: "Metro Events is a web application developed with React and JSON server. It enables users to manage and organize events. An admin accepts or denies requests for a user to be an organizer. Organizers create and manage events while users join events.",
            image: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            alt: "Metro Events",
            projectImg: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            link: "https://github.com/Samuel-David-Angus/Metro-Events.git"
        },
        {
            name: "Guess The Flag (Backend)",
            shortDesc: "Web application made using React and SpringBoot that allows user to play a game of guess the flag",
            longDesc: "Guess The Flag is a web application developed with React and SpringBoot. It provides a game where users can guess flags from around the world. I developed the backend using SpringBoot and XAMPP database. It is accessed through API endpoints which is called by axios in the frontend. The frontend was done by other group members",
            image: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            alt: "Guess The Flag (Backend)",
            projectImg: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            link: "https://github.com/Samuel-David-Angus/GuessTheFlag.git"
        },
        {
            name: "CODE interpreter",
            shortDesc: "Interpreter made using Java to fit the language specifications given by professor.",
            longDesc: "CODE interpreter is an interpreter developed in Java, designed to meet specific language specifications provided by our professor called CODE.",
            image: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            alt: "Interpreter",
            projectImg: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            link: "https://github.com/Samuel-David-Angus/CODE_grp14.git"
        },
        {
            name: "Cupid Charm Purge",
            shortDesc: "Game made using the Godot game engine",
            longDesc: "Cupid Charm Purge is a game developed using the Godot game engine. It involves gameplay mechanics similar to the genre vampire survivors like. Which involves killing waves of enemies and getting upgrades. It was made for a game jam centered around the theme charm. In this project I implemented the decorator design pattern to handle player upgrades. You can play <a href = https://nagusnotamagus.itch.io/cupid target=_blank>here</a>.",
            image: "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
            alt: "Cupid Charm Purge",
            projectImg: "https://img.itch.zone/aW1nLzE0OTM4MjkxLnBuZw==/315x250%23c/cXv46T.png",
            link: "https://nagusnotamagus.itch.io/cupid"
        }
        
    ]
    const handleClickOpen = (proj) => {
        setSelectedProj(proj);
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return <main>
        <h2>Projects</h2>
        <p>Click a project to learn more</p>
        <div className="Projects">
            {projects.map(
                (proj) => <Card sx={styles}>
                <CardActionArea onClick={(e) => handleClickOpen(proj)}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={proj.image}
                        alt={proj.alt}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {proj.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {proj.shortDesc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            )}
        </div>
        <Dialog
        open={open}
        onClose={handleClose}
        fullWidth="lg"
        maxWidth="lg"
        >
            <DialogTitle>{selectedProj && selectedProj.name}</DialogTitle>
            <DialogContent
            sx={{height: "40%"}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}><img src={selectedProj && selectedProj.projectImg} style={{ maxWidth: '100%', height: 'auto' }}/></Grid>
                    <Grid item xs={8}>{selectedProj && selectedProj.longDesc ? (
                                <div dangerouslySetInnerHTML={{ __html: selectedProj.longDesc }} />
                            ) : (
                                <Typography variant="body1">
                                    No description available for this project.
                                </Typography>
                            )}
                            <br/>
                            <p>Source code here: <Link href={selectedProj && selectedProj.link}>{selectedProj && selectedProj.link}</Link></p>
                            </Grid>
                </Grid>
                
                
            </DialogContent>
        </Dialog>
    </main>
}

export default Projects;