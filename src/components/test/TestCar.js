import styles from "./car.module.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";
import { GiCarDoor } from "react-icons/gi";
import { MdLuggage } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { FaRegIdCard } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { CarItemModal } from "../car-list/car-item/CarItemModal";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import { useState, useContext } from "react";

export const TestCar = ({ cars }) => {
  const [modalShow, setModalShow] = useState(false);
  let navigate = useNavigate();
  let { user } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <div className={styles.car}>
        <img src={cars.imageUrl} alt="FIAT 500" style={{ width: "300px" }} />
      </div>
      <div className={styles.middle}>
        <h2>{cars.name}</h2>
        <div className={styles["card-tag"]}>
          <div>
            <div></div>
          </div>
        </div>
        <div className={styles.icons}>
          <div style={{ display: "flex", marginRight: "16px" }}>
            <div className={styles["icon-style"]}>
              <BsFillPeopleFill size="18px" />
            </div>
            <p style={{ marginLeft: "4px" }}>{cars.category.occupant_amount}</p>
          </div>

          <div style={{ display: "flex", marginRight: "16px" }}>
            <div className={styles["icon-style"]}>
              <GiCarDoor size="18px" />
            </div>
            <p style={{ marginLeft: "4px" }}>{cars.category.door_amount}</p>
          </div>
          <div style={{ display: "flex", marginRight: "16px" }}>
            <div className={styles["icon-style"]}>
              <MdLuggage size="18px" />
            </div>

            <p style={{ marginLeft: "4px" }}>{cars.category.baggage_amount}</p>
          </div>
          <div style={{ display: "flex", marginRight: "16px" }}>
            <div className={styles["icon-style"]}>
              <TbManualGearbox size="18px" />
            </div>
            <p style={{ marginLeft: "4px" }}>A</p>
          </div>
          <div style={{ display: "flex", marginRight: "16px" }}>
            <div className={styles["icon-style"]}>
              <FaRegIdCard size="18px" />
            </div>
            <p style={{ marginLeft: "4px" }}>{cars.category.driver_age}</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <div className={styles.checks}>
              <ImCheckmark color="green" />
            </div>
            <p>Unlimited kilometers included</p>
          </div>

          <div style={{ display: "flex" }}>
            <div className={styles.checks}>
              <ImCheckmark color="green" />
            </div>
            <p>Protection included</p>
          </div>

          <div style={{ display: "flex" }}>
            <div className={styles.checks}>
              <ImCheckmark color="green" />
            </div>
            <p>Free cancellation anytime</p>
          </div>
        </div>

        <div style={{ margin: "16px 0" }}>
          <button
            className={styles["detail-btn"]}
            aria-expanded="false"
            onClick={() => setModalShow(true)}
          >
            <div style={{ margin: "0" }}>
              <p style={{ color: "#090", fontWeight: "700", fontSize: "14px" }}>
                More Details
              </p>
            </div>
            <div style={{ margin: "0" }}>
              <div className={styles.checks}>
                <AiFillInfoCircle color="green" />
              </div>
            </div>
          </button>
          <CarItemModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            cars={cars}
          />
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles["right-section"]}>
          Now from
          <div style={{ fontWeight: "bold", fontSize: "25px" }}>
            {cars.category.price_per_day}$/Day
          </div>
        </span>
        {user ? (
          <div style={{ marginTop: "15px" }}>
              <button onClick = {()=> navigate(`/reservation/selectedCar/${cars.id}`)} className={styles["btn-select"]}>Select</button>
          </div>
        ): <div style = {{fontWeight: "bold", fontSize: "17px"}}>Register now in order to rent it</div>}
      </div>
    </div>
  );
};
