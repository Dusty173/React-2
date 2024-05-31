import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {
  let items;
  let menuName;
  let urlParam;
  if (snacks) {
    items = snacks;
    urlParam = "snacks";
    menuName = "Snacks";
  } else {
    items = drinks;
    urlParam = "drinks";
    menuName = "Drinks";
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {menuName} Menu
          </CardTitle>
          <CardText>Please select from our {menuName}.</CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${urlParam}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
