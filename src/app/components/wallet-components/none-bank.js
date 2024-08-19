export default function None_bank() {
    return(
        //With out bank account page
        <>
            <div className="header-wallet h-[30rem] w-full">

                <div className="top container gap-24 w-full pt-7">
                    <div className="right">
                        <img className="w-8" src="Wallet-page/search.png" alt="png" />
                    </div>

                    <div className="center">
                        <h1 className="text-[22px] text-white mt-2">کیف پول</h1>
                    </div>

                    <div className="left">
                        <img className="w-8" src="Wallet-page/notif.png" alt="png" />
                    </div>
                </div>

                <div className="value container mt-5 flex-col font-bold text-white">
                    <img className="w-14" src="Wallet-page/ques.png" alt="png" />
                    <h1 className="text-[22px] ">حسابی وارد نشده است</h1>
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

                <img className="w-[90%] mx-auto" src="Wallet-page/picture.png" alt="png" />

                <h1 className="text-[22px] font-bold mt-4">تا این لحظه تراکنشی وجود نداشته است “</h1>
                <p className="w-[80%] mt-2 mx-auto">
                    میتوانید با زدن بروی دکمه شارژ حساب ، اولین تراکنش کیف پول خود را انجام دهید 
                </p>
            </div>
        
        </>
    )
}