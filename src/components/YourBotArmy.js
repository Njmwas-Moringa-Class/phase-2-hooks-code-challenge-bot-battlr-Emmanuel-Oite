import React, { useState } from "react";
import BotCard from "./BotCard";

function YourBotArmy() {
  //your bot army code here...
  const [enlistedBots, setEnlistedBots] = useState([]);

  // Add function to enlist a bot
  const enlistBot = (bot) => {
    // Check if the bot is not already enlisted
    if (!enlistedBots.find((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  // Add function to discharge a bot
  const dischargeBot = (bot) => {
    // Remove the bot from the enlistedBots array
    const updatedEnlistedBots = enlistedBots.filter(
      (enlistedBot) => enlistedBot.id !== bot.id
    );
    setEnlistedBots(updatedEnlistedBots);
  };
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {enlistedBots.map((bot) => (
            <BotCard key={bot.id} bot={bot} onDischarge={dischargeBot} />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
