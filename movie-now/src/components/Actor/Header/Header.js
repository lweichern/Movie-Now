import React from "react";
import API_Details from "../../../API_Details";
import {
  ActorBiography,
  ActorCard,
  ActorContent,
  ActorDetails,
  ActorImage,
  ActorName,
  BackgroundHeaderImage,
  DateOfBirth,
  PlaceOfBirth,
  Popularity,
  PopularityScore,
} from "./Header.styled";
import NoImage from "../../../images/no_image.jpg";

export default function Header({ actorDetails }) {
  return (
    <BackgroundHeaderImage>
      <ActorCard>
        <ActorImage
          src={
            actorDetails.profile_path !== null
              ? `${API_Details.BASE_IMAGE_URL}${API_Details.POSTER_SIZE}${actorDetails.profile_path}`
              : NoImage
          }
        />
        <ActorContent>
          <ActorName>{actorDetails.name}</ActorName>
          <ActorBiography>
            <h4>Biography</h4>
            <div>{actorDetails.biography}</div>
          </ActorBiography>
          <ActorDetails>
            <Popularity>
              <h4>Popularity</h4>
              <PopularityScore>
                {Math.floor(actorDetails.popularity)}
              </PopularityScore>
            </Popularity>
            <DateOfBirth>
              <h4>Birthdate</h4>
              <div>{actorDetails.birthday}</div>
            </DateOfBirth>
            <PlaceOfBirth>
              <h4>Place of Birth</h4>
              <div>{actorDetails.place_of_birth}</div>
            </PlaceOfBirth>
          </ActorDetails>
        </ActorContent>
      </ActorCard>
    </BackgroundHeaderImage>
  );
}
