import "./styles.css";
import React,{ useState } from "react"


const emojiDictionary=
{
  "💋":"kiss",
  "✌":"peace",
  "😉":"wink",
  "😎":"cool",
  "🤣":"LOL",
  "😂":"haHa",
  "❤":"heart",
  "😊":"smile",
  "✔":"checked",
  "👍":"Thumbs Up",
  "👏":"clapping",
  "😒":"unamused face"
};

var emojiArray=Object.keys(emojiDictionary);

export default function App() {

function emojiClickHandler(emoji)
{
var meaning=emojiDictionary[emoji];
setMeaning(meaning);
}

const [meaning,setMeaning]= useState("");

  function inputChangeHandler(event)
  {

var userInput=(event.target.value);
var meaning = emojiDictionary[userInput];

if(meaning===undefined)
{
  meaning="We don't have this emoji in out database";
}
setMeaning(meaning);
  }
  return (
    <div className="App">

      <h1> Inside<span className="offHeading">Out</span></h1>

       <br/>

      <input placeholder="Put emoji to know meaning" onChange={inputChangeHandler}/>
     
      <br/>
      <br/>

<h3>
  {emojiArray.map(function(emoji)
  {
    return <span onClick={()=>emojiClickHandler(emoji)} key={emoji}
    style={{cursor:"pointer"}}> {emoji}</span>;
  })}
</h3>

      <br/>
      <br/>
 
 <div className="meaning">
   {meaning}
 </div>

    </div>
  );
}
