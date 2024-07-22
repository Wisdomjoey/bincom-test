import { TextField } from "@mui/material";

function NewUnitInfo() {
  return (
    <div className="md:grid grid-cols-3 tablet:grid-cols-2 gap-5">
      <TextField
        variant="outlined"
        name="name"
        id="name"
        label="Unit Name"
        placeholder="Enter Unit Name"
        fullWidth
        required
      />

      <TextField
        variant="outlined"
        name="description"
        id="description"
        label="Unit Description"
        placeholder="Enter Unit Description"
        fullWidth
      />

      <TextField
        variant="outlined"
        name="registrar"
        id="registrar"
        label="Entered By"
        placeholder="Enter Registrar Name"
        fullWidth
      />
    </div>
  );
}

export default NewUnitInfo;
