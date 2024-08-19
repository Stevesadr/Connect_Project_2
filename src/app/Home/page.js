import Link from "next/link";
import Home_modals from "../components/home";
import { SelectProvider } from "../components/context/SelectContext";
import { BtnProvider } from "../components/context/BtnContext";

export default function Home() {
    return(
        <main dir="rtl" className="container flex-col w-[100%] bg-[#F6F6F6]">

            <div className="header container w-[90%] mt-5">

                <div className="right w-[12%]">
                    <img className="w-[100%]" src="person.png" alt="png" />
                </div>

                <div className="center w-[86%] container flex-col">
                    <h1 className="text-[20px] font-bold">دیزاین استور</h1>
                    <div className="container gap-2">
                        <img className="w-[15px]" src="location.png" alt="png" />
                        <h2 className="mt-[5px] text-[#363636]">تهران ،یوسف آباد</h2>
                    </div>
                </div>

                <div className="left w-[12%]">
                    <img className="rounded-full w-[100%]" src="notif.png" alt="png"/>
                </div>

            </div>

            <div className="banner-home w-[90%] mt-12">
                
                <div className="top-picture container w-full h-[11rem] rounded-[16px] bg-green-400 py-4">
                    
                    <div className="right px-3 w-[60%]">
                        <div className="flex justify-start items-center gap-2">
                            <img className="w-[50px] rounded-full" src="purs.png" alt="png" />
                            <h1 className="text-[20px]">میزان موجودی</h1>
                        </div>
                        <div className="items container flex-col mt-7">
                            <h2 className="text-[15px] text-[#363636]">در حال حاضر درصد رشدی وجود ندارد</h2>
                            <h1 className="font-bold text-[30px]">حساب خالی است </h1>
                        </div>
                    </div>

                    <div className="left w-[40%] flex justify-end mb-[100px] px-4">
                        <img className="w-[15px] cursor-pointer" src="meno.png" alt="png" />
                    </div>
                
                </div>

                <div className="bottom mt-4 container gap-4">
                   
                    <div className="right container flex-col h-[8rem] rounded-[16px] w-[45%] bg-[#FFEAC2]">
                        
                        <div className="top container gap-2">
                            <img className="w-[15px]" src="fire.png" alt="png" />
                            <h2 className="text-[15px] mt-2">امتیاز فروشگاه :</h2>
                        </div>

                        <div className="center container gap-7 mt-2">
                            <img className="w-[30px]" src="none-sticker.png" alt="png" />
                            <h1 className="font-bold text-[30px]">خالی</h1>
                        </div>

                        <div className="bottom flex justify-start items-start ml-auto mr-[35px]">
                            <h2>فعالیتی نداری؟</h2>
                        </div>
                    
                    </div>

                    <div className="left w-[55%] h-[8rem] bg-[#DFF3D5] rounded-[16px] py-3">
                        
                        <div className="top flex justify-start items-center ml-auto mr-[20px] gap-2">
                            <img className="w-[20px]" src="date.png" alt="png" />
                            <h2 className="text-[15px] mt-1">تاریخ امروز</h2>
                            <img className="mr-auto w-[10px] ml-4 rounded-full" src="meno.png" alt="png" />
                        </div>

                        <div className="center flex justify-start items-start ml-auto mr-[20px] gap-7 mt-2">
                            <h1 className="font-bold text-[25px]">1402/12/26</h1>
                        </div>

                        <div className="bottom flex justify-start items-start ml-auto mr-[20px]">
                            <h2>شنبه 14ام رمضان</h2>
                        </div>
                    
                    </div>
                
                </div>

            </div>

            <div className="sefareshat container flex-col mt-16 w-[90%]">

                <div className="title flex items-center ml-auto mr-4 gap-2 ">
                    <img className="w-[48px]" src="sefareshat-rooz.png" alt="png" />
                    <h1>سفارشات روز</h1>
                </div>

                <div className="items mb-20">

                    <div className="picture container flex-col gap-2 mt-7">
                        <img className="w-[80%]" src="thinking-picture.png" alt="png" />
                    </div>

                    <div className="items mt-7 container flex-col">
                        <h1 className="title">صندوق سفارشات روز شما خالی می باشد "</h1>
                        <p className="paragraf text-[#363636] mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                        <button className="p-3 mt-5 rounded-[16px] border-[2px] border-[#363636]">
                            مشاهده صندوق
                        </button>
                    </div>

                </div>

            </div>
            <BtnProvider>
                <SelectProvider>
                    <Home_modals/>
                </SelectProvider>
            </BtnProvider>

            <div className="meno container px-7 fixed bottom-0 py-2 bg-[#FFFFFF]">
                <Link href="/Home" className="container flex-col cursor-pointer">
                    <img className="w-[33px]" src="home-hover.png" alt="png" />
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