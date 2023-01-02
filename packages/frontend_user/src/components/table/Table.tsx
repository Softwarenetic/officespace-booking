import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import './Table.scss'


  
  function createData(
    name: string,
    hours: string,
    editing: string,
    
  ) {
    return { name, hours, editing };
  }
  
  const rows = [
    createData('Name', '09:00-10:15', 'you can edit this'),
    createData('Name', '09:00-10:15', 'you can edit this'),
    createData('Name', '09:00-10:15', 'you can edit this'),
    createData('Name', '09:00-10:15', 'you can edit this'),
    createData('Name', '09:00-10:15', 'you can edit this'),
  ];

 function BasicTable() {
    
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '700px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Person</b></TableCell>
            <TableCell><b>Hours</b></TableCell>
            <TableCell><b>Editing</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.hours}</TableCell>
              <TableCell >{row.editing}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant='contained' size='small' className='book_btn'>Book meeting room</Button>
    </TableContainer>
  );
}
export default BasicTable