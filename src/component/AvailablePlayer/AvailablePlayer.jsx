import PropTypes from "prop-types";
import { IoFlag } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const AvailablePlayer = ({ availablePlayer, handleChoosePlayer }) => {
    // console.log(availablePlayer);

    const { id, name, country, image, batting_type, bidding_price, bowling_type, type } = availablePlayer;

    return (
        <div>
            <div className="border border-[#1313131A] rounded-2xl p-4 ">
                <div className=" h-[250px] pb-6">
                    <img className="w-full h-full rounded-2xl object-cover" src={image} alt="" />
                </div>

                <h2 className="flex gap-4 text-[#131313] text-xl font-semibold"><FaUser />{name}</h2>

                <div className="flex items-center justify-between  pb-4">
                    <h2 className="flex items-center gap-3 text-base text-[#131313B3] font-normal"><IoFlag className="h-[17.58px] w-[20px] text-[#131313B3]" />{country}</h2>
                    <h2 className="text-[#131313] text-sm font-normal bg-[#1313131A] px-4 py-2 rounded-lg">{type}</h2>
                </div>

                <div className="border-t border-[#1313131A] space-y-2 md:space-y-4 pt-4">
                    <h4 className="text-[#131313] text-base font-bold">Rating</h4>
                    <h2 className="flex justify-between">
                        <p className="text-[#131313] text-base font-bold">Batting Type</p>
                        {batting_type}
                    </h2>

                    <h2 className="flex justify-between pb-1">
                        <p className="text-[#131313] text-base font-bold">Bowling Type</p>
                        {bowling_type}
                    </h2>
                    <h2 className="flex items-center justify-between">
                        <p><span className="text-[#131313] text-base font-bold">Price: </span>{bidding_price}</p>
                        <button onClick={() => handleChoosePlayer(id)} className="text-[#131313] text-sm border border-[#1313131A] rounded-lg px-4 py-2 cursor-pointer">Choose Player</button>
                    </h2>
                </div>

            </div>
        </div>
    );
};

export default AvailablePlayer;

AvailablePlayer.propTypes = {
    availablePlayer: PropTypes.object.isRequired,
    handleChoosePlayer: PropTypes.func.isRequired,
}