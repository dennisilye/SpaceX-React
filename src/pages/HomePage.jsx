import { LandingList } from "../components/LandingList";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export const HomePage = ({ data, onChangeFilter }) => {
  function handleChange() {
    onChangeFilter();
  }

  return (
    <div className="container">
      <div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={handleChange} />}
            label="Show Successful landings only."
          />
        </FormGroup>
      </div>
      <LandingList landings={data}></LandingList>
    </div>
  );
};


