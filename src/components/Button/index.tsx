import * as React from 'react';
import Button from "@mui/material/Button";


type Props = {
  onClick: () => void;
  text: string;
}

const AddButton: React.FC<Props> = ({ 

    onClick, text
  }) => { 
  
  return (
   
    <Button
      onClick={onClick}
      color="secondary"
    >
    {text}
    </Button>
  );
}

export default AddButton;
