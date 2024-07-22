import { TextField } from "@mui/material";

function NewUnitResult({ parties }: { parties: string[] }) {
  return (
    <div className="md:grid grid-cols-3 tablet:grid-cols-2 gap-5">
      {parties.map((party, ind) => (
        <TextField
          key={ind}
          variant="outlined"
          name={party}
          id={party}
          label={party}
          type="number"
          inputMode="numeric"
          placeholder={`Enter ${party} Votes`}
          fullWidth
          required
        />
      ))}
    </div>
  );
}

export default NewUnitResult;
