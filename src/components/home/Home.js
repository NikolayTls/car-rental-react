import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <div style={{ flex: 1, justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <h1>If service counts, count on us!</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <p className="font-italic text-muted mb-1">
            As your competent partner for rental cars, our top priority is to
            make you mobile. With good service and attractive prices we know how
            to convince. But the best thing you can do is to get an impression
            by yourself.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          width: "100%",
        }}
      >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-150"
              src="https://www.bmw.bg/content/dam/bmw/marketBG/bmw_bg/topics/LPPages/3Series_LCI_LP_1680x756.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1655285966756.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-150"
              src="https://www.bmw.bg/content/dam/bmw/common/all-models/5-series/sedan/2021/Highlights/bmw-5-series-sedan-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1659100549411.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>THE 5</h3>
              <p>
                The BMW 5 Series Sedan is the epitome of a sporty business
                sedan. At first glance, it exudes a stylish, sporty spirit,
                especially with its dynamic silhouette and reduced form
                language. .
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-150"
              src="https://www.bmw.bg/content/dam/bmw/common/all-models/m-series/i4-m50/2021/onepager/bmw-i4-m50-onepager-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1656404577796.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>The i4 M50</h3>
              <p>
                Sporting dynamics that electrify: the BMW i4 M50 combines the
                innovative power of the BMW M with that of the BMW i for the
                first time. With its two BMW M eDrive electric motors on its
                all-electric drive, the BMW i4 M50 develops 544 hp (400 kW) in
                Sport-Boost mode and offers typical BMW M dynamics in a form
                previously unknown.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <h2>The most wanted cars, if you need it only in the city</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "2px",
          }}
        >
          <div style={{ position: "relative", marginLeft: "15px" }}>
            <img
              alt=""
              src="https://wallpapercave.com/wp/wp1837957.jpg"
              style={{ height: "500px" }}
            />
            <div
              style={{
                color: "black",
                position: "absolute",
                top: "10px",
                left: "0",
                fontWeight: "bold",
                fontSize: "20px",
                width: "500px",
              }}
            >
              If it is retro charm you are after, not many new cars come close
              to the chic Fiat 500.
            </div>
            <Button
              style={{
                position: "absolute",
                left: "20px",
                bottom: "20px",
                backgroundColor: "transparent",
                border: "1px solid black",
                width: "200px",
                color: "black",
              }}
              onClick={() => navigate("/cars")}
            >
              Get your`s now
            </Button>
          </div>

          <div style={{ position: "relative", marginLeft: "15px" }}>
            <img
              alt=""
              src="https://wallpaperaccess.com/full/2718168.jpg"
              style={{ height: "500px" }}
            />
            <div
              style={{
                color: "white",
                position: "absolute",
                top: "10px",
                left: "0",
                fontWeight: "bold",
                fontSize: "20px",
                width: "500px",
              }}
            >
              If it is retro charm you are after, not many new cars come close
              to the chic Fiat 500.
            </div>
            <Button
              style={{
                position: "absolute",
                left: "20px",
                bottom: "20px",
                backgroundColor: "transparent",
                border: "1px solid white",
                width: "200px",
              }}
              onClick={() => navigate("/cars")}
            >
              Get your`s now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
