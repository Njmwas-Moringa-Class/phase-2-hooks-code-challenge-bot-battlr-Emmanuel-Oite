import React, {useState, useEffect} from "react";
import BotCard from "./BotCard";
//useState hook to manage the state of bots in the array and UseEffect hook to fetch the bot data when to component mounts, setbots puts the fetched data into state//
function BotCollection() {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch("http://localhost:8002/bots");
        const data = await response.json();
        //check if data is in the correct format
        if (data && data.bots) {
          setBots(data.bots);
        } else {
          //show default value
          setBots([]);
        }
      } catch (error){
        console.error("could not fetch bots:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
