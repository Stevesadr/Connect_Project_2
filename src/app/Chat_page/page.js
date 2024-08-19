import Chat from "../components/Chat";

export default function() {
    return(
        <main className="container flex-col" dir="rtl">

            <div className="bottom w-[90%] container gap-10 mt-7">

                <div className="right w-[40%] container gap-2">
                    <img className="w-[20px]" src="recently.png" alt="png" />
                    <h2>زمان گفتگو</h2>
                </div>

                <div className="left w-[60%] container">
                    <h2>۲۲ : ۱۰ :۲۲ ساعت باقی مانده </h2>
                </div>

            </div>

            <div className="end w-[90%] mx-auto mt-2">
                <div className="line mx-auto w-[90%] h-[5px] bg-[#E5E5E5] rounded-[14px]">
                    <div className="w-[30%] h-[5px] bg-[#FF8585] rounded-[14px] mr-auto"></div>
                </div>
            </div>

            <div className="w-[85%] font-bold mx-auto container flex-col h-[5rem] bg-[#E3E3E3] mt-4 rounded-[12px]">
                بنر تبلیغاتی
            </div>

            <div className="alert container w-[85%] mt-4 gap-2">
                <img className="w-6 mb-5" src="alert.png" alt="png" />
                <p className="text-[#EF3B3B] text-[13px] text-right">ارسال اطلاعات حساب بانکی و دریافت وجه خارج از کانکت یار باعث مسدود سازی دائمی حساب و جریمه نقدی خواهید شد.</p>
            </div>

            <div className="linee w-[90%] h-[1px] mt-6 mb-1"></div>


            <Chat/>


        </main>
    )
}