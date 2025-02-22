import PropTypes from "prop-types";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const SelectedPlayers = ({ choosePlayer, handleRemovePlayer, handleAddMorePlayer, activeBtn }) => {
    console.log(choosePlayer);
    return (
        <div>
            <h1 className="text-[#131313] text-2xl md:text-3xl font-bold pb-5 md:pb-8"> Selected Player ({choosePlayer.length}/6)</h1>

            <div>
                {
                    choosePlayer.map((player, idx) => <SelectedPlayer key={idx} player={player} handleRemovePlayer={handleRemovePlayer}></SelectedPlayer>)

                }
            </div>


            <div className="flex justify-center md:justify-start">
                {
                    activeBtn.status ? <AvailablePlayers></AvailablePlayers> :
                        <div className="w-max border border-[#131313] rounded-xl p-1.5">
                            <button onClick={() => handleAddMorePlayer("available")} className="text-[#131313] text-base font-bold  px-5 py-3.5 rounded-xl bg-[#E7FE29] cursor-pointer">Add More Player</button>
                        </div>
                }
            </div>

        </div>
    );
};

export default SelectedPlayers;

SelectedPlayers.propTypes = {
    choosePlayer: PropTypes.object.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
    handleAddMorePlayer: PropTypes.func.isRequired,
    activeBtn: PropTypes.func.isRequired,
}