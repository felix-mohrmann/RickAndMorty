import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css";

export default function CharacterGallery(props){
    return <section className="character-gallery">
        {
            props.characters.map(char => <CharacterCard key={char.id} character={char}/>)
        }
    </section>
}