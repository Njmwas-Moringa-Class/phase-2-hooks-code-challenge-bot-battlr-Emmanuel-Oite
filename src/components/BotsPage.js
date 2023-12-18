import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then(setBots);
  }, []);

  function enlistBot(bot) {
    console.log(bot);
    setBots((prevBots) =>
      prevBots.map((b) => (b.id === bot.id ? { ...b, army: true } : b))
    );
  }

  function removeBot(bot) {
    console.log(bot);
    setBots((prevBots) =>
      prevBots.map((b) => (b.id === bot.id ? { ...b, army: false } : b))
    );
  }

  function deleteBot(bot) {
    setBots((prevBots) => prevBots.filter((b) => b.id !== bot.id));
  }

  return (
    <div>
      <YourBotArmy bots={bots.filter((b) => b.army)} removeBot={removeBot} deleteBot={deleteBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} deleteBot={deleteBot} removeBot={removeBot} />
    </div>
  );
}

export default BotsPage;
