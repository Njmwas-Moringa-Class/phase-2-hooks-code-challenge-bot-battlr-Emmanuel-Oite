import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, deleteBot, removeBot }) {
  const mapBots = bots.map((bot) => (
    <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} deleteBot={deleteBot} removeBot={removeBot} />
  ));

  return (
    <div className="ui four column grid">
      <div className="row">
        {mapBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;


