'use client'

import { useState , useContext } from "react"
import { BtnContext } from "../context/BtnContext"
import Gift_card from "./gift-card"

    
export default function Mellat() {


    //Recive Style from BtnContext
    const { bg1 , color1 , bg_2 , color2 , bg3 , color3 , Changecolordefault , Changecolorgreen , Changecolordefault2 , Changecolorgreen2 ,Changecolordefault3 , Changecolorgreen3 } = useContext(BtnContext)


    // Page Default
    const [ list , setList ] = useState(true)

    // Page Items 
    const [ addmoney , setAddmoney ] = useState(false)
    const [ changeacc , setChangeacc ] = useState(false)
    const [ giveadopt , setGiveadopt ] = useState(false)
    const [ addacc , setAddacc ] = useState(false)

    const AddmoneyF = (e) => {
        e.preventDefault()
        setList(false)
        setAddacc(false)
        setAddmoney(true)
        setChangeacc(false)
        setGiveadopt(false)
    }

    const ChangeaccF = (e) => {
        e.preventDefault()
        setList(false)
        setAddacc(false)
        setAddmoney(false)
        setChangeacc(true)
        setGiveadopt(false)
    }

    const GiveadoptF = (e) => {
        e.preventDefault()
        setList(false)
        setAddacc(false)
        setAddmoney(false)
        setChangeacc(false)
        setGiveadopt(true)
    }

    const AddaccF = (e) => {
        e.preventDefault()
        setList(false)
        setAddacc(true)
        setAddmoney(false)
        setChangeacc(false)
        setGiveadopt(false)
    }

    const ComeBack = (e) => {
        e.preventDefault()
        setList(true)
        setAddacc(false)
        setAddmoney(false)
        setChangeacc(false)
        setGiveadopt(false)
        setCard(0)
        setLastpage(false)
    }



    const [ checktheme1 , setChecktheme1 ] = useState(1)
    const Changetheme = () => {
        if(checktheme1 == 1){
            Changecolorgreen()
            setChecktheme1(2)
            setChecktheme2(null)
            setDispatch(1)
        }
        else if(checktheme1 == 2){
            Changecolordefault()
            setChecktheme1(1)
            setChecktheme2(1)
            setDispatch(0)
        }
    }

    const [ checktheme2 , setChecktheme2 ] = useState(1)
    const Changetheme2 = () => {
        if(checktheme2 == 1){
            Changecolorgreen2()
            setChecktheme2(2)
            setChecktheme1(null)
            setDispatch(2)
        }
        else if (checktheme2 == 2) {
            Changecolordefault2()
            setChecktheme1(1)
            setChecktheme2(1)
            setDispatch(0)
        }
    }

    const [ dispatch , setDispatch ] = useState(0)
    const [ card , setCard ] = useState(0)
    const [ add_newcard , setAdd_newcard ] = useState(false)
    const [ lastpage , setLastpage ] = useState(false)
    const [ mellat , setMellat ] = useState(true)
    const [ gift , setGift ] = useState(false)

    const setGiftcardF = (e) => {
        e.preventDefault()
        setGift(true)
        setMellat(false)
    }
    const setMellatcardF = (e) => {
        e.preventDefault()
        setGift(false)
        setMellat(true)
    }


    return(
        <>
        
            {mellat && 
            
                <div className="header-wallet h-[30rem] w-full">

                    <div className="top container gap-24 w-full pt-7">
                        <div className="right">
                            <img className="w-8" src="Wallet-page/search.png" alt="png" />
                        </div>

                        <div onClick={ChangeaccF} className="center">
                            <img className="w-[120px] rounded-full cursor-pointer" src="Wallet-page/mellat.png" alt="png" />
                        </div>

                        <div className="left">
                            <img className="w-8" src="Wallet-page/notif.png" alt="png" />
                        </div>
                    </div>

                    <div className="value container mt-5 flex-col font-bold text-white">
                        <h1 className="text-[37px] ">۲.۰۰۰.۰۰۰ </h1>
                        <h2 className="text-[21px]">میلیون ریال</h2>
                    </div>

                    <div className="items container mx-auto w-[90%] text-white mt-7">
                        <div className="add cursor-pointer container flex-col gap-2">
                            <img onClick={AddmoneyF} className="w-16 rounded-full" src="Wallet-page/add.png" alt="png" />
                            <h1>شارژ حساب</h1>
                        </div>

                        <div className="add cursor-pointer container flex-col gap-2">
                            <img onClick={GiveadoptF} className="w-16 rounded-full" src="Wallet-page/radio-icon-blue.png" alt="png" />
                            <h1>تسویه حساب</h1>
                        </div>

                        <div className="add cursor-pointer container flex-col gap-2">
                            <img onClick={AddaccF} className="w-16 rounded-full" src="Wallet-page/card-icon.png" alt="png" />
                            <h1>افزودن حساب</h1>
                        </div>
                    </div>

                </div>

                ||
            
            gift &&

                <div className="header-wallet h-[30rem] w-full">

                <div className="top container px-6 w-full pt-7">
                    <div className="right">
                        <img className="w-8" src="Wallet-page/search.png" alt="png" />
                    </div>

                    <div onClick={ChangeaccF} className="cursor-pointer center container flex-col">
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
                        <h1>کارت هدیه</h1>
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

            }

            {
            
            list &&
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

                ||

            addmoney == true &&
                <div className="list relative bottom-[7rem] pt-3 w-full bg-white rounded-t-[26px]">
                    <div className="line mx-auto w-[9%] bg-black h-[4px] mb-7"></div>

                    <div className="title w-[90%] mx-auto my-5 container gap-2">
                        <img className="w-10 rounded-full" src="Wallet-page/wallet.png" alt="png" />
                        <h1 className="mt-1">شارژ حساب</h1>
                        <img onClick={ComeBack} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                    </div>

                    <div className="items w-[85%] mx-auto mt-2">
                        <label>مبلغ مورد نظر را وارد کنید :</label>
                        <input placeholder="2000000 میلیون ریال" className="login-input mt-2"/>
                        <div className="linee w-full h-[2px] mt-4"></div>
                        <button className="w-full mt-2 h-[3rem] text-white rounded-[12px] bg-[#AFC0FF]">پرداخت</button>
                    </div>


      

                </div>

                ||

            giveadopt == true &&
                <div className="modal-account overflow-y-scroll mb-20">

                    <div className="container-modal-account py-0 rounded-t-xl">
                        
                        <div className="header flex w-[100%] justify-start py-3 flex-col bg-[#CEEABC] rounded-b-[24px]">
                            <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                <div className="right flex gap-2 items-center">
                                    <img className="w-7" src="Wallet-page/radio.png" alt="png" />
                                    <h1 className="title mt-1"> تسویه حساب </h1>
                                </div>

                                <div className="left mr-auto">
                                    <img onClick={ComeBack} className="cursor-pointer rounded-full w-10" src="Account-page/arrow.png" alt="png"/>
                                </div>
                            
                            </div>
                        </div>

                        <div className="pr mt-7 w-[90%] mx-auto">
                            <h1 className="title text-right">برای برداشت یکی از گزینه های زیر را انتخاب کنید</h1>
                            <p className="paragraf text-right mt-2">توجه داشته باشید که مبلغ 10 هزار تومن باید درون کیف پول شما باقی بماند</p>
                        </div>

                        <div className="list flex w-[90%] mx-auto justify-center items-center gap-5 flex-col mt-10 mb-5">
                            <button onClick={Changetheme} style={{background:bg1 , borderBlockColor:color1}} className="flex flex-col  px-4 py-2 rounded-[12px] border-[2px] border-[#8d8d8d61]">
                                <div className="flex gap-3">
                                    <img className="tik" src="tik.png" alt="png"/>
                                    برداشت روزانه
                                </div>
                                <p className="text-right text-[15px] text-[#2b2b2bd6]">این نوع برداشت به صورت روزانه قابل انجام است و تا سقف 1 میلیون تومان قابل انجام میباشد </p>
                            </button>

                            <button onClick={Changetheme2} style={{background:bg_2 , borderBlockColor:color2}} className="flex flex-col  px-4 py-2 rounded-[12px] border-[2px] border-[#8d8d8d61]">
                                <div className="flex gap-3">
                                    <img className="tik" src="tik.png" alt="png"/>
                                    تسویه لحظه ای
                                </div>
                                <p className="text-right text-[15px] text-[#2b2b2bd6]">این برداشت به صورت آنی بوده و باید مبلغ برداشت شما بیشتر از 500 هزار تومان باشد </p>
                            </button>
                        </div>

                        <div className="pr mt-10 w-[90%] mx-auto">
                            <h1 className="title text-right">حساب مقصد</h1>
                            <p className="paragraf text-right mt-2">حسابی که قصد دارید مبلغ مورد نظر درون آن واریز شود را انتخاب کنید  و در صورت نیاز آن را وارد کنید</p>
                        </div>

                        <div className="cart container px-7 bottom-0 pt-3 pb-4 bg-[#FFFFFF]">
                    
                            <button className="flex py-3 justify-start items-center w-full px-4 rounded-[12px] border-[2px] border-[#8d8d8d61]">
                                <div className="flex gap-3 w-[30%]">
                                    <img className="tik" src="tik.png" alt="png"/>
                                    <img className="w-10 border-r-[2px] border-r-[#31313166] px-2" src="Wallet-page/mellat-icon.png" alt="png" />
                                </div>
                                <p className=" text-[15px] text-left w-[70%] text-[#2b2b2bd6]">IR  ۹۰۰۰۲۸۳٦۱٥٤۷۲۳۸۳۱</p>
                            </button>

                        </div>

                        <div className="btn h-[17rem]">
                            <button onClick={() => setAdd_newcard(true)} className="flex gap-2 justify-center items-center px-3 py-2 w-[10rem] rounded-[12px] text-white mr-[20px] bg-[#9AD07C] h-[3rem]">
                                <img className="w-5" src="Wallet-page/plus.png" alt="png" />
                                کارت جدید
                            </button>
                            <div className="linee w-full h-[2px] mt-14"></div>
                            <button onClick={() => setCard(dispatch)} className="mt-4 w-[90%] h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] container mx-auto">پرداخت</button>
                        </div>

                        {card == 1 &&
                            <div className="modal-account overflow-y-scroll mb-20">
                                <div className="container-modal-account py-0 rounded-t-xl">
                                    <div className="line mx-auto rounded-[8px] mt-4 w-[9%] bg-black h-[4px] mb-7"></div>
                                    
                                    <div className="title w-[90%] mx-auto my-5 container gap-2">
                                        <img className="w-10 rounded-full" src="Wallet-page/radio-icon-white.png" alt="png" />
                                        <h1 className="mt-1">تسویه حساب</h1>
                                        <img onClick={() => setCard(0)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                                    </div>

                                    <div className="input w-[90%] mx-auto">
                                        <h1 className="text-right font-bold text-[19px]">مبلغ مورد نظر را وارد کنید: </h1>
                                        <h2 className="text-[15px] my-2">سقف برداشت روزانه ۱ میلیون تومان است</h2>
                                        <input placeholder="2000000 میلیون ریال" type="text" className="login-input" />
                                    </div>

                                    <div className="linee w-full h-[2px] mt-7"></div>
                                    <button onClick={() => setLastpage(true)} className="mt-4 w-[90%] h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] container mx-auto">پرداخت</button>

                                    {lastpage && 

                                        <div className="modal-account overflow-y-scroll mb-20">
                                            <div className="container-modal-account py-0 rounded-t-xl">
                                                <div className="line mx-auto rounded-[8px] mt-4 w-[9%] bg-black h-[4px] mb-7"></div>
                                                
                                                <div className="title w-[90%] mx-auto my-5 container gap-2">
                                                    <img onClick={ComeBack} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                                                </div>

                                                <div className="banner container w-[90%] mx-auto">
                                                    <img className="w-[10rem]" src="Concat.png" alt="png" />
                                                </div>

                                                <h1 className="font-bold mx-auto text-[24px]">۲.۰۰۰.۰۰۰ میلیون ریال</h1>
                                                <h2 className="text-[20px] text-center mb-5">تا 3 روز دیگر به حساب شما واریز میشود</h2>
                                                
                                                <button className="border-[2px] mx-auto mt-2 bg-[#a8caba37] border-[#74D7A9] py-3  rounded-[12px] gap-3 container w-[55%]">
                                                    <img className="tik rounded-full" src="tik-green.png" alt="png"/>
                                                    تسویه موفق
                                                </button>

                                                <div className="list container flex-col w-[90%] mx-auto">
                                                    <div className="line flex items-center mx-auto py-4 w-full border-b-[2px] border-b-[#7e7e7e78] border-t-[2px] border-t-[#7e7e7e78] mt-10">
                                                        <h1 className="ml-auto text-[18px]">زمان : </h1>
                                                        <h2>13:14 جمعه ، 31 فروردین 1403</h2>
                                                    </div>

                                                    <div className="line flex items-center mx-auto py-4 w-full border-b-[2px] border-b-[#7e7e7e78]">
                                                        <h1 className="ml-auto text-[18px]">انتقال دهنده : </h1>
                                                        <h2>کانکت</h2>
                                                    </div>

                                                    <div className="line flex items-center mx-auto py-4 w-full border-b-[2px] border-b-[#7e7e7e78]">
                                                        <h1 className="ml-auto text-[18px]">روش انتقال : </h1>
                                                        <h2>تسویه حساب</h2>
                                                    </div>

                                                    <div className="line flex items-center mx-auto py-4 w-full border-b-[2px] border-b-[#7e7e7e78]">
                                                        <h1 className="ml-auto text-[18px]">مبدا : </h1>
                                                        <h2>6219861809384231</h2>
                                                    </div>

                                                    <div className="line flex items-center mx-auto py-4 w-full border-b-[2px] border-b-[#7e7e7e78]">
                                                        <h1 className="ml-auto text-[18px]">شماره مرجع : </h1>
                                                        <h2>41342342342112</h2>
                                                    </div>
                                                </div>

                                                <div className="linee w-full h-[2px] mt-10"></div>
                                                <button onClick={ComeBack} className="mt-4 w-[90%] h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] container mx-auto">ذخیره</button>

                                            </div>
                                        </div>

                                    }

                                </div>
                            </div>

                            ||

                        card == 2 &&
                            <div className="modal-account overflow-y-scroll mb-20">
                                <div className="container-modal-account py-0 rounded-t-xl">
                                    <div className="line mx-auto rounded-[8px] mt-4 w-[9%] bg-black h-[4px] mb-7"></div>
                                    
                                    <div className="title w-[90%] mx-auto my-5 container gap-2">
                                        <img className="w-10 rounded-full" src="Wallet-page/radio-icon-white.png" alt="png" />
                                        <h1 className="mt-1">تسویه حساب</h1>
                                        <img onClick={() => setCard(0)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                                    </div>

                                    <div className="input w-[90%] mx-auto">
                                        <h1 className="text-right font-bold text-[19px]">مبلغ مورد نظر را وارد کنید: </h1>
                                        <h2 className="text-[15px] my-2">مبلغ مورد نظر باید بالای ٥۰۰ هزار تومان باشد</h2>
                                        <input placeholder="2000000 میلیون ریال" type="text" className="login-input" />
                                    </div>

                                    <div className="linee w-full h-[2px] mt-7"></div>
                                    <button onClick={() => setLastpage(true)} className="mt-4 w-[90%] h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] container mx-auto">پرداخت</button>
                                    
                                    {lastpage && 

                                        <div className="modal-account overflow-y-scroll mb-20">
                                            <div className="container-modal-account py-0 rounded-t-xl">
                                                <div className="line mx-auto rounded-[8px] mt-4 w-[9%] bg-black h-[4px] mb-7"></div>
                                                
                                                <div className="title w-[90%] mx-auto my-5 container gap-2">
                                                    <img onClick={ComeBack} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                                                </div>

                                                <div className="banner container w-[90%] mx-auto">
                                                    <img className="w-[10rem]" src="Concat.png" alt="png" />
                                                </div>

                                                <h1 className="font-bold mx-auto text-[24px]">۲.۰۰۰.۰۰۰ میلیون ریال</h1>
                                                <h2 className="text-[20px] text-center mb-5">تا 3 روز دیگر به حساب شما واریز میشود</h2>
                                                
                                                <button className="border-[2px] mx-auto mt-2 bg-[#a8caba37] border-[#74D7A9] py-3  rounded-[12px] gap-3 container w-[55%]">
                                                    <img className="tik rounded-full" src="tik-green.png" alt="png"/>
                                                    تسویه موفق
                                                </button>

                                                <div className="list container flex-col w-[90%] mx-auto">
                                                    <div className="line flex items-center mx-auto py-4 w-full border-b-[2px] border-b-[#7e7e7e78] border-t-[2px] border-t-[#7e7e7e78] mt-10">
                                                        <h1 className="ml-auto text-[18px]">زمان : </h1>
                                                        <h2>13:14 جمعه ، 31 فروردین 1403</h2>
                                                    </div>

                                                    <div className="line flex items-center mx-auto py-4 w-full border-b-[2px] border-b-[#7e7e7e78]">
                                                        <h1 className="ml-auto text-[18px]">انتقال دهنده : </h1>
                                                        <h2>کانکت</h2>
                                                    </div>

                                                    <div className="line flex items-center mx-auto py-4 w-full border-b-[2px] border-b-[#7e7e7e78]">
                                                        <h1 className="ml-auto text-[18px]">روش انتقال : </h1>
                                                        <h2>تسویه حساب</h2>
                                                    </div>

                                                    <div className="line flex items-center mx-auto py-4 w-full border-b-[2px] border-b-[#7e7e7e78]">
                                                        <h1 className="ml-auto text-[18px]">مبدا : </h1>
                                                        <h2>6219861809384231</h2>
                                                    </div>

                                                    <div className="line flex items-center mx-auto py-4 w-full border-b-[2px] border-b-[#7e7e7e78]">
                                                        <h1 className="ml-auto text-[18px]">شماره مرجع : </h1>
                                                        <h2>41342342342112</h2>
                                                    </div>
                                                </div>

                                                <div className="linee w-full h-[2px] mt-10"></div>
                                                <button onClick={ComeBack} className="mt-4 w-[90%] h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] container mx-auto">ذخیره</button>

                                            </div>
                                        </div>

                                    }

                                </div>
                            </div>

                            ||
                        
                        add_newcard == true && 

                            <div className="modal-account overflow-y-scroll mb-20">
                                <div className="container-modal-account py-0 rounded-t-xl">
                                    <div className="line mx-auto rounded-[8px] mt-4 w-[9%] bg-black h-[4px] mb-7"></div>
                                    
                                    <div className="title w-[90%] mx-auto my-5 container gap-2">
                                        <img className="w-10 rounded-full" src="Wallet-page/cart.png" alt="png" />
                                        <h1 className="mt-1">افزودن حساب بانکی</h1>
                                        <img onClick={() => setAdd_newcard(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                                    </div>

                                    <div className="pr w-[90%] mx-auto ">
                                        برای افزودن حساب بانکی برای اطمینان بیشتر و طبق قانون نیاز است پس از وارد کردن مشخصات زیر احراز هویت کارت را انجام دهید 
                                    </div>

                                    <div className="inputs flex flex-col items-center gap-2 mt-5 w-[90%] mx-auto">

                                        <label className="pointer-input font-bold">شماره کارت خود را وارد کنید</label>
                                        <input className="login-input" type="text" />

                                        <label className="pointer-input font-bold">شماره شبا</label>
                                        <input className="login-input" type="text" />

                                        <div className="flex gap-2 items-center mt-4">
                                            <label className="ml-auto">تاریخ انقضای کارت :</label>
                                            <input className="w-[20%] h-[3rem] rounded-[12px] border-[#43434372] border-[2px] text-[30px]" type="number" />
                                            <input className="w-[20%] h-[3rem] rounded-[12px] border-[#43434372] border-[2px] text-[30px]" type="number" />
                                        </div>

                                        <div className="btn w-[90%] mx-auto">
                                            <div className="linee w-full h-[2px] mt-14"></div>
                                            <button onClick={() => setCard(dispatch)} className="mt-4 w-full h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] container mx-auto">احراز هویت</button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        }



                    </div>

                </div>

                ||

            addacc == true &&
                <div className="modal-account overflow-y-scroll mb-20">
                    <div className="container-modal-account py-0 rounded-t-xl">
                        <div className="line mx-auto rounded-[8px] mt-4 w-[9%] bg-black h-[4px] mb-7"></div>
                        
                        <div className="title w-[90%] mx-auto my-5 container gap-2">
                            <img className="w-10 rounded-full" src="Wallet-page/cart.png" alt="png" />
                            <h1 className="mt-1">افزودن حساب بانکی</h1>
                            <img onClick={ComeBack} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                        </div>

                        <div className="pr w-[90%] mx-auto ">
                            برای افزودن حساب بانکی برای اطمینان بیشتر و طبق قانون نیاز است پس از وارد کردن مشخصات زیر احراز هویت کارت را انجام دهید 
                        </div>

                        <div className="inputs flex flex-col items-center gap-2 mt-5 w-[90%] mx-auto">

                            <label className="pointer-input font-bold">شماره کارت خود را وارد کنید</label>
                            <input className="login-input" type="text" />

                            <label className="pointer-input font-bold">شماره شبا</label>
                            <input className="login-input" type="text" />

                            <div className="flex gap-2 items-center mt-4">
                                <label className="ml-auto">تاریخ انقضای کارت :</label>
                                <input className="w-[20%] h-[3rem] rounded-[12px] border-[#43434372] border-[2px] text-[30px]" type="number" />
                                <input className="w-[20%] h-[3rem] rounded-[12px] border-[#43434372] border-[2px] text-[30px]" type="number" />
                            </div>

                            <div className="btn w-[90%] mx-auto">
                                <div className="linee w-full h-[2px] mt-14"></div>
                                <button onClick={() => setCard(dispatch)} className="mt-4 w-full h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] container mx-auto">احراز هویت</button>
                            </div>

                        </div>
                    </div>
                </div>


                ||

            changeacc == true &&
            <div className="list relative bottom-[7rem] pt-3 w-full bg-white rounded-t-[26px]">
                <div className="line mx-auto w-[9%] bg-black h-[4px] mb-7"></div>

                <div className="title w-[90%] mx-auto my-5 container gap-2">
                    <img className="w-7 rounded-full" src="Wallet-page/goback-white.png" alt="png" />
                    <h1 className="mt-1">تعویض حساب</h1>
                    <img onClick={ComeBack} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                </div>

                <div className="items w-[85%] mx-auto mt-2">
                <div className="cart flex flex-col items-center gap-5 container px-7 bottom-0 pt-3 pb-4 bg-[#FFFFFF]">
                    
                    <button onClick={setMellatcardF} className="flex py-4 justify-start items-center w-full px-4 rounded-[12px] border-[2px] border-[#8d8d8d61]">
                        <div className="flex gap-3 w-[30%]">
                            <img className="tik" src="tik.png" alt="png"/>
                            <img className="w-10 border-r-[2px] border-r-[#31313166] px-2" src="Wallet-page/mellat-icon.png" alt="png" />
                        </div>
                        <p className=" text-[15px] text-left w-[70%] text-[#2b2b2bd6]">IR  ۹۰۰۰۲۸۳٦۱٥٤۷۲۳۸۳۱</p>
                    </button>

                    <button onClick={setGiftcardF} className="flex py-4 justify-start items-center w-full px-4 rounded-[12px] border-[2px] border-[#8d8d8d61]">
                        <div className="flex gap-3 w-[30%]">
                            <img className="tik" src="tik.png" alt="png"/>
                            <h1 className="text-[12px] mt-1">کارت هدیه</h1>
                        </div>
                        <p className=" text-[15px] text-left w-[70%] text-[#2b2b2bd6]">IR  ۹۰۰۰۲۸۳٦۱٥٤۷۲۳۸۳۱</p>
                    </button>

                    <button className="flex py-4 justify-start items-center w-full px-4 rounded-[12px] border-[2px] border-[#8d8d8d61]">
                        <div className="flex gap-3 w-[30%]">
                            <img className="tik" src="tik.png" alt="png"/>
                            <img className="w-10 border-r-[2px] border-r-[#31313166] px-2" src="Wallet-page/mellat-icon.png" alt="png" />
                        </div>
                        <p className=" text-[15px] text-left w-[70%] text-[#2b2b2bd6]">IR  ۹۰۰۰۲۸۳٦۱٥٤۷۲۳۸۳۱</p>
                    </button>

                </div>
                    <button onClick={ComeBack} className="w-full mt-2 h-[3rem] text-white rounded-[12px] bg-[#AFC0FF]">تایید</button>
                </div>
            </div>

            }
        
        </>
    )
}