import React from "react";
import {
  Card,
  Avatar,
  ActorDetails,
  ActorName,
  ActorCharacter,
} from "./ActorCards.styled";
import API_Details from "../../../API_Details";
import NoImage from "../../../images/no_image.jpg";
import { Link } from "react-router-dom";

export default function ActorCards({ profile }) {
  return (
    <Link to={`/actor/${profile.id}`}>
      <Card initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
        <Avatar
          src={
            profile.profile_path !== null
              ? `${API_Details.BASE_IMAGE_URL}${API_Details.POSTER_SIZE}/${profile.profile_path}`
              : NoImage
          }
          loading="lazy"
          alt={`${profile.name} profile image`}
        />
        <ActorDetails>
          <ActorName>{profile.name}</ActorName>
          as
          <ActorCharacter>{profile.character}</ActorCharacter>
        </ActorDetails>
      </Card>
    </Link>
  );
}
