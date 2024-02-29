import React from "react";
import styles from "./Card.module.css";

const Card = ({ favorito }) => {
  return (
    <div className={styles.card}>
      <h2>Hola, {favorito.nombre}</h2>
      <p>Tu cantate favorito es</p>
      <h3>{favorito.cantante}</h3>
    </div>
  );
};

export default Card;
