import Mellat from "../components/wallet-components/bank"
import Link from "next/link"
import None_bank from "../components/wallet-components/none-bank"
import Gift_card from "../components/wallet-components/gift-card"
import { BtnProvider } from "../components/context/BtnContext"

export default function Wallet() {

    //Wallet page

    return(
        <main dir="rtl">

            <BtnProvider>
                <Mellat />
            </BtnProvider>


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
                    <img className="w-[33px]" src="Khadamat.png" alt="png" />
                    <h1>خدمات</h1>
                </Link>
                <Link href="/Wallet" className="container flex-col cursor-pointer">
                    <img className="w-[33px]" src="Wallet-page/wallet-hover.png" alt="png" />
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