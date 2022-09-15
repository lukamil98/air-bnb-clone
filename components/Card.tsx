import React from "react";
import { Place } from "types/places";

export interface CardProps {
  place: Place;
}

export const Card = ({ place }: CardProps) => {
  const {
    imageUrl,
    location,
    googleMapsUrl,
    title,
    startDate,
    endDate,
    description,
  } = place;

  return (
    <div className="card">
      <img src={imageUrl} className="card--image" alt="Manasija Monastery" />
      <div className="card--info">
        <div className="location">
          <div className="location--logo">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <p className="location--name">{location}</p>
          <a className="location--url" href={googleMapsUrl}>
            View on Google Map
          </a>
        </div>
        <h3 className="title">{title}</h3>
        <span className="start--date">{startDate} - </span>
        <span className="end--date">{endDate}</span>
        <p className="description">{description}</p>
      </div>
      <hr className="card--underline" />
    </div>
  );
};
