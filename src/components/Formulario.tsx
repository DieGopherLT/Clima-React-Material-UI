import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, TextField, Theme} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DatosClima } from "../interfaces/DatosClima";
import Error from "./Error";

export interface FormularioProps{
    datos: DatosClima;
    setDatos: CallableFunction;
    setNecesitaConsultar: CallableFunction;
}

const Formulario: React.FunctionComponent<FormularioProps> = ({datos, setDatos, setNecesitaConsultar}) => {

    const styles = useStyles();

    const [error, setError] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDatos({...datos, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!datos.ciudad || !datos.pais){
            setError(true);
            return;
        }
        setError(false);
        setNecesitaConsultar(true);
    }

    return (
        <form className={styles.fondo} onSubmit={handleSubmit}>
            {error ? <Error mensaje='Ambos campos son obligatorios' /> : null}
            <TextField
                label='Ingresa tu ciudad'
                variant={"standard"}
                className={styles.input}
                onChange={handleChange}
                name="ciudad"
            />
            <TextField
                variant={"standard"}
                select
                SelectProps={{native: true}}
                className={styles.input}
                onChange={handleChange}
                name="pais"
            >
                <option value="">-- Selecciona tu pais --</option>
                <option value="MX">México</option>
                <option value="US">EEUU</option>
                <option value="CA">Canáda</option>
                <option value="CO">Colombia</option>
                <option value="AR">Argentina</option>
                <option value="ES">España</option>
                <option value="SV">El Salvador</option>
                <option value="PE">Perú</option>
                <option value="VE">Venezuela</option>
                <option value="BO">Bolivia</option>
                <option value="CL">Chile</option>
            </TextField>
            <Button
                variant={"contained"}
                type={"submit"}
                className={styles.submitButton}
            >
                Buscar Clima
            </Button>
        </form>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    fondo: {
        backgroundColor: 'white',
        padding: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10
    },
    input: {
        margin: theme.spacing(2, 0)
    },
    submitButton: {
        backgroundColor: '#ebc20b',
        '&:hover' : {
            backgroundColor: '#bd9e16'
        }
    }
}));

export default Formulario;