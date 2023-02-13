import { Chip } from "@mui/material";
import React, { useState } from "react";

const InitialChipDetails = [
  { label: "Indian", variant: "filled" },
  { label: "American", variant: "outlined" },
  { label: "Canadian", variant: "outlined" },
  { label: "Mexican", variant: "outlined" },
  { label: "Chinese", variant: "outlined" },
  { label: "Italian", variant: "outlined" },
  { label: "Thai", variant: "outlined" },
];

const Menu = ({ setChipSelect, refetch }) => {
  const [chipDetails, setChipDetails] = useState(InitialChipDetails);

  const onChipClick = (chipDetail, index) => () => {
    let chip = [...chipDetails];
    chip.forEach((eachChip) => {
      eachChip.variant = "outlined";
    });
    chip[index].variant = "filled";
    setChipDetails([...chip]);
    setChipSelect(chipDetail);
    refetch();
  };

  return (
    <>
      {chipDetails.map((chip, index) => (
        <Chip
          key={chip.label}
          label={chip.label}
          color="primary"
          variant={chip.variant}
          onClick={onChipClick(chip, index)}
        />
      ))}
    </>
  );
};

export default Menu;
