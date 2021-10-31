import Button from '@mui/material/Button';
import * as React from 'react';
 

 export default function Botton({AddItems}){
  
    return(
<nav className="nav-1">

<Button variant="contained" disableElevation  onClick={AddItems}>
    button
    </Button>
    
</nav>
  
    );
}