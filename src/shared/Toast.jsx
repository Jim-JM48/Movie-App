import {React ,useState} from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Toast() {
  const [open ,setOpen] = useState(true);
  return (
    <Snackbar
      autoHideDuration={4000}
      open={open}
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      onClose={() => setOpen(false)}
    >
      <Alert
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Error In Fetching The Data
        </Alert>
    </Snackbar>
  );
}
