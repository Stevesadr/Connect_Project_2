'use client'
import { useContext, useState } from "react"
import { SelectContext } from "./context/SelectContext"
import Link from "next/link"

export default function Servise_page() {


    //Servise Page


    // Show Unik items
    const [header1 , setHeader1] = useState(true)
    const [offer , setOffer] = useState(false)
    const [offer2 , setOffer2] = useState(false)
    const [newservise , setNewservise] = useState(false)
    const [payed , setPayed] = useState(false)
    const [payed2 , setPayed2] = useState(false)

    //Recive the style info From "SelectContext"
    const { bg , bg2 , Changebgright , Changebgleft } = useContext(SelectContext)
    
    //Handle Click buttons "Change style & Change info"
    const [ checkfilter1 , setCheckfilter1 ] = useState(true)
    const [ checkfilter2 , setCheckfilter2 ] = useState(false)
    const [ checkfilter3 , setCheckfilter3 ] = useState(false)

    const [ icons , setIcons ] = useState(false)

    const Check = (e) => {
        e.preventDefault()
        setNewservise(false)
        setPayed2(true)
    }

    const Changepage3 = (e) => {
        e.preventDefault()
        setCheckfilter1(false)
        setCheckfilter2(false)
        setCheckfilter3(true)
    }

    const [ span , setSpan ] = useState("غیر فعال")

    const imges = [
        {src:'Servises-icons/Screenshot (305).png', title: 'خدمات منزل'  , id:1},
        {src:'Servises-icons/Screenshot (306).png', title: 'اینترنتی' , id:2},
        {src:'Servises-icons/Screenshot (308).png', title: 'جزوه' , id:4},
        {src:'Servises-icons/Screenshot (309).png', title: 'بیمه خوردرو' , id:5},
        {src:'Servises-icons/Screenshot (310).png', title: 'مرسوله', id:6},
        {src:'Servises-icons/Screenshot (311).png', title: 'نرم افزار', id:7},
        {src:'Servises-icons/Screenshot (312).png', title: 'قبوض'  , id:8},
        {src:'Servises-icons/Screenshot (313).png', title: 'خرید بلیط' , id:9},
        {src:'Servises-icons/Screenshot (314).png', title: 'تایپ', id:10},
        {src:'Servises-icons/Screenshot (315).png', title: 'ترجمه' , id:11},
        {src:'Servises-icons/Screenshot (316).png', title: 'ابلاغیه'  , id:12},
        {src:'Servises-icons/Screenshot (317).png', title: 'تحقیق'  , id:13},
        {src:'Servises-icons/Screenshot (318).png', title: 'ثنا' , id:14},
        {src:'Servises-icons/Screenshot (319).png', title: 'چک' , id:15},
        {src:'Servises-icons/Screenshot (320).png', title: 'تسهیلات' , id:16},
        {src:'Servises-icons/Screenshot (321).png', title: 'سایر موارد' , id:17},
    ]


    const Clickhandler_left = (e) => {
        e.preventDefault()
        Changebgleft()
        setCheckfilter1(true)
        setCheckfilter2(false)
        setHeader1(true)
    }

    const Clickhandler_right = (e) => {
        e.preventDefault()
        Changebgright()
        setCheckfilter1(false)
        setCheckfilter2(true)
        setHeader1(false)
    }

    const [ on , setOn ] = useState(false)

    return(
        <>
            
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
                
                {header1 &&

                    <>
                        <div className="title gap-2 w-[90%] flex justify-start items-center mt-4">
                            <h1 className="mt-5">درخواست های ارسال شده :</h1>
                        </div>

                        <div className="information px-4 w-[90%] flex justify-start items-center gap-[65px] text-[17px] mt-6 mb-12">

                            <div className="number">
                                کل خدمات : 1
                            </div>

                            <div className="number mr-auto">
                                دارای تخفیف : 5
                            </div>

                        </div>
                    </>

                    ||

                    <>
                        <div className="title gap-2 w-[90%] flex justify-start items-center mt-4">
                            <h1 className="mt-5">درخواست های ارسال شده :</h1>
                        </div>

                        <div className="information w-[90%] flex justify-start items-center gap-[65px] text-[17px] mt-6 mb-12">

                            <div className="number">
                                65 عدد
                            </div>

                            <div className="button mr-auto">
                                <button onClick={Changepage3} className="px-8 py-1 rounded-[12px] border-[2px] border-[#3b3b3bb3]">مشاهده </button>
                            </div>

                        </div>
                    </>
                
                }


            </div>

            <div className="search w-[90%] mx-auto container relative bottom-[22px]">
                <div className="cursor-pointer w-[3rem] h-[3rem] bg-white border-[#363636] border-[1px] border-l-0 rounded-r-[12px] container">
                    <img className="w-[2rem] h-[2rem]" src="search.png" alt="png" />
                </div>
                <input placeholder="جست و جوی آگهی ..." className="w-[80%] h-[3rem] text-[20px] px-2 border-[#363636] border-[1px] rounded-r-none rounded-[12px] border-solid border-r-0" type="text" />
            </div>

            <div className="items w-[90%] mx-auto container flex-col mt-4">


                {
                checkfilter1 &&

                    <div className="cards mb-[5rem] w-[90%] container flex-col">
                        
                        <div className="titr container mb-4 gap-2">
                            <img className="w-7 " src="recently.png" alt="png" />
                            <h1 className="text-[17px] mt-1">لیست خدمات تخفیف</h1>
                            <img className="w-[11rem] mt-1" src="line.png" alt="png" />
                        </div>

                        <div className="buttons w-[100%] mx-auto flex justify-center items-center h-[5rem] rounded-[12px] bg-[#EFEFEF]">
                            <button onClick={Clickhandler_left} style={{background:bg}} className="transition-all w-[45%] h-[4rem] text-[19px] px-2 rounded-[8px]">خدمات فعال</button>
                            <button onClick={Clickhandler_right} style={{background:bg2}} className="transition-all w-[45%] h-[4rem] text-[19px] px-2 rounded-[8px]">لیست خدمات</button>
                        </div>

                        <div onClick={() => setOffer(true)} className="card rounded-xl mt-10 text-[#363636] flex flex-col w-[97%] mx-auto">
                            <div className="top flex items-center">
                                <div className="right ml-auto flex items-center gap-2">
                                    <img className="w-7" src="Servise-page/person-online.png" alt="png" />
                                    <h1>#P4252W1</h1>
                                </div>
                                <div className="left flex items-center gap-2">
                                    <img className="w-5" src="Servise-page/scan.png" alt="png" />
                                    <h1 className="bg-[#E5E9EB] px-2 py-[2px] rounded-xl">1</h1>
                                </div>
                            </div>

                            <div className="pr mt-7 pb-2">
                                <h1 className="title text-right">بیمه خودرو</h1>
                                <p className="text-[#363636] text-right" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>
                            </div>

                            <div className="linee w-[90%] h-[2px] mb-3 mt-2"></div>

                            <div className="offer flex flex-col gap-5">
                                <div className="w-full flex items-center">
                                    <h1>مقدار تخفیف ثبت شده</h1>
                                    <div className="bg-[#FE7B5D] mr-auto text-white px-6 py-[3px] rounded-[12px]">65 %</div>
                                </div>
                                <div className="w-full flex items-center">
                                    <h1>مدت زمان تخفیف</h1>
                                    <div className="mr-auto mx-3">24 ساعت</div>
                            </div>

                            <div className="linee w-[90%] h-[2px] mb-3 "></div>
                            
                            <div className="time container  gap-2">
                                <img className="w-6" src="Servise-page/watch.png" alt="png" />
                                <h1>در انتظار تایید</h1>
                            </div>

                            <div className="btn">
                                <button className="w-full h-[3rem] rounded-[12px] bg-[#AFC0FF] text-white">لغو</button>
                            </div>

                        </div>

                        </div>

                        <div className="linee w-full h-[2px] mt-10"></div>
                        <div className="container mt-4 gap-3">
                                <img className="w-6 rotate-90" src="dot-green.png" alt="png" />
                                <h1 className="text-[20px] font-bold mt-2">انجام شده ها</h1>
                                <img className="w-6" src="dot-green.png" alt="png" />
                        </div>

                        <div className="card mt-7  rounded-[12px] w-[90%] mx-auto ">
                            <div className="top border-b-[#616161a3] pb-3 border-b-[1px] flex gap-2 items-center">
                                
                                <img className="w-20" src="Servise-page/picture.png" alt="png"/>
                                
                                <div className="titr">
                                    <h1 className="text-right text-[20px] font-bold">بیمه خودرو</h1>
                                    <p className="text-right text-[#616161a3]">خدماتی</p>
                                </div>
                                
                                <div className="left mr-auto">
                                    <div>
                                        <label class="switch">
                                            <input onClick={() => span == "غیر فعال" && setSpan("فعال") || span == "فعال" && setSpan("غیر فعال")} className="input" type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <h1 className="text-[#616161a3] mt-1">{span}</h1>
                                </div>
                            
                            </div>

                            <div className="offer my-3 flex flex-col gap-5">
                                <div className="w-full flex items-center">
                                    <h1>تعداد دریافت آگهی</h1>
                                    <div className=" mr-auto mx-3 font-bold py-[3px] rounded-[12px]">20</div>
                                </div>
                                <div className="w-full flex items-center">
                                    <h1>تعداد انجام شده</h1>
                                    <div className="mr-auto mx-3 font-bold">20</div>
                                </div>
                            </div>

                            <div className="offer border-t-[#8585855f] py-2 border-t-[2px] my-3 flex flex-col gap-5">
                                <div className="w-full flex items-center">
                                    <h1>آخرین تخفیف اعمال شده</h1>
                                    <div className=" mr-auto mx-3 font-bold py-[3px] rounded-[12px]">31 فروردین 1403</div>
                                </div>
                                <div className="w-full flex items-center">
                                    <h1>تاریخ فعالسازی</h1>
                                    <div className="mr-auto mx-3 font-bold">13:14 جمعه ، 31 فروردین 1403</div>
                                </div>
                            </div>

                            <div className="pr text-[#616161a3] border-b-[#616161a3] py-3 border-b-[1px]">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            </div>

                            <div className="price flex items-cente px-2r mt-4">
                                <h1 className="font-bold">مبلغ کف تعین شده :</h1>
                                <h2 className="mr-auto text-[#616161a3]">۲.۰۰۰.۰۰۰ میلیون ریال</h2>
                            </div>

                            <button onClick={() => setOn(true)} className="text-white bg-[#AFC0FF] rounded-[12px] h-[3rem] w-full mt-3">درخواست فعال سازی</button>


                        </div>

                            {on &&
                                <div className="modal-account-on overflow-y-scroll mb-20">
                                    <div className="container-modal-account-on py-0 rounded-t-xl">
                                        
                                        <div className="header flex w-[100%] justify-start py-1 flex-col rounded-b-[24px]">
                                            <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">
    
                                                <div className="right flex gap-2">
                                                    <h1 className="title "> خدمت جدید</h1>
                                                </div>
    
                                                <div className="left cursor-pointer mr-auto">
                                                    <img onClick={() => setOn(false)} className="rounded-full w-10" src="arrow.png" alt="png"/>
                                                </div>
                                            
                                            </div>
                                        </div> 
    
    
                                        <div className="setting flex mt-20 flex-col w-[90%] h-[52rem] mx-auto ">
                                            <p className="paragraf">
                                                    درخواست شما برای فعال سازی خدمت بیمه به پشتیبانی با موفقیت ارسال شد 
                                            </p>
    
    
                                            <button onClick={() => setOn(false)} className="w-full h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] mt-4 mb-10">متوجه شدم</button>
    
                                        </div>
                                        
    
                
                                    </div>
                                </div>
                            }

                        {offer &&
                            <div className="modal-account overflow-y-scroll mb-20">
                                <div className="container-modal-account py-0 rounded-t-xl">
                                    <div className="line mx-auto rounded-[8px] mt-4 w-[9%] bg-black h-[4px] mb-7"></div>
                                    
                                    <div className="title w-[90%] mx-auto my-5 container gap-2">
                                        <img className="w-7 rounded-full" src="Servise-page/persend.png" alt="png" />
                                        <h1 className="mt-1">درخواست اعمال تخفیف</h1>
                                        <img onClick={() => setOffer(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                                    </div>

                                    <div className="top flex gap-2 items-center">                            
                                        <img className="w-20" src="Servise-page/picture.png" alt="png"/>
                                        
                                        <div className="titr">
                                            <h1 className="text-right text-[20px] font-bold">بیمه خودرو</h1>
                                            <p className="text-right text-[#616161a3]">خدماتی</p>
                                        </div> 
                                    </div>

                                    <div className="list w-[90%] mx-auto mt-7">
                                        <div className="flex w-[100%] mx-auto my-1">
                                            <h1 className="ml-auto font-bold">درخواست کننده :</h1>
                                            <h1>دیزاین استور</h1>
                                        </div>

                                        <div className="flex w-[100%] mx-auto mt-4 pb-4 border-b-[#6c6c6c6a] border-b-[2px]">
                                            <h1 className="ml-auto font-bold">تاریخ درخواست :</h1>
                                            <h1>13:14 جمعه ، 31 فروردین 1403</h1>
                                        </div>

                                        <div className="inputs mt-6 flex flex-col">
                                            <label className="pointer-input">مدت زمان تخفیف :</label>
                                            <input className="login-input mb-3 flex items-center" type="text" />

                                            <label className="pointer-input">مقدار تخفیف مورد نظر خود را وارد کنید:</label>
                                            <div className="flex items-center">
                                                <input className="login-icon-input-servise" type="text" list="languages" placeholder=" نوع کسب و کار خود را وارد کنید . " />
                                                <datalist id="languages">
                                                    <option value="25%"></option>
                                                    <option value="50%"></option>
                                                    <option value="10%"></option>
                                                </datalist>
                                                <div className="contianer-img-offer h-[2rem] w-[10%]">
                                                    <img className="icon-input mt-3 relative left-5" src="arrow-left.png" alt="png" />
                                                </div>
                                            </div>
                                            <label className="pointer-input mt-4">توضیحات درخواست :</label>
                                            <textarea placeholder="توضیحات تبلیغ را شرح دهید" className="w-full h-[7rem] rounded-[12px] border-[3px] px-2 py-2 border-[#7171716c]" type="text" ></textarea>
                                        </div>

                                        <div className="linee w-[90%] h-[3px] mt-7"></div>
                                        <button onClick={() => setOffer(false)} className="w-[100%] mx-auto h-[3rem] rounded-[12px] bg-[#AFC0FF] text-white mt-3">تایید</button>

                                    </div>
                                    
                                </div>
                            </div>
                        }

                    </div>

                    ||

                checkfilter2 &&
                    <>

                        <div className="buttons w-[90%] mx-auto flex justify-center items-center h-[5rem] rounded-[12px] bg-[#EFEFEF]">
                            <button onClick={Clickhandler_left} style={{background:bg}} className="transition-all w-[45%] h-[4rem] text-[19px] px-2 rounded-[8px]">خدمات فعال</button>
                            <button onClick={Clickhandler_right} style={{background:bg2}} className="transition-all w-[45%] h-[4rem] text-[19px] px-2 rounded-[8px]">لیست خدمات</button>
                        </div>

                        <div className="card rounded-[12px] w-[90%] mx-auto mt-5">
                            <div className="top border-b-[#616161a3] pb-3 border-b-[1px] flex gap-2 items-center">
                                
                                <img className="w-20" src="Servise-page/picture.png" alt="png"/>
                                
                                <div className="titr">
                                    <h1 className="text-right text-[20px] font-bold">بیمه خودرو</h1>
                                    <p className="text-right text-[#616161a3]">خدماتی</p>
                                </div>
                                
                                <div className="left mr-auto">
                                    <div>
                                        <label class="switch">
                                            <input onClick={() => span == "غیر فعال" && setSpan("فعال") || span == "فعال" && setSpan("غیر فعال")} className="input" type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <h1 className="text-[#616161a3] mt-1">{span}</h1>
                                </div>
                            
                            </div>

                            <div className="pr text-[#616161a3] border-b-[#616161a3] py-3 border-b-[1px]">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            </div>

                            <div className="price flex items-cente px-2r mt-4">
                                <h1 className="font-bold">مبلغ کف تعین شده :</h1>
                                <h2 className="mr-auto text-[#616161a3]">۲.۰۰۰.۰۰۰ میلیون ریال</h2>
                            </div>

                            <button onClick={() => setOffer(true)} className="text-white bg-[#AFC0FF] rounded-[12px] h-[3rem] w-full mt-3">درخواست فعال سازی</button>

                        </div>

                        <div className="button mt-5 h-[10rem]">
                            <button onClick={() => setNewservise(true)} className="bg-[#9AD07C] relative left-24 flex gap-1 items-center justify-center text-white w-[9rem] h-[3rem] rounded-[12px]">
                                <img className="w-7 rounded-[12px]" src="Servise-page/send.png" alt="png" />
                                خدمت جدید
                            </button>
                        </div>

                        {
                        offer2 &&
                            <div className="modal-account overflow-y-scroll mb-20">
                                <div className="container-modal-account py-0 rounded-t-xl">
                                    <div className="line mx-auto rounded-[8px] mt-4 w-[9%] bg-black h-[4px] mb-7"></div>
                                    
                                    <div className="title w-[90%] mx-auto my-5 container gap-2">
                                        <img className="w-7 rounded-full" src="Servise-page/persend.png" alt="png" />
                                        <h1 className="mt-1">افزودن حساب بانکی</h1>
                                        <img onClick={() => setOffer2(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                                    </div>

                                    <div className="top flex gap-2 items-center">                            
                                        <img className="w-20" src="Servise-page/picture.png" alt="png"/>
                                        
                                        <div className="titr">
                                            <h1 className="text-right text-[20px] font-bold">بیمه خودرو</h1>
                                            <p className="text-right text-[#616161a3]">خدماتی</p>
                                        </div> 
                                    </div>

                                    <div className="list w-[90%] mx-auto mt-7">
                                        <div className="flex w-[100%] mx-auto my-1">
                                            <h1 className="ml-auto font-bold">درخواست کننده :</h1>
                                            <h1>دیزاین استور</h1>
                                        </div>

                                        <div className="flex w-[100%] mx-auto mt-4 pb-4 border-b-[#6c6c6c6a] border-b-[2px]">
                                            <h1 className="ml-auto font-bold">تاریخ درخواست :</h1>
                                            <h1>13:14 جمعه ، 31 فروردین 1403</h1>
                                        </div>

                                        <div className="inputs mt-6 flex flex-col">
                                            <label className="pointer-input">مدت زمان تخفیف :</label>
                                            <input placeholder=".مقدار زمان فعال بودن تخفیف را مشخص کنید " className="login-input mb-3" type="text" />

                                            <label className="pointer-input">مقدار تخفیف مورد نظر :</label>
                                            <div className="flex items-center">
                                                <input className="offer-input" type="text" id="programmingLanguages" list="languages" placeholder=". 20 %" />
                                                <datalist id="languages">
                                                    <option value="20%"></option>
                                                    <option value="60%"></option>
                                                    <option value="50%"></option>
                                                </datalist>
                                                <div className="contianer-img-offer h-[3rem] w-[10%]">
                                                    <img className="icon-input mt-2" src="arrow-left.png" alt="png" />
                                                </div>
                                            </div>

                                            <label className="pointer-input mt-4">توضیحات درخواست :</label>
                                            <textarea placeholder="توضیحات تبلیغ را شرح دهید" className="w-full h-[7rem] rounded-[12px] border-[3px] px-2 py-2 border-[#7171716c]" type="text" ></textarea>
                                        </div>

                                        <div className="linee w-[90%] h-[3px] mt-7"></div>
                                        <button onClick={() => setNewservise(true)} className="w-[100%] mx-auto h-[3rem] rounded-[12px] bg-[#AFC0FF] text-white mt-3">ارسال</button>

                                    </div>
                                    
                                </div>
                            </div>

                            ||

                        newservise &&

                            <div className="modal-account h-full overflow-y-scroll mb-20">
                                <div className="container-modal-account py-0 rounded-t-xl">
                                    
                                    <div className="header flex w-[100%] justify-start py-1 flex-col rounded-b-[24px]">
                                        <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                            <div className="right flex gap-2">
                                                <img className="w-7 rounded-[8px]" src="hashtag.png" alt="png" />
                                                <h1 className="title "> خدمت جدید</h1>
                                            </div>

                                            <div className="left cursor-pointer mr-auto">
                                                <img onClick={() => setNewservise(false)} className="rounded-full w-10" src="arrow.png" alt="png"/>
                                            </div>
                                        
                                        </div>
                                    </div> 

                                    <div className="pr w-[90%] mx-auto">

                                        <h1 className="mt-7 text-[20px] text-right font-bold mb-1">توضیحات </h1>
                                
                                        <p className="text-[15px] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                        
                                        <div className="flex pb-2 items-center mt-7">
                                            <h1 className="font-bold ml-auto">درخواست کننده</h1>
                                            <h1 className="text-[#5d5d5d]">دیزاین استور</h1>
                                        </div>

                                        <div className="flex pb-2 items-center mt-3 border-b-[#a2a2a252] border-b-[2px]">
                                            <h1 className="font-bold ml-auto">تاریخ درخواست</h1>
                                            <h1 className="text-[#5d5d5d]">13:14 جمعه ، 31 فروردین 1403</h1>
                                        </div>

                                    </div>

                                    <div className="setting flex flex-col w-[90%] h-[52rem] mx-auto mt-5">
                                        <div className="title flex"> پیش نیاز ها</div>

                                        <div className="items mt-3 flex gap-4">

                                            <div className="left bg-[#D9D9D9] rounded-[13.68px] w-[82px] h-[82px]">

                                            </div>

                                            <div className="right h-[82px] flex flex-col w-[50%]">
                                                <h1 className="font-bold text-[18px] text-right"> عکس خدمت مد نظر</h1>
                                                <p className="text-[14px] mb-1 text-right">حداکثر حجم عکس 1 مگابایت</p>
                                                <button className="bg-[#B7DF9E] w-[7rem] rounded-[12px] text-white px-2 py-1 ">بارگذاری</button>
                                            </div>
                                            
                                        </div>

                                        <div className="time flex flex-col mt-6 mb-1">
                                            <h1 className="text-right font-bold">نام خدمت</h1>
                                            <input className="rounded-[12px] text-[18px] px-2 w-[100%] h-[3rem] border-[2px] border-[#63636396]" placeholder=". مدت زمان مورد نظر را وارد کنید" type="text" />
                                        </div>

                                        <div className="price mt-5">
                                            <h1 className="text-right font-bold mr-2 mb-1">دسته بندی: </h1>
                                            <li className=" mr-2">چناچه دسته بندی مدنظر وجود نداشت ، صرفا نام دسته بندی دلخواه خود را بنویسد  </li>
                                        </div>

                                        <div className="flex items-center mt-2">
                                            <input className="offer-input" type="text" id="programmingLanguages" list="languages" placeholder=". دسته بندی مورد نظر خود را وارد کنید " />
                                            <datalist id="languages">
                                                <option value="20%"></option>
                                                <option value="60%"></option>
                                                <option value="50%"></option>
                                            </datalist>
                                            <div className="contianer-img-offer h-[2rem] w-[10%]">
                                                <img onClick={() => setIcons(true)} className="icon-input mt-3 relative left-5" src="arrow-left.png" alt="png" />
                                            </div>
                                        </div>


                                        {icons &&
                                            <div className="modal-home mx-auto mt-2 my-3">
                                                <div className="container-modal ">
                                                    <div className="w-[90%] mt-3">
                                                        <div className="line w-10 h-2 rounded-xl bg-black mx-auto mt-2 mb-2"></div>
                                                        <div className="gap-1 container flex-wrap">
                                                            {imges.map((item) => {
                                                                return(
                                                                    <div className="w-[80px] mx-auto container flex-col" key={item.id}>
                                                                        <img onClick={() => setIcons(false)} className="w-[50px] rounded-[12px]" src={item.src} alt="png" />
                                                                        <h1>{item.title}</h1>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        <div className="time flex flex-col mt-6 mb-1">
                                            <h1 className="text-right font-bold">قیمت حداقلی</h1>
                                            <input className="rounded-[12px] text-[18px] px-2 w-[100%] h-[3rem] border-[2px] border-[#63636396]" placeholder=". حداقل این قیمت را مشخص کنید" type="text" />
                                        </div>

                                        <div className="explain mt-3">
                                            <p className="font-bold text-right my-1">توضیحات خدمت</p>
                                            <textarea className="login-textarea" placeholder=". توضیحات خدمت رو شرح بدهید"></textarea>
                                        </div>

                                        <button onClick={Check} className="w-full h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] mt-4 mb-10">ارسال</button>

                                    </div>
                                    

            
                                </div>
                            </div>

                            ||

                        payed2 &&
     
                            <div className="modal-account overflow-y-scroll mb-20">
                                <div className="container-modal-account py-0 rounded-t-xl">
                                    
                                    <div className="header flex w-[100%] justify-start py-1 flex-col rounded-b-[24px]">
                                        <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                            <div className="right flex gap-2">
                                                <h1 className="title "> خدمت جدید</h1>
                                            </div>

                                            <div className="left cursor-pointer mr-auto">
                                                <img onClick={() => setPayed2(false)} className="rounded-full w-10" src="arrow.png" alt="png"/>
                                            </div>
                                        
                                        </div>
                                    </div> 


                                    <div className="setting flex mt-20 flex-col w-[90%] h-[52rem] mx-auto ">
                                        <p className="paragraf">
                                              درخواست شما برای فعال سازی خدمت بیمه به پشتیبانی با موفقیت ارسال شد 
                                        </p>


                                        <button onClick={() => setPayed2(false)} className="w-full h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] mt-4 mb-10">متوجه شدم</button>

                                    </div>
                                    

            
                                </div>
                            </div>
                        }
                    </>

                    ||

                checkfilter3 &&
                    <div className="cards mt-7 mb-[7rem] w-[90%] container flex-col">
                    
                        <div className="card w-full flex flex-col">
                            <div className="top flex items-center w-full gap-4">
                                <div className="right">
                                    <div className="w-[50px] h-[50px] bg-[#cbcaca] rounded-[13.68px]"></div>
                                </div>
                                <div className="center ">
                                    <h1 className="font-bold">خدمت جدید</h1>
                                    <h2>خدماتی</h2>
                                </div>
                                <div className="left flex mr-auto gap-1">
                                    <img className="w-5 h-5 mt-[1px]" src="Servise-page/watch.png" alt="png" />
                                    <h1>در انتظار تایید</h1>
                                </div>
                            </div>
                        </div>

                        <div className="list flex flex-col w-full mt-7">
                            <div className="flex items-center pt-3 w-full border-t-[2px] border-t-[#9595957c]">
                                <h1 className="font-bold ml-auto">تاریخ درخواست:</h1>
                                <h2 className="">13:14 جمعه ، 31 فروردین 1403</h2>
                            </div>

                            <div className="flex items-center pt-3 w-full mt-3">
                                <h1 className="font-bold ml-auto"> درخواست کننده:</h1>
                                <h2 className="">دیزاین استور</h2>
                            </div>

                            <div className="flex items-center pt-3 w-full mt-5">
                                <h1 className="font-bold ml-auto">دسته بندی</h1>
                                <h2 className="">نامشخص</h2>
                            </div>

                            <p className="text-[#656565] text-right mt-4 pb-3 w-full border-b-[2px] border-b-[#9595957c]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>

                            <div className="flex items-center pt-3 w-full mt-3">
                                <h1 className="font-bold ml-auto"> مبلغ کف تعیین شده :</h1>
                                <h2 className="">۲.۰۰۰.۰۰۰ میلیون ریال</h2>
                            </div>

                            <div className="button mt-5 h-[10rem]">
                                <button onClick={() => setNewservise(true)} className="bg-[#9AD07C] relative left-10 flex gap-1 items-center justify-center text-white w-[9rem] h-[3rem] rounded-[12px]">
                                    <img className="w-7 rounded-[12px]" src="Servise-page/send.png" alt="png" />
                                    خدمت جدید
                                </button>
                            </div>

                        </div>

                        <img onClick={() => setCheckfilter1(true)} className="w-7 fixed left-5 top-24 rounded-full cursor-pointer" src="arrow.png" alt="png" />

                        {
                        newservise &&

                            <div className="modal-account overflow-y-scroll mb-20">
                                <div className="container-modal-account py-0 rounded-t-xl">
                                    
                                    <div className="header flex w-[100%] justify-start py-1 flex-col rounded-b-[24px]">
                                        <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                            <div className="right flex gap-2">
                                                <img className="w-7 rounded-[8px]" src="hashtag.png" alt="png" />
                                                <h1 className="title "> خدمت جدید</h1>
                                            </div>

                                            <div className="left cursor-pointer mr-auto">
                                                <img onClick={() => setNewservise(false)} className="rounded-full w-10" src="arrow.png" alt="png"/>
                                            </div>
                                        
                                        </div>
                                    </div> 

                                    <div className="pr w-[90%] mx-auto">

                                        <h1 className="mt-7 text-[20px] text-right font-bold mb-1">توضیحات </h1>
                                
                                        <p className="text-[15px] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                        
                                        <div className="flex pb-2 items-center mt-7">
                                            <h1 className="font-bold ml-auto">درخواست کننده</h1>
                                            <h1 className="text-[#5d5d5d]">دیزاین استور</h1>
                                        </div>

                                        <div className="flex pb-2 items-center mt-3 border-b-[#a2a2a252] border-b-[2px]">
                                            <h1 className="font-bold ml-auto">تاریخ درخواست</h1>
                                            <h1 className="text-[#5d5d5d]">13:14 جمعه ، 31 فروردین 1403</h1>
                                        </div>

                                    </div>

                                    <div className="setting flex flex-col w-[90%] h-[52rem] mx-auto mt-5">
                                        <div className="title flex"> پیش نیاز ها</div>

                                        <div className="items mt-3 flex gap-4">

                                            <div className="left bg-[#D9D9D9] rounded-[13.68px] w-[82px] h-[82px]">

                                            </div>

                                            <div className="right h-[82px] flex flex-col w-[50%]">
                                                <h1 className="font-bold text-[18px] text-right"> عکس خدمت مد نظر</h1>
                                                <p className="text-[14px] mb-1 text-right">حداکثر حجم عکس 1 مگابایت</p>
                                                <button className="bg-[#B7DF9E] w-[7rem] rounded-[12px] text-white px-2 py-1 ">بارگذاری</button>
                                            </div>
                                            
                                        </div>

                                        <div className="time flex flex-col mt-6 mb-1">
                                            <h1 className="text-right font-bold">نام خدمت</h1>
                                            <input className="rounded-[12px] text-[18px] px-2 w-[100%] h-[3rem] border-[2px] border-[#63636396]" placeholder=". مدت زمان مورد نظر را وارد کنید" type="text" />
                                        </div>

                                        <div className="price mt-5">
                                            <h1 className="text-right font-bold mr-2 mb-1">دسته بندی: </h1>
                                            <li className=" mr-2">چناچه دسته بندی مدنظر وجود نداشت ، صرفا نام دسته بندی دلخواه خود را بنویسد  </li>
                                        </div>


                                        <div className="flex items-center mt-2">
                                            <input className="offer-input" type="text" id="programmingLanguages" list="languages" placeholder=". دسته بندی مورد نظر خود را وارد کنید " />
                                            <datalist id="languages">
                                                <option value="20%"></option>
                                                <option value="60%"></option>
                                                <option value="50%"></option>
                                            </datalist>
                                            <div className="contianer-img-offer h-[3rem] w-[10%]">
                                                <img onClick={() => setIcons(true)} className="icon-input mt-2" src="arrow-left.png" alt="png" />
                                            </div>
                                        </div>

                                        {icons &&
                                            <div className="modal-home mx-auto mt-2 my-3">
                                                <div className="container-modal ">
                                                    <div className="w-[90%] mt-3">
                                                        <div className="line w-10 h-2 rounded-xl bg-black mx-auto mt-2 mb-2"></div>
                                                        <div className="gap-1 container flex-wrap">
                                                            {imges.map((item) => {
                                                                return(
                                                                    <div className="w-[80px] mx-auto container flex-col" key={item.id}>
                                                                        <img onClick={() => setIcons(false)} className="w-[50px] rounded-[12px]" src={item.src} alt="png" />
                                                                        <h1>{item.title}</h1>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }


                                        <div className="time flex flex-col mt-6 mb-1">
                                            <h1 className="text-right font-bold">قیمت حداقلی</h1>
                                            <input className="rounded-[12px] text-[18px] px-2 w-[100%] h-[3rem] border-[2px] border-[#63636396]" placeholder=". حداقل این قیمت را مشخص کنید" type="text" />
                                        </div>

                                        <div className="explain mt-3">
                                            <p className="font-bold text-right my-1">توضیحات خدمت</p>
                                            <textarea className="login-textarea" placeholder=". توضیحات خدمت رو شرح بدهید"></textarea>
                                        </div>

                                        <button onClick={Check} className="w-full h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] mt-4 mb-10">ارسال</button>

                                    </div>
                                    

            
                                </div>
                            </div>

                            ||

                        payed2 &&

                            
                            <div className="modal-account overflow-y-scroll mb-20">
                                <div className="container-modal-account py-0 rounded-t-xl">
                                    
                                    <div className="header flex w-[100%] justify-start py-1 flex-col rounded-b-[24px]">
                                        <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                            <div className="right flex gap-2">
                                                <h1 className="title "> خدمت جدید</h1>
                                            </div>

                                            <div className="left cursor-pointer mr-auto">
                                                <img onClick={() => setPayed2(false)} className="rounded-full w-10" src="arrow.png" alt="png"/>
                                            </div>
                                        
                                        </div>
                                    </div> 


                                    <div className="setting flex mt-20 flex-col w-[90%] h-[52rem] mx-auto ">
                                        <p className="paragraf">
                                              درخواست شما برای فعال سازی خدمت بیمه به پشتیبانی با موفقیت ارسال شد 
                                        </p>


                                        <button onClick={() => setPayed2(false)} className="w-full h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] mt-4 mb-10">متوجه شدم</button>

                                    </div>
                                    

            
                                </div>
                            </div>
                        }

                    </div>
                }

            </div>

        </>
    )
}