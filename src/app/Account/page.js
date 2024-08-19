import Link from "next/link";
import Account from "../components/account";

export default function Home() {
    return(
        <main dir="rtl" className="container flex-col w-[100%] bg-[#F6F6F6]">

            <div className="header container flex-col bg-[#CEEABC] rounded-b-[24px]">
                <div className="container w-[90%] mt-5 pb-5">

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
            </div>

            <div className="benner title container w-[90%] h-[8rem] bg-[#E3E3E3] mt-3 rounded-[12px]">
                بنر تبلیغاتی
            </div>

            <Account/>

            <div className="meno container px-7 fixed bottom-0 py-2 bg-[#FFFFFF]">
                <Link href="/Home" className="container flex-col cursor-pointer">
                    <img className="w-[33px]" src="home.png" alt="png" />
                    <h1 className="text-[17px]">خانه</h1>
                </Link>
                <Link href="/Orders" className="container flex-col cursor-pointer">
                    <img className="w-[31px] mb-[2px]" src="sefareshat.png" alt="png" />
                    <h1>سفارشات</h1>
                </Link>
                <Link href="/Servise" className="container flex-col cursor-pointer">
                    <img className="w-[33px]" src="khadamat.png" alt="png" />
                    <h1>خدمات</h1>
                </Link>
                <Link href="/Wallet" className="container flex-col cursor-pointer">
                    <img className="w-[33px]" src="wallet.png" alt="png" />
                    <h1>کیف پول</h1>
                </Link>
                <Link href="/Account" className="container flex-col cursor-pointer">
                    <img className="w-[33px]" src="account-hover.png" alt="png" />
                    <h1>حساب</h1>
                </Link>
            </div>

        </main>
    )
}