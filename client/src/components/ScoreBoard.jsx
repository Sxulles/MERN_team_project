import React from 'react'

const playerScore = [
    {rank: '#1', player: 'Player1', score: 990},
    {rank: '#2', player: 'Player2', score: 800},
    {rank: '#3', player: 'Player3', score: 740},
    {rank: '#4', player: 'Player4', score: 520}
];

export default function ScoreBoard({score}) {
  return (
    <div className='scoreBoardContainer'>
        <div className='leaderBoard'><span>LEADERBOARD</span></div>
        <div className="displayScore">Your Score: {score}</div>
            {playerScore.map((obj, id) => {
                return(
                <div className='playerScoreDiv' key={'SBDiv_'+id}>
                    <span className='SB_rank' key={'rank_'+id}>{obj.rank}</span>
                    <span className='SB_player' key={'player_'+id}><div className='avatar' key={'avatar_'+id}></div>{obj.player}</span>
                    <span className='SB_score' key={'score_'+id}>{obj.score}</span>     
                </div>)
            })}       
    </div>
  )
}
