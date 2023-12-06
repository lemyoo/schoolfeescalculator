import * as React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
} from "@mui/material";

const fees = [10, 20, 30, 40, 50, 60, 70];

const feedingAmount = [0, 20, 30];

const boardingMoney = 100;

const TransportationMoney = [0, 10, 20, 30];

export default function MyStepper() {
  const [level, setLevel] = React.useState("");
  const [feeding, setFeeding] = React.useState("");
  const [feedingMoney, setFeedingMoney] = React.useState(0);
  const [boarding, setBoarding] = React.useState("");
  const [transportation, setTransportation] = React.useState("");
  const [classFees, setClassFees] = React.useState(0);
  const [transportationFees, setTransportationFees] = React.useState(0);
  const [sum, setSum] = React.useState(0);

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleFeedingChange = (event) => {
    setFeeding(event.target.value);
  };

  const handleBoardingChange = (event) => {
    setBoarding(event.target.value);
  };

  const handleTransportationChange = (event) => {
    setTransportation(event.target.value);
  };

  React.useEffect(() => {
    switch (level) {
      case 7:
        setClassFees(fees[0]);
        break;
      case 8:
        setClassFees(fees[1]);
        break;
      case 9:
        setClassFees(fees[2]);
        break;
      case 10:
        setClassFees(fees[3]);
        break;
      case 11:
        setClassFees(fees[4]);
        break;
      case 12:
        setClassFees(fees[5]);
        break;
      case 13:
        setClassFees(fees[6]);
        break;
      default:
        break;
    }
  }, [level]);

  React.useEffect(() => {
    switch (feeding) {
      case "No Feeding":
        setFeedingMoney(feedingAmount[0]);
        break;
      case "Level 7-9":
        setFeedingMoney(feedingAmount[1]);
        break;
      case "Level 10-13":
        setFeedingMoney(feedingAmount[2]);
        break;
      default:
        break;
    }
  }, [feeding]);

  React.useEffect(() => {
    switch (transportation) {
      case "No Transport":
        setTransportationFees(TransportationMoney[0]);
        break;
      case "Near School":
        setTransportationFees(TransportationMoney[1]);
        break;
      case "In Kasoa":
        setTransportationFees(TransportationMoney[2]);
        break;
      case "OutSide Kasoa":
        setTransportationFees(TransportationMoney[3]);
        break;
      default:
        break;
    }
  }, [transportation]);

  React.useEffect(() => {
    if (boarding) {
      setSum(classFees + feedingMoney + boardingMoney + transportationFees);
    } else {
      setSum(classFees + feedingMoney + transportationFees);
    }
  }, [classFees, feedingMoney, boarding, transportationFees]);

  return (
    <Box sx={{ marginTop: 10 }}>
      <Grid container margin={"10px 0px 0px 0px"}>
        <Grid item xs={10} margin={"auto"} padding={"0px 0px 20px 0px"}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={level}
              label="Level"
              onChange={handleLevelChange}>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={10} margin={"auto"} padding={"0px 0px 20px 0px"}>
          <FormControl fullWidth>
            <InputLabel id="food">Feeding</InputLabel>
            <Select labelId="food" value={feeding} label="Feeding" onChange={handleFeedingChange}>
              <MenuItem value={"No Feeding"}>No Feeding</MenuItem>
              <MenuItem value={"Level 7-9"}>Level 7-9</MenuItem>
              <MenuItem value={"Level 10-13"}>Level 10-13</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={10} margin={"auto"} padding={"0px 0px 20px 0px"}>
          <FormControl fullWidth>
            <InputLabel id="boarding">Boarding</InputLabel>
            <Select
              labelId="boarding"
              value={boarding}
              label="Boarding"
              onChange={handleBoardingChange}>
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={10} margin={"auto"} padding={"0px 0px 20px 0px"}>
          <FormControl fullWidth>
            <InputLabel id="transportation">Transportation</InputLabel>
            <Select
              labelId="transportation"
              value={transportation}
              label="Boarding"
              onChange={handleTransportationChange}>
              <MenuItem value="No Transport">No Transportation</MenuItem>
              <MenuItem value="Near School">Near School</MenuItem>
              <MenuItem value="In Kasoa">In Kasoa</MenuItem>
              <MenuItem value="OutSide Kasoa">OutSide Kasoa</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={10} margin={"auto"} padding={"0px 0px 20px 0px"}>
          <Paper>
            <Grid container>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography fontWeight={"bold"}>Item</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography fontWeight={"bold"}>Value</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography fontWeight={"bold"}>Amount(Ghc)</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>Class</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>{level}</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>{classFees}</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>Feeding</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>{feeding}</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>{feedingMoney}</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>Boarding</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>{boarding ? "Yes" : "No"}</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>{boarding ? boardingMoney : 0}</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>Transportation</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>{transportation}</Typography>
              </Grid>
              <Grid item xs={4} margin={"auto"} padding={"0px 0px 20px 0px"}>
                <Typography>{transportationFees}</Typography>
              </Grid>
              <Grid item xs={6} margin={"auto"} sx={{ backgroundColor: "primary.main" }}>
                <Typography>Total</Typography>
              </Grid>
              <Grid item xs={6} margin={"auto"}>
                <Typography sx={{ color: "secondary.main" }}>Ghc{sum}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
