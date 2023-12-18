
import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot, enlistBot }) {
  const mapBots = bots.map((bot) => (
    <BotCard key={bot.id} bot={bot} removeBot={removeBot} deleteBot={deleteBot} enlistBot={enlistBot} />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {mapBots}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
