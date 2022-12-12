import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, InputLabel, TextField, Typography, Button,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio } from "@mui/material";

const labelStyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AddBatch = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    // console.log(event.target.defaultValue);
    setInputs((prevValue) => ({
      ...prevValue,
      ["batchNumber"]: event.target.defaultValue,
    }));
  };

  const sendRequest = async (type = "signin") => {
    const batchData = {
      batchNumber:inputs.batchNumber,
      user:localStorage.getItem("userId"),
    }
    switch(batchData.batchNumber){
      case "1":
        batchData["timing"]="6-7 AM"
        break;
      case "2":
        batchData["timing"]="7-8 AM"
        break;
      case "3":
        batchData["timing"]="8-9 AM"
        break;
      case "4":
        batchData["timing"]="5-6 PM"
        break;
      default:
        window.alert("Please Select a Valid Batch Number")  
    }
    const res = await axios
      .post("http://localhost:8000/api/batch/add", batchData)
      .catch((err) => console.log(err));
    console.log(res);
    const data = res.data;
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          border={2}
          borderColor="secondary.main"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={5}
          display="flex"
          flexDirection={"column"}
          width={"70%"}
        >
          <InputLabel sx={labelStyle}>Batch Number</InputLabel>
          <FormControl >
            <FormLabel id="demo-radio-buttons-group-label">Select Batch</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="1"
              name="radio-buttons-group"
              
              onChange={handleChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Batch 1 (Timing 6-7 AM)" />
              <FormControlLabel value="2" control={<Radio />} label="Batch 2 (Timing 7-8 AM)" />
              <FormControlLabel value="3" control={<Radio />} label="Batch 3 (Timing 8-9 AM)" />
              <FormControlLabel value="4" control={<Radio />} label="Batch 4 (Timing 5-6 AM)" />
            </RadioGroup>
          </FormControl>
          
          <Button
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            color="warning"
            type="submit"
          >
            Submit Batch
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBatch;
