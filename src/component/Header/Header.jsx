import logo from "../../assets/logo.png"
import cover from "../../assets/bg-shadow.png"
import cricket from "../../assets/banner-main.png"
import { MdStars } from "react-icons/md";
import PropTypes from "prop-types";

const Header = ({ handleFreeCredit, freeCredit }) => {




    return (
        <div className="mt-4 md:mt-12">

            <section className="mb-10">
                <div className="flex items-center  justify-around md:justify-between mb-8 ">
                    <div>
                        <img src={logo} alt="" />
                    </div>


                    <div className="flex items-center gap-12">
                        <ul className="hidden md:flex gap-12 text-[#131313B3] text-base font-normal">
                            <li><a href="">Home</a></li>
                            <li><a href="">Fixture</a></li>
                            <li><a href="">Teams</a></li>
                            <li><a href="">Schedules</a></li>

                        </ul>
                        <div className="border-[1px] border-[#1313131A] rounded-xl px-5 py-4 bg-[#ffffff00] ">
                            <h2 className="flex items-center gap-2.5 text-[#131313] font-semibold">{freeCredit}    Coin <MdStars className="text-[#F39E09]" /></h2>
                        </div>
                    </div>

                </div>

                <div className="bg-cover bg-center bg-no-repeat bg-black  rounded-xl"
                    style={{ backgroundImage: `url(${cover})` }}>

                    <div className="flex flex-col items-center p-4 md:p-16 space-y-3 md:space-y-5">
                        <div>
                            <img src={cricket} alt="" />
                        </div>

                        <h2 className="text-[#FFFFFF] text-xl  md:text-4xl  font-bold text-center">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                        <h6 className="text-[#FFFFFFB3] text-sm md:text-2xl font-medium text-center">Beyond Boundaries Beyond Limits</h6>
                        <div className="border-[1px] border-solid border-[#e7fe29] p-2 rounded-[16px] ">
                            <button onClick={() => handleFreeCredit()} className="text-[#131313] text-base font-bold bg-[#E7FE29] px-5 py-3.5 rounded-xl ">Claim Free Credit</button>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

Header.propTypes = {
    handleFreeCredit: PropTypes.func.isRequired,
    freeCredit: PropTypes.number.isRequired
}

export default Header;