import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';


function MyButton() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
        <Button variant="contained" color="primary">
          Click me
        </Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
      <Typography variant="h6"  component="h1" color="primary" align="center"  noWrap    >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima quam eaque. Doloremque rem dicta impedit eos labore optio sint voluptates. Ullam blanditiis iste, doloribus porro magnam facere! Deserunt, illo consectetur molestias incidunt nisi dolores exercitationem doloremque. Magni, minus cupiditate?
      </Typography>
    </>
  );
}

export default MyButton;
