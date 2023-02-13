import { css } from "@emotion/css";
import { Typography } from "@mui/material";
import React from "react";

const styles = {
  cardContainer: css`
    border-radius: 15px;
    background-color: #fff;
    padding: 0.5rem;
    margin: 1rem;
    width: inherit;

    word-wrap: break-word;
    width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,

  img: css`
    padding: 0.2rem;
    height: 300px;
    object-fit: cover;
  `,
};

const Card = ({ title, imgThumb, id }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={imgThumb} alt="image-thumbnail" className={styles.img} loading="lazy" />
      <Typography variant="p">{title}</Typography>
    </div>
  );
};

export default Card;
