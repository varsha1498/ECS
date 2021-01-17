import React ,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';



const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});



export default function BookList(props) {
  const classes = useStyles();
  const [rows,setRows]=useState([])
  const [filtersearch,setFiltersearch]=useState([])
  useEffect(()=>{
    axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json")
    .then((res)=>{
      console.log(res)
      setRows(res.data)
    }).catch((err)=>{
      console.log(err)
    })

    // setFiltersearch(
    //     rows.filter(row=>{
    //       return row.title.includes(props.val)
    //     })
    //   )
  
  },[rows])
  
  return (
      <Paper>
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sortable = "true">Book ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Authors</TableCell>
            <TableCell align="center">Average_rating</TableCell>
            <TableCell align="center">ISBN</TableCell>
            <TableCell align="center">Language_Code</TableCell>
            <TableCell align="center">Ratings_Count</TableCell>
            <TableCell align="center">Price</TableCell>
           
           
          </TableRow>
        </TableHead>
        <TableBody>
          {filtersearch.map((row) => (
            <TableRow key={row.bookID}>
              <TableCell component="th" scope="row">
                {row.bookID}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.authors}</TableCell>
              <TableCell align="center"> <Rating
                value={row.average_rating}
                name='half-rating'
                precision = {0.1}
               /></TableCell>
              <TableCell align="center">{row.isbn}</TableCell>
              <TableCell align="center">{row.language_code}</TableCell>
              <TableCell align="center">{row.ratings_count}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
             
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
          </Paper>

  );
}