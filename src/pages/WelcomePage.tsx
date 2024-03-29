import React from "react";
import {HeaderWithLogo} from "../components/HeaderWithLogo";
import {Robot} from "../components/Robot/Robot";

export const WelcomePage = () => {
    return <>
        <div className="bg-gradient h-screen w-screen overflow-hidden">

            <HeaderWithLogo borderColor={'bg-gray-700'}/>
            <div className={'flex flex-col h-full justify-center items-center'}>
                <div className={'flex flex-col h-3/4'}>
                    <div>
                        <Robot/>
                        <div className={'text-center text-white text-4xl mt-3 font-bold'}>Halyk AI</div>
                        <div className={'text-center text-gray-400'}>Ваш онлайн помощник 24/7. (От разработчиков: Тестовые данные для входа и подробная информация в readme.md)</div>
                    </div>
                    <a className={'m-auto bg-[#D8D8D8] border-2 rounded-full w-full p-4 font-bold text-green-800 text-xl text-center cursor-pointer hover:bg-transparent hover:text-white hover:border-white transition duration-75 ease-in'}
                       href={'/chat'}>
                        Начать
                    </a>
                </div>
            </div>
        </div>
    </>
}