

import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { HomeIcon } from "./HomeIcon";
import { TourIcon } from "./TourIcon";


const useStyles = makeStyles(theme =>
    createStyles({
        "root": {
            "& > svg": {
                "margin": theme.spacing(2)
            }
        }
    })
);


export function IconsPreview() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <HomeIcon />
                <HomeIcon color="primary" />
                <HomeIcon color="secondary" />
                <HomeIcon color="action" />
                <HomeIcon color="disabled" />
                <HomeIcon style={{ "color": green[500] }} />
            </div>
            <div className={classes.root}>
                <TourIcon />
                <TourIcon color="primary" />
                <TourIcon color="secondary" />
                <TourIcon color="action" />
                <TourIcon color="disabled" />
                <TourIcon style={{ "color": green[500] }} />
            </div>
        </>
    );
}