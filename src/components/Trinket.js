import React from "react";
import { Route, NavLink } from "react-router-dom";
import TricketDescription from "./TrinketDescription";
import TricketShipping from "./TricketShipping";

export default function(props) {
  const item = props.items.find(i => String(i.id) === props.match.params.id);

  if (!item) {
    return <div>Loading...</div>;
  };

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>

        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
    </div>

    <nav>
      <NavLink to={props.match.url}>Description</NavLink>
      <NavLink to={`${props.match.url}/shipping`}>Shipping</NavLink>
    </nav>

      <Route path={props.match.path} exact render={() => {
        return <TricketDescription description={item.description} />
      }} />
      <Route path={`${props.match.path}/shipping`} render={() => {
        return <TricketShipping shipping={item.shipping} />
      }} />
    </div>
  );
};
