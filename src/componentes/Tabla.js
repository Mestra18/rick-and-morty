import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment'



const Tabla = ({ personajes }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#819397',
      color: theme.palette.common.white,      
      textAlign: 'center',
      fontWeight: 600,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
      textAlign: 'center',
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table className="tabla" sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Vivo</StyledTableCell>
            <StyledTableCell>Especie</StyledTableCell>
            <StyledTableCell>Genero</StyledTableCell>
            <StyledTableCell>Origen</StyledTableCell>
            <StyledTableCell>Locación</StyledTableCell>
            <StyledTableCell>Capítulos</StyledTableCell>
            <StyledTableCell>Fecha</StyledTableCell>
            <StyledTableCell>Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {personajes.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.status === 'Alive' ? <img src='/imagenes/Icono-vivo.png' alt="Icono Ok"/>:<img src='/imagenes/Icono-muerto.png' alt="Icono error"/>}</StyledTableCell>
              <StyledTableCell align="center">{row.species}</StyledTableCell>
              <StyledTableCell align="center">{row.gender}</StyledTableCell>
              <StyledTableCell align="center">{row.origin.name}</StyledTableCell>
              <StyledTableCell align="center">{row.location.name}</StyledTableCell>
              <StyledTableCell align="center">{row.episode.map((episodio) => (
                <p>{episodio}</p>
              ))}</StyledTableCell>
              <StyledTableCell align="center">{moment(row.created).format('MM-DD-YYYY')}</StyledTableCell>
              <StyledTableCell align="center"><img className="personaje__img" src={row.image} alt=""/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Tabla
