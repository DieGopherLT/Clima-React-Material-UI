import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

export interface HeaderProps{
    titulo: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({titulo}) => {
    const styles = useStyles();

    return(
        <header className={styles.heading}>
            <h1>{titulo}</h1>
        </header>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    heading: {
        padding: theme.spacing(3, 0),
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#1c5670',
        marginBottom: theme.spacing(2)
    }
}));

export default Header;

