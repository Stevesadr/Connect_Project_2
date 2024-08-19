'use client'

export default function Gift_card() {
    return(
        //Gift Card Page
        <>
        
            <div className="header-wallet h-[30rem] w-full">

                <div className="top container px-6 w-full pt-7">
                    <div className="right">
                        <img className="w-8" src="Wallet-page/search.png" alt="png" />
                    </div>

                    <div onClick={ChangeaccF} className="center container flex-col">
                        <h1 className="text-white font-bold text-[22px]">کارت هدیه</h1>
                        <img className="w-5" src="Wallet-page/arrow.png" alt="png" />
                    </div>

                    <div className="left">
                        <img className="w-10" src="Wallet-page/notif.png" alt="png" />
                    </div>
                </div>

                <div className="value container mt-5 flex-col font-bold text-white">
                    <h1 className="text-[37px] ">۲.۰۰۰.۰۰۰ </h1>
                    <h2 className="text-[21px]">میلیون ریال</h2>
                </div>

                <div className="items container mx-auto w-[90%] text-white mt-7">
                    <div className="add container flex-col gap-2">
                        <img className="w-16 rounded-full" src="Wallet-page/add.png" alt="png" />
                        <h1>شارژ حساب</h1>
                    </div>

                    <div className="add container flex-col gap-2">
                        <img className="w-16 rounded-full" src="Wallet-page/radio-icon-blue.png" alt="png" />
                        <h1>تسویه حساب</h1>
                    </div>

                    <div className="add container flex-col gap-2">
                        <img className="w-16 rounded-full" src="Wallet-page/card-icon.png" alt="png" />
                        <h1>افزودن حساب</h1>
                    </div>
                </div>

            </div>

            <div className="list relative bottom-[7rem] pt-3 w-full bg-white rounded-t-[26px]">
                <div className="line mx-auto w-[9%] bg-black h-[4px] mb-7"></div>

                <div className="item flex justify-start items-center gap-5 w-[90%] mx-auto my-7">
                    <img className="w-10" src="Wallet-page/goback-icon.png" alt="png" />
                    <div className="center">
                        <h1 className="font-bold text-right text-[20px]">دریافتی</h1>
                        <span>یکشنبه ، ۲۷ اسفند ۱٤۰۲ ۲۰:۱۳</span>
                    </div>
                    <button className="px-5 mr-auto rounded-[12px] py-2 bg-[#74D7A9] text-white">10000000 ریال</button>
                </div>

                <div className="item flex justify-start items-center gap-5 w-[90%] mx-auto my-7">
                    <img className="w-10" src="Wallet-page/goback-icon.png" alt="png" />
                    <div className="center">
                        <h1 className="font-bold text-right text-[20px]">دریافتی</h1>
                        <span>یکشنبه ، ۲۷ اسفند ۱٤۰۲ ۲۰:۱۳</span>
                    </div>
                    <button className="px-5 mr-auto rounded-[12px] py-2 bg-[#74D7A9] text-white">10000000 ریال</button>
                </div>

                <div className="item flex justify-start items-center gap-5 w-[90%] mx-auto my-7">
                    <img className="w-10" src="Wallet-page/radio-icon.png" alt="png" />
                    <div className="center">
                        <h1 className="font-bold text-right text-[20px]">تسویه حساب</h1>
                        <span>یکشنبه ، ۲۷ اسفند ۱٤۰۲ ۲۰:۱۳</span>
                    </div>
                    <button className="px-5 mr-auto rounded-[12px] py-2 bg-[#FF8B8B] text-white">10000000 ریال</button>
                </div>

                <div className="item flex justify-start items-center gap-5 w-[90%] mx-auto my-7">
                    <img className="w-10" src="Wallet-page/radio-icon.png" alt="png" />
                    <div className="center">
                        <h1 className="font-bold text-right text-[20px]">تسویه حساب</h1>
                        <span>یکشنبه ، ۲۷ اسفند ۱٤۰۲ ۲۰:۱۳</span>
                    </div>
                    <button className="px-5 mr-auto rounded-[12px] py-2 bg-[#FF8B8B] text-white">10000000 ریال</button>
                </div>

                <div className="item flex justify-start items-center gap-5 w-[90%] mx-auto my-7">
                    <img className="w-10" src="Wallet-page/wallet.png" alt="png" />
                    <div className="center">
                        <h1 className="font-bold text-right text-[20px]">واریز به حساب</h1>
                        <span>یکشنبه ، ۲۷ اسفند ۱٤۰۲ ۲۰:۱۳</span>
                    </div>
                    <button className="px-5 mr-auto rounded-[12px] py-2">10000000 ریال</button>
                </div>

                <div className="item flex justify-start items-center gap-5 w-[90%] mx-auto my-7">
                    <img className="w-10" src="Wallet-page/wallet.png" alt="png" />
                    <div className="center">
                        <h1 className="font-bold text-right text-[20px]">واریز به حساب</h1>
                        <span>یکشنبه ، ۲۷ اسفند ۱٤۰۲ ۲۰:۱۳</span>
                    </div>
                    <button className="px-5 mr-auto rounded-[12px] py-2">10000000 ریال</button>
                </div>

                <div className="item flex justify-start items-center gap-5 w-[90%] mx-auto my-7">
                    <img className="w-10" src="Wallet-page/radio-icon.png" alt="png" />
                    <div className="center">
                        <h1 className="font-bold text-right text-[20px]">تسویه حساب</h1>
                        <span>یکشنبه ، ۲۷ اسفند ۱٤۰۲ ۲۰:۱۳</span>
                    </div>
                    <button className="px-5 mr-auto rounded-[12px] py-2 bg-[#FF8B8B] text-white">10000000 ریال</button>
                </div>

                <div className="item flex justify-start items-center gap-5 w-[90%] mx-auto my-7">
                    <img className="w-10" src="Wallet-page/goback-icon.png" alt="png" />
                    <div className="center">
                        <h1 className="font-bold text-right text-[20px]">دریافتی</h1>
                        <span>یکشنبه ، ۲۷ اسفند ۱٤۰۲ ۲۰:۱۳</span>
                    </div>
                    <button className="px-5 mr-auto rounded-[12px] py-2 bg-[#74D7A9] text-white">10000000 ریال</button>
                </div>

            </div>
        
        </>
    )
}