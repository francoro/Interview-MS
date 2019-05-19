import React from "react";
export const ListItem = props => {
  return (
    <div className="superHeroContainer">
    
      <img
        className="img"
        src={`${props.item.thumbnail.path}.${props.item.thumbnail.extension}`}
        alt="super-hero-pic"
      />
      <button className="button-card" onClick={() => props.onCharacterSelect(props.item.id)}>
      <div className="info">
      <p className="name">{props.item.name}</p>
        <div className="flags">
          <span
            className={
              "flag " +
              (props.item.comics.available > 0 ? "available" : "notAvailable")
            }
          >
            Comics
          </span>
          <span
            className={
                "flag " +
                (props.item.series.available > 0 ? "available" : "notAvailable")
              }
          >
            Series
          </span>
          <span
            className={
                "flag " +
                (props.item.events.available > 0 ? "available" : "notAvailable")
              }
          >
            Events
          </span>
          <span
            className={
                "flag " +
                (props.item.stories.available > 0 ? "available" : "notAvailable")
              }
          >
            Stories
          </span>
        </div>
      </div>
      </button>
    </div>
  );
};
