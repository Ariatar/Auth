import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
   state = {
      odds: [],
      leagueName: "La Liga",
      rows: [],
      leagueId: "PD",
      leagues: {
         "La Liga": "PD",
         "Premier League": "PL",
         Eredivisie: "DED",
         "Ligue 1": "FL1",
         Bundesliga: "BL1",
         "Serie A": "SA",
      },
   };
   s;
   componentDidMount() {
      axios
         .get(`https://api.football-data.org/v2/competitions/PD/standings`, {
            headers: { "X-Auth-Token": "b7d52e61c66f4a0194be725042ad4359" },
         })

         .then((res) => {
            console.log(res.data.standings[0].table);

            this.setState({ odds: res.data.standings[0].table });
         });
   }
   render() {
      return (
         <div>
            <ul>
               {this.state.odds.map((odd) => (
                  <li key={odd.position}>{odd.team.name}</li>
               ))}
            </ul>
         </div>
      );
   }
}
