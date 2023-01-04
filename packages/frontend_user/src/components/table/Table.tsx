import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './Table.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function createData(name: string, hours: string, editing: string) {
  return { name, hours, editing };
}

const rows = [
  createData('Name', '09:00-10:15', 'you can edit this'),
  createData('Name', '09:00-10:15', 'you can edit this'),
  createData('Name', '09:00-10:15', 'you can edit this'),
];

const useStyles = makeStyles({
  tableRow: {
    height: 30,
  },
  tableCell: {},
});
function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Typography variant="subtitle1" display="block" sx={{ mx: 2 }} className="font">
        Meeting room #1
      </Typography>
      <KeyboardArrowLeftIcon color="secondary" sx={{ fontSize: 25, mx: 2 }} />
      <KeyboardArrowRightIcon color="secondary" sx={{ fontSize: 25 }} />
      <Table sx={{ width: '750px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>
              <b>Person</b>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <b>Hours</b>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <b>Editing</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className={classes.tableRow}
            >
              <TableCell className={classes.tableCell} sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountCircleIcon color="disabled" sx={{ fontSize: 25, mr: '5px' }} />
                <span>{row.name}</span>
              </TableCell>
              <TableCell className={classes.tableCell}>{row.hours}</TableCell>
              <TableCell className={classes.tableCell}>{row.editing}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box className="book_btn">
        <Button variant="contained" size="small">
          <span className="font">Book meeting</span>
        </Button>
      </Box>
    </TableContainer>
  );
}
export default BasicTable;
