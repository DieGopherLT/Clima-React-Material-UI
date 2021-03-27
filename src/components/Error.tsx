import React from "react";
import { styled } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

export interface ErrorProps{
    mensaje: string;
}

const Error: React.FunctionComponent<ErrorProps> = ({mensaje}) => (
    <MensajeError>{mensaje}</MensajeError>
)

const MensajeError = styled(Typography)({
    display: 'block',
    padding: '1rem 0',
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '10px'
});

export default Error;