import React from "react";
import memesData from "../Memesdata";





export default function Meme() {


    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "/memes/meme3.jpg"

    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() =>{
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        } 
        getMemes()

    }, [])


    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url
        setMeme(PrevMeme => ({

            ...PrevMeme,
            randomImage: url
        }))
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMEME =>({
            ...prevMEME,
            [name]: value
        }))
    }
  

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                className="form--button" 
                onClick={getMemeImage}>
                New Meme
                </button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} className="meme--image" alt='' />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

