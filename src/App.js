import "./styles.css";
import React, { useState } from "react";

var emojiDict = {
  "😊": "A warm smile",
  "😳": "shockinggg",
  "😔": "sad",
  "😂": "Really really funny",
  "❤️": "love",
  "😑": "annoyance",
  "💀": "signify death:of dignity",
  "😈": "When you have successfully manipulated",
  "🥺": "pleading face to gain pity and make you do a request",
  "🙂": "I may look calm but am really very angry right now"
};

var emojis = Object.keys(emojiDict);

export default function App() {
  var [meaning, setMeaning] = useState("or Choose an Emoji");
  var [emoji, setEmoji] = useState("");
  function onClickHandler(item) {
    console.log("clicked", item);
    var newEmoji = item;
    setEmoji(newEmoji);
    if (newEmoji in emojiDict) {
      setMeaning(emojiDict[newEmoji]);
    } else {
      setMeaning("Meaning not present in our dictionary");
    }
  }
  function onChangeHandler(event) {
    var newEmoji = event.target.value;
    setEmoji(newEmoji);
    console.log(event.target.value);
    if (newEmoji === "") {
      setMeaning("Please enter a valid emoji");
    } else {
      if (newEmoji in emojiDict) {
        setMeaning(emojiDict[newEmoji]);
      } else {
        setMeaning("Meaning not present in our dictionary");
      }
    }
  }

  return (
    <div className="App">
      <h1>Welcome to Emoji interpreter</h1>
      <h2>Enter an emoji to see its meaning</h2>
      <input
        onChange={onChangeHandler}
        style={{ padding: "1rem", borderRadius: "1rem", textAlign: "center" }}
      />
      <h2 style={{ fontSize: "2rem" }}>{emoji}</h2>
      <h2>{meaning}</h2>
      <ul>
        {emojis.map(function (item) {
          return (
            <li
              key={item}
              onClick={() => onClickHandler(item)}
              style={{ display: "inline", fontSize: "2rem", cursor: "pointer" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
