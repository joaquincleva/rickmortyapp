import { useEffect, useState } from "react";
import "./styles/index.css";
import "./styles/loader.css";

interface RickMortyCharacter {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
}

function App() {
  const [rickMortyData, setRickMortyData] = useState<RickMortyCharacter[]>([]);

  const fetchRickMortyApi = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    const data = await response.json();
    console.log(data.results);
    setRickMortyData(data.results);
  };

  useEffect(() => {
    fetchRickMortyApi();
  }, []);

  return (
    <>
      {rickMortyData.length === 0 ? (
        <main id="characters">
          <div id="lds-ring" className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </main>
      ) : (
        <main id="characters">
          {rickMortyData.map((item) => (
            <article key={item.id} className="character">
              <img src={item.image} width={250} alt=""></img>
              <h2>{item.name}</h2>
              <div>
                <p>{item.species}</p>
                <p className={`${item.status.toLowerCase()}`}></p>
              </div>
              <a
                onClick={() => {
                  localStorage.setItem(`charID`, item.id.toString());
                }}
                href="character"
                id={`${item.id}`}
              >
                VerDetalle
              </a>
            </article>
          ))}
        </main>
      )}
    </>
  );
}

export default App;
