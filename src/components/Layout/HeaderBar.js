import { Card } from "react-bootstrap";
import classes from "./HeaderBar.module.css";

const HeaderBar = () => {
    return (
        <Card   style={{width:'100%', height:'12rem'}}>
          <Card.Body    className={classes.cardbody} > <span>The Generics</span>  </Card.Body >
        </Card>
      );
};

export default HeaderBar;
