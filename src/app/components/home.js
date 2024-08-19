'use client'

import { useContext, useState } from "react"
import { SelectContext } from "./context/SelectContext"
import { BtnContext } from "./context/BtnContext"
import Link from "next/link"

export default function Home_modals(){

    //Home page


    //Recive the style info From "SelectContext"
    const { bg , bg2 , Changebgright , Changebgleft } = useContext(SelectContext)

    const { bg1 , color1 , bg_2 , color2 , bg3 , color3 , Changecolordefault , Changecolorgreen , Changecolordefault2 , Changecolorgreen2 ,Changecolordefault3 , Changecolorgreen3 } = useContext(BtnContext)

    const [ tik , setTik ] = useState('tik.png')
    const [ tik2 , setTik2 ] = useState('tik.png')
    const [ tik3 , setTik3 ] = useState('tik.png')

    //Handle Click buttons "Change style & Change info"
    const [ checkfilter , setCheckfilter ] = useState(true)
    const [ title , setTitle ] = useState('سفارشات روز')

    const Clickhandler_left = (e) => {
        e.preventDefault()
        Changebgleft()
        setCheckfilter(true)
        setTitle("سفارشات روز")
    }

    const Clickhandler_right = (e) => {
        e.preventDefault()
        Changebgright()
        setCheckfilter(false)
        setTitle("درحال انجام")
    }


    //Show Modals "public"
    const [ showmodal_1 , setShowmodal_1 ] = useState(false)
    const [ showmodal_2 , setShowmodal_2 ] = useState(false)
    const [ showmodal_3 , setShowmodal_3 ] = useState(false)
    const [ showmodal_4 , setShowmodal_4 ] = useState(false)
    const [ showmodal_5 , setShowmodal_5 ] = useState(false)

    //Show page "Tablighat"
    const [ showpage , setShowpage ] = useState(false)
    const [ showT , setShowT ] = useState(false)
    const [ showT2 , setShowT2 ] = useState(false)


    const [ payTB , setPayTB ] = useState(false)
    const [ payTB2 , setPayTB2 ] = useState(false)
    const [ payTB3 , setPayTB3 ] = useState(false)



    const [ checktheme1 , setChecktheme1 ] = useState(1)
    const Changetheme = () => {
        if(checktheme1 == 1){
            Changecolorgreen()
            setChecktheme1(2)
            setChecktheme2(null)
            setChecktheme3(null)
            setTik('tik-green.png')
        }
        else if(checktheme1 == 2){
            Changecolordefault()
            setChecktheme1(1)
            setChecktheme2(1)
            setChecktheme3(1)
            setTik('tik.png')
        }
    }

    const [ checktheme2 , setChecktheme2 ] = useState(1)
    const Changetheme2 = () => {
        if(checktheme2 == 1){
            Changecolorgreen2()
            setChecktheme2(2)
            setChecktheme1(null)
            setChecktheme3(null)
            setTik2('tik-green.png')
        }
        else if (checktheme2 == 2) {
            Changecolordefault2()
            setChecktheme1(1)
            setChecktheme2(1)
            setChecktheme3(1)
            setTik2('tik.png')
        }
    }

    const [ checktheme3 , setChecktheme3 ] = useState(1)
    const Changetheme3 = () => {
        if(checktheme3 == 1){
            Changecolorgreen3()
            setChecktheme3(2)
            setChecktheme2(null)
            setChecktheme1(null)
            setTik3('tik-green.png')
        }
        else if (checktheme3 == 2) {
            Changecolordefault3()
            setChecktheme1(1)
            setChecktheme2(1)
            setChecktheme3(1)
            setTik3('tik.png')
        }
    }

    const Close = (e) => {
        e.preventDefault()
        setPayTB(false)
        setPayTB2(false)
        setPayTB3(false)
    }
    


    return(
        <>

            <div className="desktop container flex-col w-[90%] mb-[10rem]">
                
                <div className="top">
                    <button className="shadow-btn">میز کار</button>
                </div>

                <div className="btns flex justify-center items-center flex-wrap w-full gap-3 mt-7">
                    <button onClick={() => setShowmodal_1(true)} className="btn-home">کمیسیون</button>
                    <button onClick={() => setShowmodal_2(true)} className="btn-home">آموزش ها</button>
                    <button onClick={() => setShowmodal_3(true)} className="btn-home">خدمات غیرمجاز</button>
                    <button onClick={() => setShowmodal_4(true)} className="btn-home">قرارداد ها</button>
                    <button onClick={() => setShowmodal_5(true)} className="btn-home">تبلیغات</button>
                </div>

                <button className="w-full h-[5rem] bg-[#E1F0DA] mt-5 rounded-[8px]">بنر تبلیغات</button>
            
            </div>


            {showmodal_1 &&
                    <div className="modal-home">
                        <div className="container-modal px-5 py-4 rounded-t-xl">
                            
                            <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>

                            <div className="title container gap-2">
                                <img className="w-7" src="hashtag.png" alt="png" />
                                <h1 className="mt-1">کمیسیون</h1>
                                <img onClick={() => setShowmodal_1(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png" />
                            </div>
                            
                            <div className="btn-left h-[70px] w-[10px] bg-[#B7E09F] fixed right-[0px] rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all top-[15rem]"></div>

                            <div className="pr mt-10">
                                <div className="flex justify-start items-center gap-2">
                                    <div className="w-[16px] h-[16px] rounded-[6px] bg-[#AFC0FF]"></div>
                                    <h1 className="font-bold text-[19px]">لورم ایپسوم: </h1>
                                </div>
            
                                <p className="mt-3 text-[19px] text-right">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .
                                </p>
            
                                <div className="mt-10 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
            
                                <div className="mt-10 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
            
                                <div className="flex justify-start items-center px-2 mt-14">
                                    <input 
                                        type="checkbox" 
                                        className="w-5 h-5 mx-1"
                                    />
                                    <h2 className=" text-[#5C5CFF] ml-1">شرایط و قوانین</h2> 
                                    <h2>کانکت را می پذیرم</h2>
                                </div>
            
                                <div className="linee w-full h-[2px] mt-5"></div>
            
                                <button className="w-full h-[3rem] mt-4 rounded-[12px] bg-[#AFC0FF]">پذیرفتم</button>
            
                            </div>
            
                        </div>
                    </div>
            }

            {showmodal_2 &&
                    <div className="modal-home">
                        <div className="container-modal px-5 py-4 rounded-t-xl">
                            
                            <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>
                            
                            <div className="title container gap-2 mb-10">
                                <img className="w-7" src="hashtag.png" alt="png" />
                                <h1 className="mt-1">آموزش ها</h1>
                                <img onClick={() => setShowmodal_2(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png" />
                            </div>

                            <div className="btn-left h-[70px] w-[10px] bg-[#B7E09F] fixed right-[0px] rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all top-[15rem]"></div>
            
                            <div className="button container cursor-pointer pb-6 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right">آموزش استفاده از کیف پول</h1>
                                    <p className="line-clamp-1 text-[15px] text-right mt-1 text-[#414141]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div>

                            <div className="button container cursor-pointer pb-6 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right">آموزش استفاده از کیف پول</h1>
                                    <p className="line-clamp-1 text-[15px] text-right mt-1 text-[#414141]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div>

                            <div className="button container cursor-pointer pb-6 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right">آموزش استفاده از کیف پول</h1>
                                    <p className="line-clamp-1 text-[15px] text-right mt-1 text-[#414141]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div>

                            <div className="button container cursor-pointer pb-6 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right">آموزش استفاده از کیف پول</h1>
                                    <p className="line-clamp-1 text-[15px] text-right mt-1 text-[#414141]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div>
            
                        </div>
                    </div>
            }

            {showmodal_3 &&
                    <div className="modal-home">
                        <div className="container-modal px-5 py-4 rounded-t-xl">
                            
                            <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>

                            <div className="title container gap-2">
                                <img className="w-7" src="hashtag.png" alt="png" />
                                <h1 className="mt-1">خدمات غیر مجاز</h1>
                                <img onClick={() => setShowmodal_3(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png" />
                            </div>
            
                            <div className="btn-left h-[70px] w-[10px] bg-[#B7E09F] fixed right-[0px] rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all top-[15rem]"></div>

                            <div className="pr mt-10">
                                <div className="flex justify-start items-center gap-2">
                                    <div className="w-[16px] h-[16px] rounded-[6px] bg-[#AFC0FF]"></div>
                                    <h1 className="font-bold text-[19px]">لورم ایپسوم: </h1>
                                </div>
            
                                <p className="mt-3 text-[19px] text-right">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .
                                </p>
            
                                <div className="mt-10 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
            
                                <div className="mt-10 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
            
                                <div className="flex justify-start items-center px-2 mt-14">
                                    <input 
                                        type="checkbox" 
                                        className="w-5 h-5 mx-1"
                                    />
                                    <h2 className=" text-[#5C5CFF] ml-1">شرایط و قوانین</h2> 
                                    <h2>کانکت را می پذیرم</h2>
                                </div>
            
                                <div className="linee w-full h-[2px] mt-5"></div>
            
                                <button className="w-full h-[3rem] mt-4 rounded-[12px] bg-[#AFC0FF]">پذیرفتم</button>
            
                            </div>
            
                        </div>
                    </div>
            }

            {showmodal_4 &&
                    <div className="modal-home">
                        <div className="container-modal px-5 py-4 rounded-t-xl">
                            
                            <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>

                            <div className="title container gap-2">
                                <img className="w-7" src="hashtag.png" alt="png" />
                                <h1 className="mt-1">قرارداد ها</h1>
                                <img onClick={() => setShowmodal_4(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png" />
                            </div>
            
                            <div className="btn-left h-[70px] w-[10px] bg-[#B7E09F] fixed right-[0px] rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all top-[15rem]"></div>

                            <div className="pr mt-10">
                                <div className="flex justify-start items-center gap-2">
                                    <div className="w-[16px] h-[16px] rounded-[6px] bg-[#AFC0FF]"></div>
                                    <h1 className="font-bold text-[19px]">لورم ایپسوم: </h1>
                                </div>
            
                                <p className="mt-3 text-[19px] text-right">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .
                                </p>
            
                                <div className="mt-10 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
            
                                <div className="mt-10 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
            
                                <div className="flex justify-start items-center px-2 mt-14">
                                    <input 
                                        type="checkbox" 
                                        className="w-5 h-5 mx-1"
                                    />
                                    <h2 className=" text-[#5C5CFF] ml-1">شرایط و قوانین</h2> 
                                    <h2>کانکت را می پذیرم</h2>
                                </div>
            
                                <div className="linee w-full h-[2px] mt-5"></div>
            
                                <button className="w-full h-[3rem] mt-4 rounded-[12px] bg-[#AFC0FF]">پذیرفتم</button>
            
                            </div>
            
                        </div>
                    </div>
            }

            {showmodal_5 &&
                    <div className="modal-home-TB overflow-y-scroll flex-col">

                        <div className="container-modal-TB px-5 py-4 rounded-t-xl">
                            
                            <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>

                            <div className="title container gap-2">
                                <img className="w-7" src="hashtag.png" alt="png" />
                                <h1 className="mt-1">تبلیغات</h1>
                                <img onClick={() => setShowmodal_5(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                            </div>
            
                            <div className="btn-left h-[70px] w-[10px] bg-[#B7E09F] fixed right-[0px] rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all top-[15rem]"></div>

                            <div className="pr mt-10 h-[50rem]">
                                <div className="flex justify-start items-center gap-2">
                                    <div className="w-[16px] h-[16px] rounded-[6px] bg-[#AFC0FF]"></div>
                                    <h1 className="font-bold text-[19px]">لورم ایپسوم: </h1>
                                </div>
            
                                <p className="mt-3 text-[19px] text-right">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .
                                </p>
            
                                <div className="mt-10 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
            
                                <div className="mt-10 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
            
                                <div className="flex justify-start items-center px-2 mt-14">
                                    <input 
                                        type="checkbox" 
                                        className="w-5 h-5 mx-1"
                                    />
                                    <h2 className=" text-[#5C5CFF] ml-1">شرایط و قوانین</h2> 
                                    <h2>کانکت را می پذیرم</h2>
                                </div>
            
                                <div className="linee w-full h-[2px] mt-5"></div>
            
                                <button onClick={() =>  setShowpage(true)} className="w-full h-[3rem] mt-4 rounded-[12px] bg-[#AFC0FF]">پذیرفتم</button>
            
                            </div>
            
                        </div>

                    </div>
            }

            {showpage &&
                <div id="x" className="modal-home-TB overflow-y-scroll mb-20 pt-10 w-full flex justify-center items-center bg-white flex-col">

                    <div id="x" className="container-modal-TB pt-7 flex-col container">

                        <div className="title mt-5 w-[90%] mx-auto my-5 container gap-2">
                            <img className="w-7" src="hashtag.png" alt="png" />
                            <h1 className="mt-1">تبلیغات</h1>
                            <img onClick={() => setShowpage(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png"/>
                        </div>

                        <div className="buttons py-2 w-[90%] flex justify-center items-center h-[5rem] rounded-[12px] bg-[#EFEFEF]">
                            <button onClick={Clickhandler_left} style={{background:bg}} className="transition-all w-[45%] h-[4rem] text-[19px] px-2 rounded-[8px]">صندوق تبلیغات</button>
                            <button onClick={Clickhandler_right} style={{background:bg2}} className="transition-all w-[45%] h-[4rem] text-[19px] px-2 rounded-[8px]">در انتظار</button>
                        </div>

                        <div className="items w-[90%] mx-auto container flex-col mt-4">


                            {checkfilter &&

                                <div className="cards container flex-col mb-[7rem] w-[90%] mx-auto">

                                    <div className="card-order flex flex-col justify-center items-center mx-auto cursor-pointer w-[100%] px-4 py-3 my-10">
                                        
                                        <div className="top container gap-2">
                                            
                                            <div className="right w-[20%] flex justify-start items-start">
                                                <img className="w-14 rounded-full" src="3Dgreen.png" alt="png" />
                                            </div>

                                            <div className="center w-[80%] container flex-col">
                                                <h1 className="font-bold ml-auto text-[20px]">تبلیغ 1</h1>
                                                <div className="container gap-2">
                                                    <img className="w-4" src="paper.png" alt="png" />
                                                    <h2 className="ml-auto text-[16px] mt-1"> درحال پخش می باشد  </h2>
                                                </div>
                                            </div>

                                            <img className="left w-[20px] mb-8 mr-auto" src="trush.png" alt="png" />
                                        
                                        </div>

                                        <div className="time-title font-bold text-[15px] my-4 gap-[9rem] flex">
                                            <h1>زمان تعیین شده تبلیغ :  </h1>
                                            <h1>4 روز</h1>
                                        </div>

                                        <div className="bottom pb-2 border-b-[#52525274] border-b-[1px]">
                                            
                                            <div className="bottom container w-full">
                                                <div className="right w-[40%] container gap-2">
                                                    <img className="w-[20px]" src="recently.png" alt="png" />
                                                    <h2>زمان باقی مانده تبلیغ :</h2>
                                                </div>
                                                <div className="left w-[60%] container">
                                                    <h2>00 : 00 :24 ساعت باقی مانده </h2>
                                                </div>
                                            </div>

                                            <div className="end w-[17.5rem] mx-auto mt-2">
                                                <div className="line w-full h-[5px] bg-[#E5E5E5] rounded-[14px]">
                                                    <div className="w-[30%] h-[5px] bg-[#FF8585] rounded-[14px] mr-auto"></div>
                                                </div>
                                            </div>

                                            <h1 className="mt-7 text-right font-bold mb-1">شرح تبلیغ</h1>
                                            
                                            <p className="text-[14px] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                       
                                        </div>

                                        <div className="end pb-2 border-b-[#52525274] border-b-[1px] font-bold text-[15px] gap-20 my-3 container">
                                            <h1>مبلغ پرداخت شده: </h1>
                                            <h1>۲.۰۰۰.۰۰۰ میلیون ریال</h1>
                                        </div>

                                        <button onClick={() => setShowT(true)} className="title w-[70%] h-[3rem] bg-[#AFC0FF] text-white rounded-[12px]">دانلود جزئیات</button>
                                        
                                        {showT &&
                                            <div className="modal-account overflow-y-scroll mb-20">
                                                <div className="container-modal-account py-0 rounded-t-xl">
                                                    
                                                    <div className="header flex w-[100%] justify-start py-3 flex-col bg-[#CEEABC] rounded-b-[24px]">
                                                        <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                                            <div className="right flex gap-2">
                                                                <img className="w-7 rounded-[8px]" src="hashtag-green.png" alt="png" />
                                                                <h1 className="title ">جزئیات تبلیغ 1</h1>
                                                            </div>

                                                            <div className="left cursor-pointer mr-auto">
                                                                <img onClick={() => setShowT(false)} className="rounded-full w-10" src="Account-page/arrow.png" alt="png"/>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>        

                                                    <div className="top w-[90%] mx-auto mt-4">
                                                        
                                                        <img className="w-[7rem] mx-auto" src="Concat.png" alt="png" />
                                                        
                                                        <div className="banner container w-full h-[10rem] font-bold mt-3 text-[18px] bg-[#D9D9D9] rounded-[12px]">
                                                            تصویر بارگذاری شده
                                                        </div>

                                                        <div className="items mt-8 flex gap-5 flex-col">

                                                            <div className="item flex justify-start">
                                                                <h1 className="ml-auto font-bold text-[17px]">زمان تعیین شده تبلیغ</h1>
                                                                <h1>4 روز</h1>
                                                            </div>

                                                            <div className="item flex justify-start">
                                                                <h1 className="ml-auto font-bold text-[17px]">تاریخ درخواست</h1>
                                                                <h1>13:14 جمعه ، 31 فروردین 1403</h1>
                                                            </div>

                                                            <div className="item flex justify-start">
                                                                <h1 className="ml-auto font-bold text-[17px]">تاریخ اتمام </h1>
                                                                <h1>13:14 جمعه ، 31 فروردین 1403</h1>
                                                            </div>

                                                            <div className="pr mt-4 border-b-[1px] border-b-[#7a7a7a5c] pb-3">
                                                                <h1 className="font-bold text-[17px] text-right">توضیحات داده شده</h1>
                                                                <p className="text-[14px] text-right">
                                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                                                </p>
                                                            </div>

                                                            <div className="item flex justify-start mt-4">
                                                                <h1 className="ml-auto font-bold text-[17px]">مبلغ پرداخت شده</h1>
                                                                <h1 className="font-bold">۲.۰۰۰.۰۰۰ میلیون ریال</h1>
                                                            </div>

                                                            <div className="item flex justify-start">
                                                                <h1 className="ml-auto font-bold text-[17px]"> شماره مرجع </h1>
                                                                <h1>41342342342112</h1>
                                                            </div>

                                                            <div className="item flex justify-start">
                                                                <h1 className="ml-auto font-bold text-[17px]"> تعداد بازدید </h1>
                                                                <h1 className="font-bold">200 نفر</h1>
                                                            </div>

                                                            <div className="linee w-full mt-10 h-[1px]"></div>
                                                            <button onClick={() => setShowT(false)} className="w-full h-[3rem] mt-1 mb-10 rounded-[12px] text-white bg-[#AFC0FF]">پذیرفتم</button>
            



                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        }

                                    </div>

                                </div>

                                ||
                                
                                <div className="cards container flex-col mb-[7rem] w-[90%] mx-auto">

                                    <div className="card-order flex flex-col justify-center items-center mx-auto cursor-pointer w-[100%] px-4 py-3 my-10">
                                        
                                        <div className="top container gap-2">
                                            
                                            <div className="right w-[20%] flex justify-start items-start">
                                                <img className="w-14 rounded-full" src="3Dgreen.png" alt="png" />
                                            </div>

                                            <div className="center w-[80%] container flex-col">
                                                <h1 className="font-bold ml-auto text-[20px]">تبلیغ 2</h1>
                                                <div className="container gap-2">
                                                    <img className="w-4" src="paper.png" alt="png" />
                                                    <h2 className="ml-auto text-[16px] mt-1"> هنوز پخش نشده است </h2>
                                                </div>
                                            </div>

                                            <img className="left w-[20px] mb-8 mr-auto" src="trush.png" alt="png" />
                                        
                                        </div>

                                        <div className="time-title font-bold text-[15px] my-4 gap-[9rem] flex">
                                            <h1>زمان تعیین شده تبلیغ :  </h1>
                                            <h1>4 روز</h1>
                                        </div>

                                        <div className="bottom pb-2 border-b-[#52525274] border-b-[1px]">
                                            
                                            <div className="bottom container w-full">
                                                <div className="right w-[50%] container gap-2">
                                                    <img className="w-[20px]" src="recently.png" alt="png" />
                                                    <h2>در انتظار تایید است</h2>
                                                </div>
                                                <div className="left w-[50%] container">
                                                    <h2 className="mr-auto ml-2">4 روز باقی مانده </h2>
                                                </div>
                                            </div>

                                            <div className="end w-[17.5rem] mx-auto mt-2">
                                                <div className="line w-full h-[5px] bg-[#E5E5E5] rounded-[14px]">
                                                </div>
                                            </div>

                                            <h1 className="mt-7 text-right font-bold mb-1">شرح تبلیغ</h1>
                                            
                                            <p className="text-[14px] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                    
                                        </div>

                                        <div className="end pb-2 border-b-[#52525274] border-b-[1px] font-bold text-[15px] gap-20 my-3 container">
                                            <h1>مبلغ پرداخت شده: </h1>
                                            <h1>۲.۰۰۰.۰۰۰ میلیون ریال</h1>
                                        </div>

                                        <button onClick={() => setShowT2(true)} className="title w-[70%] h-[3rem] bg-[#AFC0FF] text-white rounded-[12px]">دانلود جزئیات</button>
                                        
                                        {showT2 &&
                                            <div className="modal-account overflow-y-scroll mb-20">
                                                <div className="container-modal-account py-0 rounded-t-xl">
                                                    
                                                    <div className="header flex w-[100%] justify-start py-3 flex-col bg-[#CEEABC] rounded-b-[24px]">
                                                        <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                                            <div className="right flex gap-2">
                                                                <img className="w-7 rounded-[8px]" src="hashtag-green.png" alt="png" />
                                                                <h1 className="title ">جزئیات تبلیغ 2</h1>
                                                            </div>

                                                            <div className="left cursor-pointer mr-auto">
                                                                <img onClick={() => setShowT2(false)} className="rounded-full w-10" src="Account-page/arrow.png" alt="png"/>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>        

                                                    <div className="top w-[90%] mx-auto mt-4">
                                                        
                                                        <img className="w-[7rem] mx-auto" src="Concat.png" alt="png" />
                                                        
                                                        <div className="banner container w-full h-[10rem] font-bold mt-3 text-[18px] bg-[#D9D9D9] rounded-[12px]">
                                                            تصویر بارگذاری شده
                                                        </div>

                                                        <div className="items mt-8 flex gap-5 flex-col">

                                                            <div className="item flex justify-start">
                                                                <h1 className="ml-auto font-bold text-[17px]">زمان تعیین شده تبلیغ</h1>
                                                                <h1>4 روز</h1>
                                                            </div>

                                                            <div className="item flex justify-start">
                                                                <h1 className="ml-auto font-bold text-[17px]">تاریخ درخواست</h1>
                                                                <h1>13:14 جمعه ، 31 فروردین 1403</h1>
                                                            </div>

                                                            <div className="item flex justify-start">
                                                                <h1 className="ml-auto font-bold text-[17px]">تاریخ اتمام </h1>
                                                                <h1>13:14 جمعه ، 31 فروردین 1403</h1>
                                                            </div>

                                                            <div className="pr mt-4 border-b-[1px] border-b-[#7a7a7a5c] pb-3">
                                                                <h1 className="font-bold text-[17px] text-right">توضیحات داده شده</h1>
                                                                <p className="text-[14px] text-right">
                                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                                                </p>
                                                            </div>

                                                            <div className="item flex justify-start mt-4">
                                                                <h1 className="ml-auto font-bold text-[17px]">مبلغ پرداخت شده</h1>
                                                                <h1 className="font-bold">۲.۰۰۰.۰۰۰ میلیون ریال</h1>
                                                            </div>

                                                            <div className="item flex justify-start">
                                                                <h1 className="ml-auto font-bold text-[17px]"> شماره مرجع </h1>
                                                                <h1>41342342342112</h1>
                                                            </div>

                                                            <div className="item flex justify-start">
                                                                <h1 className="ml-auto font-bold text-[17px]"> تعداد بازدید </h1>
                                                                <h1 className="font-bold">200 نفر</h1>
                                                            </div>

                                                            <div className="linee w-full mt-10 h-[1px]"></div>
                                                            <button onClick={() => setShowT2(false)} className="w-full h-[3rem] mt-1 mb-10 rounded-[12px] text-white bg-[#AFC0FF]">پذیرفتم</button>
            



                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        }

                                        <div onClick={() => setPayTB(true)} className="button container gap-4 fixed right-[1rem] bottom-6 w-[8rem] text-white h-[3rem] bg-[#9AD07C] rounded-[12px]">
                                            <img className="w-[20px]" src="newTB.png" alt="png" />
                                            <button className="font-bold">
                                                تبلیغ جدید
                                            </button>
                                        </div>

                                        {payTB &&
                                            <div className="modal-account overflow-y-scroll mb-20">
                                                <div className="container-modal-account py-0 rounded-t-xl">
                                                    
                                                    <div className="header flex w-[100%] justify-start py-1 flex-col rounded-b-[24px]">
                                                        <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                                            <div className="right flex gap-2">
                                                                <img className="w-7 rounded-[8px]" src="hashtag.png" alt="png" />
                                                                <h1 className="title "> تبلیغات</h1>
                                                            </div>

                                                            <div className="left cursor-pointer mr-auto">
                                                                <img onClick={() => setPayTB(false)} className="rounded-full w-10" src="arrow.png" alt="png"/>
                                                            </div>
                                                        
                                                        </div>
                                                    </div> 

                                                    <div className="pr w-[90%] mx-auto">

                                                        <h1 className="mt-7 text-[20px] text-right font-bold mb-1">توضیحات </h1>
                                                
                                                        <p className="text-[15px] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                        
                                                    </div>

                                                    <div className="setting flex flex-col w-[90%] mx-auto mt-5">
                                                        <div className="title flex">تنظیمات تبلیغ</div>

                                                        <div className="items mt-3 flex gap-4">

                                                            <div className="left bg-[#D9D9D9] rounded-[13.68px] w-[82px] h-[82px]">

                                                            </div>

                                                            <div className="right h-[82px] flex flex-col w-[50%]">
                                                                <h1 className="font-bold text-[18px] text-right">بنر تبلیغاتی</h1>
                                                                <p className="text-[14px] mb-1 text-right">حداکثر حجم عکس 1 مگابایت</p>
                                                                <button className="bg-[#B7DF9E] w-[7rem] rounded-[12px] text-white px-2 py-1 ">بارگذاری</button>
                                                            </div>
                                                            
                                                        </div>

                                                        <div className="time flex flex-col mt-6 mb-1">
                                                            <h1 className="text-right font-bold">زمان تبلیغ: </h1>
                                                            <input className="rounded-[12px] text-[18px] px-2 w-[60%] h-[3rem] border-[2px] border-[#63636396]" placeholder=". مدت زمان مورد نظر را وارد کنید" type="text" />
                                                        </div>

                                                        <div className="price border-b-[2px] border-b-[#89898966] py-6 my-4 border-t-[2px] border-t-[#89898966]">
                                                            <h1 className="text-right">قیمت محاسبه شده بر اساس روز : </h1>
                                                            <h1 className="font-bold text-[22px]">۲.۰۰۰.۰۰۰ میلیون ریال</h1>
                                                        </div>

                                                        <div className="explain mt-3">
                                                            <p className="font-bold text-right my-1">توضیحات تبلیغ</p>
                                                            <textarea className="login-textarea" placeholder=". توضیحات تبلیغ رو شرح بدهید"></textarea>
                                                        </div>

                                                        <button onClick={() => setPayTB2(true)} className="w-full h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] mt-4 mb-10">پرداخت</button>

                                                    </div>
                                                    

                            
                                                </div>
                                            </div>
                                        }

                                        {payTB2 &&
                                            <div className="modal-account overflow-y-scroll mb-20">
                                                <div className="container-modal-account py-0 rounded-t-xl">
                                                    
                                                    <div className="header flex w-[100%] justify-start py-1 flex-col rounded-b-[24px]">
                                                        <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                                            <div className="right flex gap-2">
                                                                <img className="w-7 rounded-[8px]" src="wallet.png" alt="png" />
                                                                <h1 className="mt-1"> پرداخت مبلغ تبلیغات</h1>
                                                            </div>

                                                            <div className="left cursor-pointer mr-auto">
                                                                <img onClick={() => setPayTB2(false)} className="rounded-full w-10" src="arrow.png" alt="png"/>
                                                            </div>
                                                        
                                                        </div>
                                                    </div> 

                                                    <div className="price w-[90%] mx-auto border-b-[2px] border-b-[#a7a7a748] py-6 my-4">
                                                            <div className="flex gap-2">
                                                                <div className="w-4 h-4 bg-[#AFC0FF] rounded-[6px]"></div>
                                                                <h1 className="text-right">مبلغ سفارش شما :</h1>
                                                            </div>
                                                            <h1 className="font-bold text-[22px]">۲.۰۰۰.۰۰۰ میلیون ریال</h1>
                                                    </div>
                                                    
                                                    <div className="list flex w-[90%] mx-auto justify-center items-center gap-5 flex-col mt-10 mb-5">
                                                        <div className="flex gap-2 ml-auto">
                                                                <div className="w-4 h-4 bg-[#AFC0FF] rounded-[6px]"></div>
                                                                <h1 className="text-right">نحوه پرداخت خود را انتخاب کنید :</h1>
                                                        </div>
                                                        <button onClick={Changetheme} style={{background:bg1 , borderBlockColor:color1}} className="btn-login">
                                                            <img className="tik" src={tik} alt="png"/>
                                                            پرداخت مسقیم از طریق درگاه
                                                        </button>
                                                        <button onClick={Changetheme2} style={{background:bg_2 , borderBlockColor:color2}} className="btn-login">
                                                            <img className="tik" src={tik2} alt="png"/>
                                                            کیف پول : 200.000 تومان موجودی
                                                        </button>
                                                        <button onClick={Changetheme3} style={{background:bg3 , borderBlockColor:color3}} className="btn-login">
                                                            <img className="tik" src={tik3} alt="png"/>
                                                            کارت هدیه : 400.000 تومان موجودی 
                                                        </button>
                                                    </div>

                                                    <div className="code flex flex-col w-[90%] mx-auto">

                                                        <div className="flex gap-2 ml-auto">
                                                            <div className="w-4 h-4 bg-[#AFC0FF] rounded-[6px]"></div>
                                                            <h1 className="text-right">درصورت داشتن کد تخفیف ان را وارد کنید</h1>
                                                        </div>

                                                        <div className="time flex flex-col mt-2 mb-1 ml-auto w-full">
                                                            <h1 className="text-right font-bold">کد تخفیف : </h1>
                                                            <div>
                                                                <input className="rounded-[12px] text-[18px] px-2 w-[70%] rounded-l-none h-[3rem] border-[2px] border-[#63636396]" placeholder=". مدت زمان مورد نظر را وارد کنید" type="text" />
                                                                <button className="w-[30%] h-[3rem] text-white bg-[#92E3A9] rounded-l-[12px]">اعمال</button>
                                                            </div>
                                                        </div>

                                                        <div className="linee w-full h-[1px] mt-4"></div>

                                                        <button onClick={() => setPayTB3(true)} className="w-full h-[3rem] rounded-[12px] text-white bg-[#AFC0FF] mt-2 mb-10">پرداخت</button>

                                                    </div>
                            
                                                </div>
                                            </div>
                                        }

                                        {payTB3 &&
                                            <div className="modal-account overflow-y-scroll mb-20">
                                                <div className="container-modal-account py-0 rounded-t-xl">
                                                    
                                                    <div className="header flex w-[100%] justify-start py-1 flex-col rounded-b-[24px]">
                                                        <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                                            <div className="left cursor-pointer mr-auto">
                                                                <img onClick={() => setPayTB3(false)} className="rounded-full w-10" src="arrow.png" alt="png"/>
                                                            </div>
                                                        
                                                        </div>
                                                    </div> 

                                                    <div className="banner w-[90%] mx-auto container flex-col">
                                                        <img className="w-[7rem]" src="Concat.png" alt="png" />
                                                        
                                                        <h1 className="text-[24px] mt-2 font-bold">۲.۰۰۰.۰۰۰ میلیون ریال</h1>
                                                        
                                                        <h2 className="text-[18px] mt-2">به حساب کانکت نشست</h2>
                                                        
                                                        <button className="border-[2px] mt-2 bg-[#a8caba37] border-[#74D7A9] py-3  rounded-[12px] gap-3 container w-[55%]">
                                                            <img className="tik rounded-full" src="tik-green.png" alt="png"/>
                                                            پرداخت موفق
                                                        </button>
                                                    </div>

                                                    <div className="list w-[90%] mx-auto">
                                                        <div className="flex px-4 py-5 mt-5 justify-center border-b-[#98989858] border-b-[2px] border-t-[#98989858] border-t-[2px]">
                                                            <h1 className="ml-auto text-xl">زمان :</h1>
                                                            <h2 className="text-[17px]">13:14 جمعه ، 31 فروردین 1403</h2>
                                                        </div>
                                                    </div>

                                                    <div className="list w-[90%] mx-auto">
                                                        <div className="flex px-4 py-5 justify-center border-b-[#98989858] border-b-[2px]">
                                                            <h1 className="ml-auto text-xl">انتقال دهنده :</h1>
                                                            <h2 className="text-[17px]">رضا احمدی </h2>
                                                        </div>
                                                    </div>

                                                    <div className="list w-[90%] mx-auto">
                                                        <div className="flex px-4 py-5 justify-center border-b-[#98989858] border-b-[2px]">
                                                            <h1 className="ml-auto text-xl">روش انتقال :</h1>
                                                            <h2 className="text-[17px]">کیف پول کانکت</h2>
                                                        </div>
                                                    </div>

                                                    <div className="list w-[90%] mx-auto">
                                                        <div className="flex px-4 py-5 justify-center border-b-[#98989858] border-b-[2px]">
                                                            <h1 className="ml-auto text-xl">مبدا :</h1>
                                                            <h2 className="text-[17px]">کانکت</h2>
                                                        </div>
                                                    </div>

                                                    <div className="list w-[90%] mx-auto">
                                                        <div className="flex px-4 py-5 justify-center border-b-[#98989858] border-b-[2px]">
                                                            <h1 className="ml-auto text-xl">شماره مرجع :</h1>
                                                            <h2 className="text-[17px]">41342342342112</h2>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="linee w-[90%] mx-auto h-[2px] mt-6"></div>

                                                    <div className="btn w-[90%] mx-auto container">
                                                        <button onClick={Close} className="w-full rounded-[12px] mx-auto h-[3rem] mt-3 text-white bg-[#AFC0FF] mb-10">پرداخت</button>
                                                    </div>


                            
                                                </div>
                                            </div>
                                        }

                                    </div>

                                </div>

                            }

                        </div>

                    </div>
                </div>
            }

        </>
    )
}