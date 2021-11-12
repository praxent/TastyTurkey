import * as React from 'react';
import Button from "@mui/material/Button";

interface Props {

  onClick: () => void;
}

const Button: React.FC<Props> = ({ 

    onClick, 
  
  }) => { 
  return (
    <button 
      onClick={onClick}
     
    >
    
    </button>
  );
}

export default Button;
