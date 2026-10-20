import { useState } from "react";

export default function team() {
    const [team, setTeam] = useState(0);



    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleremove = () => {
        // const newTeam=team-1; or
        setTeam(team - 1);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }




    return (
        <div style={teamStyle}>
            <h3>player:{team}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleremove}>remove</button>

        </div>
    )
}