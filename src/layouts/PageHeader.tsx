import {ArrowLeft, Bell, Search, Upload, User} from 'lucide-react'

import logo from '../assets/logo.png'
import {Button} from "../components/Button.tsx";
import {useState} from "react";


export function PageHeader() {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
    return <div className='flex gap-4 lg:gap-20 justify-between mx-3'>
        <div className={`md:gap-2 flex-shrink-0 ${showFullWidthSearch ? 'hidden' : 'flex' }`}>
            <a href='/'>
                <img alt='TopModelVR Logo' className='h-20 ml-5 py-3' src={logo} />
            </a>
        </div>
        <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? 'flex' : 'hidden md:flex' }`}>
            <div className={'flex flex-grow max-w-[600px] items-center'}>
                <Button onClick={() => setShowFullWidthSearch(false)} size={'icon'} variant={'ghost'} className={`mx-2 ${showFullWidthSearch ? "flex" : "hidden"}`}>
                    <ArrowLeft color={'white'}/>
                </Button>
                <input type={'search'} placeholder={'Search'} className={'placeholder-white placeholder-opacity-50 text-white rounded-l-full py-1.5 px-4 text-lg w-full outline-none bg-secondary-themebgblueshadow'}/>
                <Button className={'bg-secondary-themebgblueshadow hover:bg-secondary-themebgblueshadow hover:bg-opacity-50 rounded-r-full py-2 px-5'}>
                    <Search opacity={'0.5'} color={'white'}/>
                </Button>
            </div>
        </form>
        <div className={`md:gap-2 py-1 items-center flex-shrink-0 ${showFullWidthSearch ? 'hidden' : 'flex' }`}>
            <Button onClick={() => setShowFullWidthSearch(true)} size={'icon'} variant={'ghost'} className={'flex md:hidden'}>
                <Search color={'white'}/>
            </Button>
            <Button size={'icon'} variant={'ghost'}>
                <Upload color={'white'}/>
            </Button>
            <Button size={'icon'} variant={'ghost'}>
                <Bell color={'white'}/>
            </Button>
            <Button size={'icon'} variant={'ghost'}>
                <User color={'white'}/>
            </Button>
        </div>
    </div>
}