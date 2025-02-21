import PropTypes from "prop-types";
import SelectedPlayers from "../selectedPlayers/selectedPlayers";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Buttons = ({ handleAvailableBtn, activeBtn, availablePlayers }) => {

    return (
        <div>

            <div className="text-right">
                <button onClick={() => handleAvailableBtn('available')}
                    className={activeBtn.status ? "text-[#131313] text-base font-bold px-7 py-3.5 rounded-l-xl bg-[#E7FE29] border-y border-l border-[#1313131A]" : "text-[#131313] text-base font-bold px-7 py-3.5 rounded-l-xl  border-y border-l border-[#1313131A]"} >Available
                </button>

                <button onClick={() => handleAvailableBtn('selected')}
                    className={activeBtn.status ? "text-[#13131399] text-base font-bold px-7 py-3.5 rounded-r-xl border-y border-r border-[#1313131A]" : "text-[#13131399] text-base font-bold px-7 py-3.5 rounded-r-xl border-y border-r border-[#1313131A] bg-[#E7FE29]"}>
                    Selected (0)
                </button>
            </div>

            {
                activeBtn.status ? <AvailablePlayers availablePlayers={availablePlayers}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>
            }
        </div>
    );
};

export default Buttons;

Buttons.propTypes = {
    handleAvailableBtn: PropTypes.func.isRequired,
    activeBtn: PropTypes.object.isRequired,
    availablePlayers: PropTypes.array,
}