import Link from "next/link"
import Servise_page from "../components/servise"
import { BtnContext, BtnProvider } from "../components/context/BtnContext"
import { SelectProvider } from "../components/context/SelectContext"

export default function Wallet() {

    //Servise Page

    return(
        <main dir="rtl">

            <BtnProvider>
                <SelectProvider>
                    <Servise_page/>
                </SelectProvider>
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
                    <img className="w-[33px]" src="Servise-page/servise-hover.png" alt="png" />
                    <h1>خدمات</h1>
                </Link>
                <Link href="/Wallet" className="container flex-col cursor-pointer">
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