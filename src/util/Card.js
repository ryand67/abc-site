import React from 'react'
import styled from 'styled-components';

function Card({ title, author, genre, amazon, setGenre }) {
    return (
        <CardDiv>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <h4><a href={amazon} target="_blank">Buy Here on Amazon</a></h4>
            <GenreDiv>
                {genre.map(item => {
                    return <p>#{item}</p>
                })}
            </GenreDiv>
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

    h4 {
        margin: 0;
    }
`;

const GenreDiv = styled.div`
    display: flex;
    flex-direction: row;

    p {
        margin-right: .5rem;
    }
`;

export default Card
