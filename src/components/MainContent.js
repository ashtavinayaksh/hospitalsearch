import React, { useState, useMemo } from "react";
import Container from "@mui/material/Container";
import styles from "./MainContent.module.scss";

const HOSPITALS = [
  {
    name: "All India Institute Of Medical Sciences AIIMS, Delhi",
    no_of_beds: 2540,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Ansari Nagar, Delhi, India",
  },
  {
    name: "Fortis Hospital Gurgaon",
    no_of_beds: 400,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Fortis-Hospital-Gurgaon.jpgw3.webp",
    address:
      "Sector - 44, Opposite HUDA City Centre Gurgaon Haryana 122002 India",
  },
  {
    name: "Noida",
    no_of_beds: 400,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Fortis-Hospital-Gurgaon.jpgw3.webp",
    address:
      "Sector - 44, Opposite HUDA City Centre Gurgaon Haryana 122002 India",
  },
  {
    name: "Max Super Speciality Hospital, Saket, New Delhi",
    no_of_beds: 319,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Max-Super-Specialty-Hospital-Saket-New-Delhi.jpgw3.webp",
    address:
      "Press Enclave Road, Mandir Marg, Saket New Delhi Delhi 110017 India",
  },
  {
    name: "Fortis Escorts Hospital New Delhi",
    no_of_beds: 300,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2021/05/fortis_escorts-e1622264796333.jpgw3.webp",
    address:
      "Okhla road, Sukhdev Vihar Metro Station New Delhi Delhi 110025 India",
  },
  {
    name: "Indraprastha Apollo Hospital New Delhi",
    no_of_beds: 1000,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Indraprastha-Apollo-Hospital-New-Delhi.jpgw3.webp",
    address:
      "Indraprastha Apollo Hospitals, Sarita Vihar, Delhi Mathura Road New Delhi Delhi 110076 India",
  },
  {
    name: "Global Hospital Chennai",
    no_of_beds: 1100,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Global-Hospital-Chennai.jpgw3.webp",
    address: "439, Cheran Nagar, Perumbakkam, Chennai Tamil Nadu 600001 India",
  },
  {
    name: "MGM Healthcare, Chennai",
    no_of_beds: 450,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/04/MGM-Healthcare-Chennai.jpgw3.webp",
    address:
      "New No 72, Old No 54 Nelson Manickam Road, Aminjikarai Chennai Tamil Nadu 600029 India",
  },
  {
    name: "Artemis Hospital Gurgaon",
    no_of_beds: 414,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/Artemis-Hospital-Gurgaon.jpgw3.webp",
    address: "Near Unitech Cyber park, Sector 51 Gurgaon Haryana 122001 India",
  },
  {
    name: "BLK Super Specialty Hospital New Delhi",
    no_of_beds: 775,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/02/BLK-Super-Specialty-Hospital-New-Delhi.pngw3.webp",
    address:
      "Pusa Rd, Radha Soami Satsang, Rajendra Place New Delhi Delhi 110005 India",
  },
  {
    name: "Kokilaben Dhirubhai Ambani Hospital Mumbai",
    no_of_beds: 1000,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Kokilaben-Dhirubhai-Ambani-Hospital-Mumbai.jpgw3.webp",
    address:
      "Rao Saheb, Achutrao Patwardhan Marg, Four Bungalows, Andheri West Mumbai Maharashtra 400053 India",
  },
  {
    name: "Apollo Hospitals, Greams Road, Chennai",
    no_of_beds: 600,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "21, Greams Lane, Off Greams Road Chennai Tamil Nadu 600006 India",
  },
  {
    name: "Jaypee Hospital, Sector 128, Noida",
    no_of_beds: 600,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sector 128, Noida, India",
  },
  {
    name: "Metro Multispeciality Hospital, Noida",
    no_of_beds: 207,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sector 128, Noida, India",
  },
  {
    name: "Yatharth Superspeciality Hospital, Sector 110, Noida",
    no_of_beds: 340,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sector 110, Noida, India",
  },
  {
    name: "Cloudnine Hospital, Noida",
    no_of_beds: 42,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sector 51, Noida, India",
  },
  {
    name: "Felix Hospital, Noida",
    no_of_beds: 150,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sector 137, Noida, India",
  },
  {
    name: "Icare Eye Hospital, Noida",
    no_of_beds: 10,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sector 26, Noida, India",
  },
  {
    name: "Motherland Hospital, Sector 128, Noida",
    no_of_beds: 24,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sector 119, Noida, India",
  },
  {
    name: "Medanta- The Medicity, Noida",
    no_of_beds: 1250,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Gurgaon Sector 38, Gurgaon, India",
  },
  {
    name: "Max Hospital, Noida",
    no_of_beds: 1250,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sushant Lok I, Gurgaon, India",
  },
  {
    name: "W Pratikshsa Hospital, Gurgaon",
    no_of_beds: 950,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Gurgaon Sector 56, Gurgaon, India",
  },
  {
    name: "Columbia Asia Hospital, Gurgaon",
    no_of_beds: 70,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Palam Vihar, Gurgaon, India",
  },
  {
    name: "CK Birla Hospital, Gurgaon",
    no_of_beds: 10,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Gurgaon Sector 51, Gurgaon, India",
  },
  {
    name: "Paras Hospital, Gurgaon",
    no_of_beds: 150,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sushant Lok I, Gurgaon, India",
  },
  {
    name: "Metro Hospital & Heart Institues, Gurgaon",
    no_of_beds: 750,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Gurgaon Sector 56, Gurgaon, India",
  },
  {
    name: "SS Multispeciality Hospital, Hapur",
    no_of_beds: 78,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Avas Vikas Colony, Hapur, Uttar Pradesh 245101",
  },
  {
    name: "Sadhu Hospital in Gyanlok, Hapur",
    no_of_beds: 114,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "59 Gopi Pura , Kothi Gate, Hapur, India, Uttar Pradesh",
  },
  {
    name: "Narinder Mohan Hospital, Hapur",
    no_of_beds: 20,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "59 Gopi Pura , Kothi Gate, Hapur, India, Uttar Pradesh",
  },
  {
    name: "Chandra Laxmi Hospital, Ghaziabad",
    no_of_beds: 370,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Vaishali, Ghaziabad, India, Uttar Pradesh",
  },
  {
    name: "Aarogya Hospital, Ghaziabad",
    no_of_beds: 256,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Vaishali, Ghaziabad, India, Uttar Pradesh",
  },
  {
    name: "Eternity Hospital, Ghaziabad",
    no_of_beds: 36,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Indrapuram, Ghaziabad, India, Uttar Pradesh",
  },
  {
    name: "Shanti Gopal Hospital, Ghaziabad",
    no_of_beds: 106,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Indrapuram, Ghaziabad, India, Uttar Pradesh",
  },
  {
    name: "Apollomedics Super Speciality Hospital, Lucknow",
    no_of_beds: 376,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Lucknow, India, Uttar Pradesh",
  },
  {
    name: "Sahara Hospital, Lucknow",
    no_of_beds: 376,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Gomtinagar Lucknow, India, Uttar Pradesh",
  },
  {
    name: "Medanta Hospital, Lucknow",
    no_of_beds: 3716,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Lucknow",
  },
  {
    name: "Shekhar Hospital, Lucknow",
    no_of_beds: 716,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Indira Nagar, Lucknow, India",
  },
  {
    name: "Mindland Healthcare, Lucknow",
    no_of_beds: 116,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Lucknow, India",
  },
  {
    name: "Mayo Medical Centre, Lucknow",
    no_of_beds: 116,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Vikas Khand, Lucknow, India",
  },
  {
    name: "Vidhya Hospitals & Trauma center, Lucknow",
    no_of_beds: 1116,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Lucknow, India",
  },
  {
    name: "Charak Hospital, Lucknow",
    no_of_beds: 1116,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Dubagga Lucknow, India",
  },
  {
    name: "Sagar Hospitals, Bangalore",
    no_of_beds: 65,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Jayanagar, Bangalore, India",
  },
  {
    name: "Fortis Hospital, Bangalore",
    no_of_beds: 416,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Bannerghatta Road, Bangalore, India",
  },
  {
    name: "People Tree Hospitals, Bangalore",
    no_of_beds: 1116,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Yeshwanthpur, Bangalore, India",
  },
  {
    name: "Rxdx Healthcare, Bangalore",
    no_of_beds: 216,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Whitefield, Bangalore, India",
  },
  {
    name: "Sakra World Hospital, Bangalore",
    no_of_beds: 106,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Bellandur, Bangalore, India",
  },
  {
    name: "Columbia Asia Hospital, Bangalore",
    no_of_beds: 160,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Yeshwanthpur, Bangalore, India",
  },
  {
    name: "BGS Gleneagles Global Hospital, Bangalore",
    no_of_beds: 250,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Kengeri, Bangalore, India",
  },
  {
    name: "St John Medical College And Hospital, Bangalore",
    no_of_beds: 1348,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sarjapur Road, Bangalore, India",
  },
  {
    name: "R R Healthcare Moradabad",
    no_of_beds: 350,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Moradabad",
  },
  {
    name: "Divyakriti Hospital",
    no_of_beds: 150,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Moradabad",
  },
  {
    name: "Ujala Cygnus Brightstar, Moradabad",
    no_of_beds: 430,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Near Corporate Office, Moradabad",
  },
  {
    name: "Sir Ganga Ram Hospital, Delhi",
    no_of_beds: 675,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Old rajendra Nagar, Delhi",
  },
  {
    name: "Indraprastha Apollo Hospitals, Delhi",
    no_of_beds: 1100,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sarita Vihar, Delhi",
  },
  {
    name: "BLK Super Speciality Hospital Delhi",
    no_of_beds: 650,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Pusa Road, Delhi",
  },
  {
    name: "Batra Hospital & Medical Research Centre, Delhi",
    no_of_beds: 495,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Tuglakabad, Delhi",
  },
  {
    name: "Fortis La Femme, Delhi",
    no_of_beds: 262,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Shalimar Bagh, Delhi, India",
  },
  {
    name: "Primus Super Speciality Hospital, Delhi",
    no_of_beds: 150,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Chanakyapuri, Delhi, India",
  },
  {
    name: "Moolchand Hospital, Delhi",
    no_of_beds: 50,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Lajpat Nagar, Delhi, India",
  },
  {
    name: "Lifecare Hospital, Agra",
    no_of_beds: 100,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Shahganj Bazar, Agra",
  },
  {
    name: "Purshottam Das Savitridevi Cancer Care Hospital And Research Center, Agra",
    no_of_beds: 100,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Sikandra, Agra",
  },
  {
    name: "Aashirwad Nursing home, Agra",
    no_of_beds: 200,
    img: "https://medsurgeindia.com/wp-content/w3-webp/uploads/2020/03/Apollo-Hospitals-Greams-Road-Chennai1.jpegw3.webp",
    address: "Shahganj, Agra",
  },
];

const MainContent = () => {
  const [searchText, setSearchText] = useState("");
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState('');

  const searchedData = useMemo(() => {
    const tempArr = JSON.parse(JSON.stringify(HOSPITALS));
    if (searchText) {
      return tempArr.filter((item) =>
        item.name?.toLowerCase()?.includes(searchText)
      );
    } else {
      return [];
    }
  }, [searchText]);

  const onSearch = (e) => {
    setSearchText(e.target.value);
  };

  const toggleOptions = () => setOptionsVisible(!optionsVisible);

  const renderData = searchedData?.length > 0 ? searchedData : HOSPITALS;

  const onItemSelection = (i) => {
    setSearchText(i.name)
    setSelectedHospital(i)
    setOptionsVisible(false)
  }

  return (
    <Container className={styles.mainContainer}>
      <span className={styles.title}>Search For Hospitals Nearby You</span>
      <input
        placeholder="Search..."
        data-is-options-visible={optionsVisible}
        value={searchText}
        onChange={onSearch}
        onClick={toggleOptions}
      />
      {optionsVisible && (
        <div className={styles.optionsContainer}>
          {renderData?.map((i, index) => {
            return (
              <div
                key={index}
                className={styles.listItem}
                onClick={() => onItemSelection(i)}
              >
                <span>{i?.name}</span>
              </div>
            )
          })
          }
        </div>
      )}

      {selectedHospital && <div
        className={styles.listItemCard}
      >
        <img src={selectedHospital.img} alt="img" />
        <div className={styles.details}>
          <span className={styles.name}>{selectedHospital.name}</span>
          <span>{selectedHospital.address}</span>
          <span>No of Beds : {selectedHospital.no_of_beds}</span>
        </div>
      </div>}
    </Container>
  );
};

export default MainContent;
