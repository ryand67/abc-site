import React from 'react'
import styled from 'styled-components';

function Card({ title, author, genre, amazon }) {
    return (
        <CardDiv>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <h4><a href={amazon} target="_blank">Amazon</a></h4>

        </CardDiv>
    )
}

const CardDiv = styled.div`
    margin: .5rem auto;
    width: 50%;
    text-align: left;
    border: 1px solid black;
    padding: 0 1rem;

    a {
        text-decoration: underline;
    }

    a:visited {
        color: black;
    }
`;

export default Card
