import "./Meme.css"
import { useState, useEffect } from "react";
import { MemeInterface } from "./MemeInterface";

function Meme() {

    const MEMES_API_URL = "https://api.imgflip.com/get_memes";
    const [allMemes, setAllMemes] = useState<MemeInterface[]>([])
    const [meme, setMeme] = useState(
        {   topText: "", 
            bottomText: "", 
            randomImage: "https://i.imgflip.com/1bij.jpg"
        })

    useEffect(() => {
        async function getMeme(){
            const res = await fetch(MEMES_API_URL);
            const body = await res.json();
            setAllMemes(body.data.memes)
        }
        
        getMeme()
    }, [])

    function getRandomMemeImageURL(): string {
        return allMemes[Math.floor(Math.random() * allMemes.length)].url;
    }

    function updateMeme(): void {
        const newUrl = getRandomMemeImageURL();
        setMeme(prevState => ({...prevState, randomImage: newUrl}));
    }

    function handleChanges(event: React.ChangeEvent<HTMLInputElement>): void{
        const {name, value} = event.target;
        setMeme(prevMemeState => ({...prevMemeState, [name]: value}))
    }

    return (
        <main>
            <div className="form">
                <input className="form-input"
                    type="text"
                    onChange={handleChanges}
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}/>
                <input 
                    className="form-input"
                    type="text"
                    onChange={handleChanges}
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}/>
                <button className="form-button" onClick={updateMeme}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="Random meme" className="meme-image"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
 }

export default Meme;