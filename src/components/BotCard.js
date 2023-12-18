// BotCard.js
import React, { useState } from "react";

const BotCard = ({ bot, enlistBot, removeBot, deleteBot }) => {
  const [enlisted, setEnlisted] = useState(false);

  const handleEnlistClick = () => {
    if (!enlisted && typeof enlistBot === "function") {
      console.log(`Enlisting bot: ${bot.name}`);
      setEnlisted(true);
      enlistBot(bot);
    }
  };

  const handleDischargeClick = () => {
    console.log(`Discharging bot: ${bot.name}`);
    removeBot(bot);
  };

  const handleDeleteClick = () => {
    console.log(`Deleting bot: ${bot.name}`);
    deleteBot(bot);
  };

  return (
    <div className={`ui column ${enlisted ? "enlisted" : ""}`}>
      <div className="ui card" key={bot.id} onClick={handleEnlistClick}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <button className={`ui mini red button ${enlisted ? "" : "hidden"}`} onClick={handleDischargeClick}>
              x
            </button>
            <button className="ui mini red button" onClick={handleDeleteClick}>
              Delete
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
