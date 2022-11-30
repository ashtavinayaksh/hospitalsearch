import React, { useState, useMemo } from "react";
import Container from "@mui/material/Container";
import styles from "./MainContent.module.scss";

const Popular = () => {
    const selectHospital = "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Fortis-Hospital-Gurgaon.jpgw3.webp"
    const saket = "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Max-Super-Specialty-Hospital-Saket-New-Delhi.jpgw3.webp"
    const artemis = "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Artemis-Hospital-Gurgaon.jpgw3.webp"
    const name = "Max Super Speciality Hospital, Saket, New Delhi"
    const address = "New Delhi"
    const no_of_beds = 34
  return (
    <Container className={styles.mainContainer}>
      <div className={styles.listItemCard}>
        <img src={selectHospital} alt="img" />
        <div className={styles.details}>
          <span className={styles.name}>{name}</span>
          <span>{address}</span>
          <span>No of Beds : {no_of_beds}</span>
        </div>
      </div>
      <div className={styles.listItemCard}>
        <img src={artemis} alt="img" />
        <div className={styles.details}>
          <span className={styles.name}>Kokilaben Dhirubhai Ambani Hospital Mumbai</span>
          <span>Mumbai</span>
          <span>No of Beds : 89</span>
        </div>
      </div>
      <div className={styles.listItemCard}>
        <img src={saket} alt="img" />
        <div className={styles.details}>
          <span className={styles.name}>Global Hospital Chennai</span>
          <span>Chennai</span>
          <span>No of Beds : 412</span>
        </div>
      </div>
      <div className={styles.listItemCard}>
        <img src={artemis} alt="img" />
        <div className={styles.details}>
          <span className={styles.name}>BLK Super Specialty Hospital New Delhi</span>
          <span>{address}</span>
          <span>No of Beds : 23</span>
        </div>
      </div>
      <div className={styles.listItemCard}>
        <img src={saket} alt="img" />
        <div className={styles.details}>
          <span className={styles.name}>Rajiv Gandhi PGI Hospital</span>
          <span>Lucknow</span>
          <span>No of Beds : 67</span>
        </div>
      </div>
    </Container>
  );
};

export default Popular;
