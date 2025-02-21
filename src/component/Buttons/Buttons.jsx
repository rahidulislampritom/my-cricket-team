const Buttons = ({ handleAvailableBtn, activeBtn }) => {
    return (
        <div>

            <div>
                <button onClick={() => handleAvailableBtn('available')}
                    className={activeBtn.status ? "text-[#131313] text-base font-bold px-7 py-3.5 rounded-l-xl bg-[#E7FE29] border-y border-l border-[#1313131A]" : "text-[#131313] text-base font-bold px-7 py-3.5 rounded-l-xl  border-y border-l border-[#1313131A]"} >Available
                </button>

                <button onClick={() => handleAvailableBtn('selected')}
                    className={activeBtn.status ? "text-[#13131399] text-base font-bold px-7 py-3.5 rounded-r-xl border-y border-r border-[#1313131A]" : "text-[#13131399] text-base font-bold px-7 py-3.5 rounded-r-xl border-y border-r border-[#1313131A] bg-[#E7FE29]"}>
                    Selected (0)
                </button>
            </div>
        </div>
    );
};

export default Buttons;