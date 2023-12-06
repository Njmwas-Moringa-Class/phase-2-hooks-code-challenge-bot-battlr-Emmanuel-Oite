import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotCard from "./BotCard";

function BotsPage() {
  const [allBots, setAllBots] = useState([]);

  useEffect(() => {
    // Fetch all bots data from the backend
    const fetchAllBots = async () => {
      try {
        const response = await fetch("http://localhost:8002/bots");
        const data = await response.json();
        setAllBots(data.bots);
      } catch (error) {
        console.error("Could not fetch all bots:", error);
      }
    };

    fetchAllBots();
  }, []);
  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={allBots}/>
    </div>
  )
}


export default BotsPage;
