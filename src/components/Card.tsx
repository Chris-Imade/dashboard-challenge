import React from 'react'
import { assets } from '../constants'
import CardImg from "../assets/card.png";

type Fullcard = { title: string, design: string, priority: string, comments: number, handles: number, image?: string }
type CardSolo = { textColour: string, bgColor: string, cardTitle: any, className: string  } 
const CardActionBtn = (card:CardSolo) => {
  return (<span className={`${card.textColour} ${card.bgColor} ${card.className} rounded-[11px] py-2 px-2 font-semibold transition-all ease-out`} style={{transition: 'all', transitionDuration: "600ms"}}>{card.cardTitle}</span>)
}

const Card = (card: Fullcard) => {
  
  let progress: number = 70;

  return (
    <div className={`bg-white rounded-[8px] p-4 max-w-[301px]`}>
      <div className={`flex justify-between items-center`}>
        <div>
          <CardActionBtn 
            textColour={` hover:text-[#FFE9E9] text-[#DC7878]`} 
            bgColor={`hover:bg-[#DC7878] bg-[#FFE9E9]`} 
            cardTitle={card.priority} 
            className={`mr-4 cursor-pointer`} 
          />
          <CardActionBtn 
            textColour={" hover:text-[#F1F1F1] text-[#848484]"} 
            bgColor={"hover:bg-[#848484] bg-[#F1F1F1]"} 
            cardTitle={card.design} 
            className={`mr-4 cursor-pointer`} 
          />
        </div>
        <div>
        <button className='hover:bg-[#F1F1F1] rounded-full p-1'>
          <img 
            src={assets.more} 
            alt="hamburger menu"
            width={"24px"}
            height={"24px"}
          />
        </button>
        </div>
      </div>
      <h1 className={`font-semibold text-xl mb-2 mt-4`}>{card.title}</h1>

      {/* card image not compulsory */}
      <img
       src={assets.imageCard} 
       alt="card display"
       className={`w-full cursor-pointer`} 
      />


      {/* Add persons */}
      <div className='my-4 flex'>
        <div className={`flex`}>
          <img 
            src={assets.womanAvatar} 
            alt="woman avatar"
            className={`w-[29.47px] cursor-pointer`} 
          />
          <img 
            src={assets.manAvatar} 
            alt="man avatar"
            className={`w-[29.47px] z-10 ml-[-.4rem] cursor-pointer`}
          />
        </div>
        
        <button className={`flex ml-2 justify-center items-center`}>
          <img 
          src={assets.addIcon} 
          alt="add icon"
          className='w-[6px] h-[6px]'
          />
          <p className={`text-[#0066FF] font-semibold ml-1 text-[13px]`}>Add</p>
        </button>
      </div>

      {/* Progress */}
      {/* I need to sort a way to get the progress dynamically */}
      <div>
        <div className='flex items-center justify-between'>
          <h2 className={`text-[#848484]`}>Task Progress</h2>
          <p className={`text-[#848484]`}>7/10</p>
        </div>
        <div className={`max-w-[262px] h-[5px] bg-[#EDECEC] rounded-[13px] mt-1`}>
          <div className={`h-[5px] bg-[#0066FF] rounded-[13px] w-[70%]`}></div>
        </div>

        {/* Horizontal line */}

        <hr className='mt-4 mb-2 text-[#CDCDCD' />

        {/* card actions */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center justify-start'>
            <div className='flex justify-center items-center'>
              <img 
                src={assets.messages} 
                alt="messages"
                className='w-[20px] h-[20px]' 
              />
              <p className='text-[#848484]'>{card.comments}</p>
            </div>
            <div className='flex justify-center items-center ml-6'>
              <img 
                src={assets.link} 
                alt="link"
                className='w-[20px] h-[20px]' 
              />
              <p className='text-[#848484]'>{card.handles}</p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img 
              src={assets.calendar} 
              alt="calender"
              className='w-[20px] h-[20px]'  
            />
            <p className='text-[#848484]'>Due: 2/Oct</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card