import { Fragment } from "react";
import { Card, Row,Col,Button } from "react-bootstrap";
import "./Home.css";
import Image from '../../Assets/Play.jpeg';

const Home = () => {
    return (<Fragment>
      <div className="Div">
      <Row >
        <Col className="text-center" style={{    textAlign: "center"}}>
          <Button
            variant="primary"
            style={{ fontSize: "25px" }}
            className="btn"
          >
            Get our Latest Album
          </Button>{" "}
          <br />
          <a rel="noreferrer" href="/" target="_blank">
            <img src={Image} alt="Play" />
          </a>
        </Col>
      </Row>
    </div>
    <h2 className="h2"> Tours </h2>
  
  
  
  
      <div className="div">
        <div className="tour-item">
          <span className="tour-dates">Aug 25</span>
          <span className="tour-dates">DETROIT, MI</span>
          <span className="spec">DTE ENERGY MUSIC THEATRE</span>
  
          <button className="buy">Buy</button>
        </div>
        <div className="tour-item">
          <span className="tour-dates">Sep 20</span>
          <span className="tour-dates">DETROIT, MI</span>
          <span className="spec">DTE ENERGY MUSIC THEATRE</span>
  
          <button className="buy">Buy</button>
        </div>
        <div className="tour-item">
          <span className="tour-dates">Oct 18</span>
          <span className="tour-dates">DETROIT, MI</span>
          <span className="spec">DTE ENERGY MUSIC THEATRE</span>
  
          <button className="buy">Buy</button>
        </div>
        <div className="tour-item">
          <span className="tour-dates">Nov 10</span>
          <span className="tour-dates">DETROIT, MI</span>
          <span className="spec">DTE ENERGY MUSIC THEATRE</span>
  
          <button className="buy">Buy</button>
        </div>
        <div className="tour-item">
          <span className="tour-dates">Dec 31</span>
          <span className="tour-dates">TORONTO,ON</span>
          <span className="spec">BUDWEISER STAGE</span>
  
          <button className="buy">Buy</button>
        </div>
      </div>
      </Fragment>
    );
  };
  export default Home;
