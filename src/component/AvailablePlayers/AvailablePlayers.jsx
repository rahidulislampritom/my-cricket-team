import PropTypes from "prop-types";
import AvailablePlayer from "../AvailablePlayer/AvailablePlayer";

const AvailablePlayers = ({ availablePlayers, handleChoosePlayer }) => {

    return (
        <div>

            <div className="pb-8 md:pb-14 text-center md:text-left">
                <h3 className="text-[#131313] text-3xl font-bold ">Available Players</h3>
            </div>

            <div className="md:grid grid-cols-3 gap-6 ">
                {
                    availablePlayers.map((availablePlayer, idx) =>
                        <AvailablePlayer key={idx} availablePlayer={availablePlayer} handleChoosePlayer={handleChoosePlayer}>
                        </AvailablePlayer>)
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;

AvailablePlayers.propTypes = {
    availablePlayers: PropTypes.array,
    handleChoosePlayer: PropTypes.func.isRequired,
}  