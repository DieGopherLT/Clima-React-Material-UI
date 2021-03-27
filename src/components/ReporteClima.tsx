import React from 'react';

import {WeatherResponse} from '../interfaces/ClimaRespuesta';
import {Box, Theme, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

interface ReporteClimaProps {
    datosClima: WeatherResponse;
}

const ReporteClima: React.FunctionComponent<ReporteClimaProps> = ({datosClima}) => {

    const styles = useStyles();
    const { main, name } = datosClima;
    if(!main || !name){
        return null;
    }

    const kelvinToCelsius = (kelvinTemp: number) => Number(kelvinTemp - 273.15).toFixed(2);

    return (
        <Box className={styles.container}>
            <Typography variant={"h6"} className={styles.center}>Clima en: {name}</Typography>
            <Box className={styles.dataContainer}>
                <Typography className={styles.center}>Temperatura: {kelvinToCelsius(main.temp)}<span>&#x2103;</span></Typography>
                <Typography className={styles.center}>Sensación térmica: {kelvinToCelsius(main.feels_like)} <span>&#x2103;</span></Typography>
                <Typography className={styles.center}>Temperatura máxima: {kelvinToCelsius(main.temp_max)} <span>&#x2103;</span></Typography>
                <Typography className={styles.center}>Temperatura mínima: {kelvinToCelsius(main.temp_min)} <span>&#x2103;</span></Typography>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        backgroundColor: 'white',
        maxWidth: '80%',
        margin: '0 auto',
        padding: theme.spacing(3),
        borderRadius: '10px'
    },
    center: {
        textAlign: 'center'
    },
    dataContainer: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        border: '1px solid black',
        borderRadius: '10px'
    }
}))

export default ReporteClima;