import React from "react";
import PersonCard from "./PersonCard";
import '../../style/PersonCard.css';
import people from '../../assets/developers/developer.json';

function personCard(people){
  return (      
  <>{people.map((person) => (
    <PersonCard
      key={person.id}
      person={person}
    />
  ))}
  </>)
}

function AboutUs() {
  return (
    <div>
      <h2 class="team-title">Our Development Team</h2>
      <div class=" container-fluid d-flex justify-content-center" >
        <div class="row">
        {personCard(people)}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;