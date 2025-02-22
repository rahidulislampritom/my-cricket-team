import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayer = ({ player, handleRemovePlayer }) => {
    const { id, image, name, role } = player;
    return (
        <div>
            <div className="flex items-center justify-between border border-[#1313131A] p-4 rounded-2xl mb-6">
                <div className="md:flex items-center gap-6">
                    <div className="w-[80px] pb-3 md:pb-0">
                        <img className="rounded-lg" src={image} alt="" />
                    </div>
                    <div>
                        <h2 className="text-[#131313] md:text-2xl font-semibold ">{name}</h2>
                        <p className="text-[#13131399] text-base font-normal ">{role}</p>
                    </div>
                </div>

                <div>
                    <button onClick={() => handleRemovePlayer(id)}><RiDeleteBin6Line className="text-[#F14749] text-xl" /></button>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;

SelectedPlayer.propTypes = {
    player: PropTypes.object.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
}