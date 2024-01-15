import { useEffect, useState } from "react";
import "./styles/index.css";
import "./styles/loader.css";

const Character = () => {
  //eslint-disable-next-line
  const [character, setCharacter] = useState<any>({});

  const fetchRickMortyCharacter = async () => {
    const id = localStorage.getItem(`charID`);
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    console.log(data);
    setCharacter(data);
  };

  useEffect(() => {
    fetchRickMortyCharacter();
  }, []);

  return (
    <>
      {character?.name?.length > 0 ? (
        <article style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "25px"}} className="character">
          <img width={250} src={character.image}></img>
          <p className="data">
            <span>Origin:</span> {character.origin.name}
          </p>
          <p className="data">
            <span>Current Location:</span> {character.location.name}
          </p>
          <div style={{display: "flex", justifyContent: "space-between", width: "25%"}}>
            <p className="data">
              <span>Species:</span> {character.species}
            </p>
            <p style={{display: "flex", flexDirection: "column"}} className={`${character.status.toLowerCase()}`}>
              {character.status}
            </p>
          </div>
        </article>
      ) : <main id="characters">
      <div id="lds-ring" className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>}
    </>
  );
};

export default Character;
