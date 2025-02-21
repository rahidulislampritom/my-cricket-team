import PropTypes from "prop-types";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ choosePlayer,handleRemovePlayer }) => {
    console.log(choosePlayer);
    return (
        <div>
            <h1> Selected Player ({choosePlayer.length}/6)</h1>

            <div className="">
                {
                    choosePlayer.map((player,idx)=> <SelectedPlayer key={idx} player={player} handleRemovePlayer={handleRemovePlayer}></SelectedPlayer>)

                }
            </div>
        </div>
    );
};

export default SelectedPlayers;

SelectedPlayers.propTypes = {
    choosePlayer: PropTypes.object.isRequired,
    handleRemovePlayer:PropTypes.func.isRequired
}