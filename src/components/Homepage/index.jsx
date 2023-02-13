import { Chip, TextField } from "@mui/material";
import React, { useState } from "react";
import { searchContainer, searchBar, chipContainer } from "./style";

const InitialChipDetails = [
  { label: "Indian", variant: "filled" },
  { label: "American", variant: "outlined" },
  { label: "Canadian", variant: "outlined" },
  { label: "Mexican", variant: "outlined" },
  { label: "Chinese", variant: "outlined" },
  { label: "Italian", variant: "outlined" },
  { label: "Thai", variant: "outlined" },
];

const HomePage = () => {
  const [chipDetails, setChipDetails] = useState(InitialChipDetails);

  const onChipClick = (chipDetail, index) => {
    let chip = [...chipDetails];
    chip.forEach((eachChip) => {
      eachChip.variant = "outlined";
    });
    chip[index].variant = "filled";
    setChipDetails([...chip]);
  };
  return (
    <>
      <section className={searchContainer}>
        <TextField variant="outlined" size="small" className={searchBar} placeholder="Search by name.." />
      </section>

      <section className={chipContainer}>
        {chipDetails.map((chip, index) => (
          <Chip
            key={chip.label}
            label={chip.label}
            color="primary"
            variant={chip.variant}
            onClick={() => onChipClick(chip, index)}
          />
        ))}
      </section>

      <section>
        <div
          style={{
            margin: "1rem",
            background: "#fff",
            padding: "1rem",
            height: "30vh",
            width: "40vw",
            borderRadius: "15px",
          }}
        >
          <p>Listing 1</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
