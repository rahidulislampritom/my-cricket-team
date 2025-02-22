import PropTypes from "prop-types";
import SelectedPlayers from "../selectedPlayers/selectedPlayers";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Buttons = ({ handleAvailableBtn, activeBtn, availablePlayers, handleChoosePlayer, choosePlayer,handleRemovePlayer,handleAddMorePlayer }) => {

    return (
        <div>

            <div className="text-center md:text-right pb-3 md:pb-0">
                <button onClick={() => handleAvailableBtn('available')}
                    className={activeBtn.status ? "text-[#131313] text-base font-bold px-7 py-3.5 rounded-l-xl bg-[#E7FE29] border-y border-l border-[#1313131A] cursor-pointer" : "text-[#131313] text-base font-bold px-7 py-3.5 rounded-l-xl  border-y border-l border-[#1313131A] cursor-pointer"} >Available
                </button>

                <button onClick={() => handleAvailableBtn('selected')}
                    className={activeBtn.status ? "text-[#13131399] text-base font-bold px-7 py-3.5 rounded-r-xl border-y border-r border-[#1313131A] cursor-pointer" : "text-[#13131399] text-base font-bold px-7 py-3.5 rounded-r-xl border-y border-r border-[#1313131A] bg-[#E7FE29] cursor-pointer"}>
                    Selected ({choosePlayer.length})
                </button>
            </div>

            {
                activeBtn.status ? <AvailablePlayers availablePlayers={availablePlayers} handleChoosePlayer={handleChoosePlayer}></AvailablePlayers> : <SelectedPlayers choosePlayer = {choosePlayer} handleRemovePlayer = {handleRemovePlayer} handleAddMorePlayer={handleAddMorePlayer} activeBtn={activeBtn}></SelectedPlayers>
            }


        </div>
    );
};

export default Buttons;

Buttons.propTypes = {
    handleAvailableBtn: PropTypes.func.isRequired,
    activeBtn: PropTypes.object.isRequired,
    availablePlayers: PropTypes.array.isRequired,
    handleChoosePlayer:PropTypes.func.isRequired,
    choosePlayer: PropTypes.object.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
    handleAddMorePlayer: PropTypes.func.isRequired

}