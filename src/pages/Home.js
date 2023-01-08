import React from "react";
import Select from "react-select";
import searchIcon from "../assets/icon/search.svg";
import account from '../assets/icon/account.svg'

const options = [
  { value: "all", label: "all" },
  { value: "city", label: "city" },
];

function Home() {
  const styles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "rgba(26, 26, 26, 1)",
      backgroundColor: state.isSelected ? "#00bad3" : "white",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: state.isSelected ? 0 : "rgba(0, 186, 211, 0.1)",
        cursor: "pointer",
      },
    }),
    control: (styles) => ({
      ...styles,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "rgba(26, 26, 26, 0.8)",
      padding: "0.5rem 0",
    }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="left-container">
          <div className="top-bar-container">
            <div className="search-container">
              <img alt="img" src={searchIcon} />
              <input placeholder="Search..." />
            </div>
            <div className="places-dropdown">
              <Select
                isSearchable={false}
                defaultValue={options[0][0]}
                options={options[0]}
                styles={styles}
              />
            </div>
          </div>
          <p className="title">Weather Forecast</p>
          <div className="cities-wrapper">
              {}
          </div>
        </div>
        <div className="right-container">
            <div className="top-bar-container">
                <div className="notification-wrapper">
                    <p>Notification</p>
                    <p className="notification-number">1</p>
                </div>
                <div className="places-wrapper">
                    <p>Places</p>
                </div>
                <div className="account-wrapper">
                    <img alt="img" src={account}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
