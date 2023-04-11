import React from "react";
//import memesData from "../memesData.js"
//import memesData from "../memesData"
import exportedObject from "../memesData";



export default function Meme(){

    
  const[meme, setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage: "http://i.imgflip.com/1bij.jpg"
    //randomImage: memesData.data.memes[0].url
  })
  //console.log(meme.randomImage)

    const[allMemeImage, setAllMemeImage] = React.useState([])

 React.useEffect(() =>{
fetch("https://api.imgflip.com/get_memes")
.then(res => res.json())
.then(res => setAllMemeImage(exportedObject.data.memes))
 }, [])
 console.log(allMemeImage)

function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}
    
    function getMemeImage() {
       // const memesArray = allMemeImage.data.memes
        //const randomNumber = Math.floor(Math.random() * memesArray.length)
        const randomNumber = Math.floor(Math.random() * allMemeImage.length)
        // memesArray[randomNumber].url  <-- this line is incomplete!
        const url = allMemeImage[randomNumber].url
        setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
        }))
    }
      return (
        <main> 
         <div className="form">
            <input type="text" className="form--input"
             placeholder="Top text" value={meme.topText} onChange={handleChange} name="topText" />
            <input type="text" className="form--input"
             placeholder="Bottom text" value={meme.bottomText} onChange={handleChange} name="bottomText" />
            <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
        <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="memephoto"/>
        <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        </main>
    )
}