import React, {useEffect, useState} from 'react';
import {Box, Container, Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import { DatosClima } from "./interfaces/DatosClima";
import { WeatherResponse } from './interfaces/ClimaRespuesta';

import Formulario from './components/Formulario';
import Header from "./components/Header";
import ReporteClima from "./components/ReporteClima";
import Error from "./components/Error";

function App() {

    const [datos, setDatos] = useState<DatosClima>({
        ciudad: '',
        pais: ''
    });
    const [necesitaConsultar, setNecesitaConsultar] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [datosClima, setDatosClima] = useState<WeatherResponse>({});

    useEffect(() => {
        if (necesitaConsultar) {
            const consultaApi = () => {
                const appid: string = '005e28441f3504e6bafc15223523c675';
                const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${datos.ciudad},${datos.pais}&appid=${appid}`;

                fetch(url)
                    .then(respuesta => respuesta.json())
                    .then((resultado: WeatherResponse) => {
                       setDatosClima(resultado);
                       if(resultado.cod === '404')
                            setError(true);
                       else
                           setError(false);
                       setNecesitaConsultar(false);
                    });
            }
            consultaApi();
        }
    }, [necesitaConsultar, datos.ciudad, datos.pais]);

    return (
        <ContenedorForm>
            <Header titulo='Clima React App'/>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Formulario
                            datos={datos}
                            setDatos={setDatos}
                            setNecesitaConsultar={setNecesitaConsultar}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {error ? <Error mensaje='No hubo resultados' /> : <ReporteClima datosClima={datosClima}/>}
                    </Grid>
                </Grid>
            </Container>
        </ContenedorForm>
    );
}

const ContenedorForm = styled(Box)({
    backgroundColor: '#03a9f4'
})

export default App;
