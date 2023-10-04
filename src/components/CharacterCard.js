import './CharacterCard.css'

export default function CharacterCard(props) {
    return <section className="character-card">
        <h2 className="character-card__title">{props.character.name}</h2>
        <img className="character-card__img" src={props.character.image} alt="character img"/>
    </section>
}