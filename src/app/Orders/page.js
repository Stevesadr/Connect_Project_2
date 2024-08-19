import Link from "next/link"
import Orders from "../components/orders"
import { SelectProvider } from "../components/context/SelectContext"
export default function() {

    // Order page

    return(
        <main dir="rtl" className="container flex-col mx-auto">
            
            <div className="header container flex-col bg-[#CEEABC] rounded-b-[24px]">
                
                <div className="container w-[90%] mt-5">

                    <div className="right w-[12%]">
                        <img className="w-[100%] rounded-xl" src="person.png" alt="png" />
                    </div>

                    <div className="center w-[86%] container flex-col">
                        <h1 className="text-[20px] font-bold">دیزاین استور</h1>
                        <div className="container gap-2">
                            <img className="w-[15px] rounded-full" src="Account-page/location.png" alt="png" />
                            <h2 className="mt-[5px] text-[#363636]">تهران ،یوسف آباد</h2>
                        </div>
                    </div>

                    <div className="left w-[12%]">
                        <img className="rounded-full w-[100%]" src="Account-page/notif.png" alt="png"/>
                    </div>
                    
                </div>

                <div className="title gap-2 w-[90%] flex justify-start items-center mt-4">
                    <img className="w-7" src="download.png" alt="png" />
                    <h1 className="mt-5">تعداد سفارش های دریافتی :</h1>
                </div>

                <div className="information w-[90%] flex justify-start items-center gap-[65px] text-[17px] mt-6 mb-12">

                    <div className="day">
                        روز: 2 عدد
                    </div>

                    <div className="month">
                        ماه: 1200 عدد
                    </div>

                    <div className="year">
                        سال: 10 هزار
                    </div>

                </div>

            </div>

            <SelectProvider>
                <Orders/>
            </SelectProvider>

            <div className="meno container px-7 fixed bottom-0 py-2 bg-[#FFFFFF]">
                <Link href="/Home" className="container flex-col cursor-pointer">
                    <img className="w-[33px]" src="home.png" alt="png" />
                    <h1 className="text-[17px]">خانه</h1>
                </Link>
                <Link href="/Orders" className="container flex-col cursor-pointer">
                    <img className="w-[31px] mb-[2px]" src="sefareshat-hover.png" alt="png" />
                    <h1>سفارشات</h1>
                </Link>
                <Link href="/Servise" className="container flex-col cursor-pointer">
                    <img className="w-[33px]" src="Khadamat.png" alt="png" />
                    <h1>خدمات</h1>
                </Link>
                <Link href="/Wallet"  className="container flex-col cursor-pointer">
                    <img className="w-[33px]" src="wallet.png" alt="png" />
                    <h1>کیف پول</h1>
                </Link>
                <Link href="/Account" className="container flex-col cursor-pointer">
                    <img className="w-[33px]" src="account.png" alt="png" />
                    <h1>حساب</h1>
                </Link>
            </div>

        </main>
    )
}