import cover from "../../assets/bg-shadow.png"
import logo from "../../assets/logo-footer.png"

const Footer = () => {
    return (
        <div className=" mt-40  md:mt-60  ">
            <div className="">

                <div className="max-w-7xl mx-auto relative ">
                    <div style={{ backgroundImage: `url(${cover})` }} className="w-full  absolute top-[-160px] bg-white  rounded-2xl" >
                        <div className="p-10 md:p-20  text-center space-y-2">
                            <h2 className="text-[#131313] text-2xl md:text-4xl font-bold">Subscribe to our Newsletter</h2>
                            <p className="text-[#131313B3] text-base md:text-lg font-medium">Get the latest updates and news right in your inbox!</p>

                            <input className="px-7 py-4 border border-[#13131326] rounded-xl outline-none" type="text" placeholder="Enter your email" />
                            <button className="text-[#040D11] text-base font-bold  bg-radial from-orange-400 from-60% to-fuchsia-700 ml-4 px-7 py-4 rounded-xl border border-[#13131326]">Subscribe </button>

                        </div>

                    </div>
                </div>

            </div>


            <div className="pt-70 md:max-w-7xl mx-auto ">

                <div className="flex  justify-center pb-10">
                    <img src={logo} alt="" />
                </div>

                <div className="md:flex justify-between space-y-6 text-center md:text-left p-3 md:p-0">

                    <div className="space-y-2 text-center">
                        <h2 className="text-[#FFFFFF] text-lg font-semibold">About Us</h2>
                        <p className="md:w-[291px] text-[#FFFFFF99] text-base font-normal">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-[#FFFFFF] text-lg font-semibold">Quick Links </h2>
                        <ul className="text-[#FFFFFF99] text-base font-normal ">
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-[#FFFFFF] text-lg font-semibold">Subscribe</h2>
                        <p className="md:w-[291px] text-[#FFFFFF99] text-base font-normal">Subscribe to our newsletter for the latest updates.</p>
                        <input className="px-7 py-4 border border-[#13131326] rounded-xl md:rounded-r-none outline-none bg-white" type="text" placeholder="Enter your email" />
                        <button className="text-[#040D11] text-base font-bold  bg-radial from-orange-400 from-60% to-fuchsia-700  px-7 py-4 rounded-xl md:rounded-l-none rounded-l-0 border border-[#13131326]">Subscribe </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;

// 