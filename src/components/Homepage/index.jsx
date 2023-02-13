import { Skeleton, TextField } from "@mui/material";
import React, { useState } from "react";
import useGetMealFromCategories from "../../hooks/useGetMealFromCategories";
import Card from "../Card";
import Menu from "../Menu";
import { searchContainer, searchBar, chipContainer, cardContainer } from "./style";

const HomePage = () => {
  const [chipSelect, setChipSelect] = useState({ label: "Indian", variant: "filled" });

  const { data, isError, isLoading, refetch } = useGetMealFromCategories(chipSelect.label);

  console.log(data);
  return (
    <>
      <section className={searchContainer}>
        <TextField variant="outlined" size="small" className={searchBar} placeholder="Search by name.." />
      </section>

      <section className={chipContainer}>
        <Menu setChipSelect={setChipSelect} refetch={refetch} />
      </section>

      <section className={cardContainer}>
        {isLoading &&
          [1, 2, 3].map((key) => (
            <div key={key} style={{ margin: "0.2rem" }}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="rounded" animation="wave" width={300} height={50} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="rounded" animation="wave" width={300} height={50} />
            </div>
          ))}
        {data?.data.meals.map((meal) => (
          <Card title={meal.strMeal} key={meal.idMeal} imgThumb={meal.strMealThumb} id={meal.idMeal} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
