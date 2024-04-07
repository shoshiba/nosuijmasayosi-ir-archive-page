import React from "react";
import { start } from "repl";

interface DetailsTournamentProps {
  tournamentNumber: string
  hosi9Music: string
  hosi10Music: string
  hosi11Music: string
  hosi12Music: string
}


const DetailTournament: React.FC<DetailsTournamentProps> = ({
  tournamentNumber,
  hosi9Music,
  hosi10Music,
  hosi11Music,
  hosi12Music
}) => {

  const acutualTounamentNumber = {
    "0" : 1,
    "1" : 2,
    "2" : 3,
    "3" : 4,
    "4" : 5,
    "5" : 6,
    "6" : 7,
    "7" : 8,
    "8" : 8.5,
    "9" : 9,
    "10" : 10,
    "11" : 11
  }

  const startEndDate = {
    "0" : "2024/02/01~2024/02/28",
    "1" : "2024/03/01~2024/03/31",
    "2" : "2024/04/01~2024/04/30",
    "3" : "2024/05/01~2024/05/31",
    "4" : "2024/06/01~2024/06/30",
    "5" : "2024/07/01~2024/07/31",
    "6" : "2024/08/01~2024/08/31",
    "7" : "2024/09/01~2024/09/30",
    "8" : "2024/10/01~RESIDENT稼働終了",
    "9" : "2024/01/01~2024/01/31",
    "10" : "2024/02/01~2024/02/29",
    "11" : "2024/03/01~2024/03/31",

    
  }

  return (
    <div>
      <h1 className="text-3xl underline">
        第{acutualTounamentNumber[tournamentNumber]}回脳筋正義IR結果
        <br />
      </h1>
      [開催期間]
      <br />
      {startEndDate[tournamentNumber]}
      <br />
      [課題曲]
      <br />
      ☆9: {hosi9Music}
      <br />
      ☆10: {hosi10Music}
      <br />
      ☆11: {hosi11Music}
      <br />
      ☆12: {hosi12Music}
      <br />
    </div>
  );
};

export default DetailTournament;
