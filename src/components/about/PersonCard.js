import React from 'react';
import '../../style/PersonCard.css';
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function PersonBlock(props) {
    return (
        <><img src={require(`../../assets/developers/${props.person.image}`)} alt="devs" id="team" className="img-fluid rounded-circle w-50 mb-3" />
            <h3>{props.person.name}</h3>
            <h5>{props.person.title}</h5>
            <p>{props.person.description}</p></>);
}

function ContactInformation(props) {
    return (
    <>
        <section>
        <a href={props.person.github} target="_blank"><FaGithub color="black" size='2rem' /> </a>
        <a href={props.person.linkedin} target="_blank"><FaLinkedin color="black" size='2rem' /> </a>
        </section>
    </>)
}

function PersonCard(props) {

    return (
        <div className="card person-card text-center mt-5">
            <div className="card-body">
                {PersonBlock(props)}
                {ContactInformation(props)}
            </div>
        </div>
    )
}

export default PersonCard;
