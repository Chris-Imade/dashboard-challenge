import React from 'react'
import { Link, Outlet, Route } from 'react-router-dom'
import { assets } from './constants'



let navRoutes = {
    firstTier: [
        {
            id: Math.random().toString(36).substring(2, 9),
            routeName: "Dashboard",
            routePath: "dashboard",
            routeIcon: assets.dashboardIcon
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            routeName: "Messages",
            routePath: "messages",
            routeIcon: assets.messageTabIcon
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            routeName: "Team Members",
            routePath: "team-members",
            routeIcon: assets.teamMembers
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            routeName: "Calender",
            routePath: "calendar",
            routeIcon: assets.calendarTabIcon
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            routeName: "Settings",
            routePath: "settings",
            routeIcon: assets.settingIcon
        }
    ]
}


interface NavProps {
    routeName: string;
    routePath: string;
    routeIcon: string;
}

const NavComp = ({routeName, routePath, routeIcon}: NavProps) => {
    return (
        <Link to={`/${routePath}`}>
            <div className={`flex justify-start items-center mx-[30px] mb-[30px]`}>
                <img 
                    src={routeIcon} 
                    alt="route icon"
                    style={{
                        width: "24px",
                        marginRight: "17px"
                    }}
                />
                <span className='text-[#848484]'>{routeName}</span>
            </div>
        </Link>
    )
}


const Aside = () => {
  return (
        <>
            <div className={`bg-[#F6F6F6] h-[100vh] w-[20%]`}>
                {/* logo section */}
                <div>
                    <Link to={"/"} className={`relative flex p-[30px] items-center justify-center`}>
                        <img 
                            src={assets.logoOne} 
                            alt="logoOne"
                            style={{
                                width: "27px",
                                height: "36px"
                            }}
                            className={``}
                        />
                        <img 
                            src={assets.logoOne} 
                            alt="logoOne"
                            style={{
                                width: "27px",
                                height: "36px"
                            }}
                            className={`ml-[-.57rem] mt-[2rem]`}
                        />
                        <h4 className={`text-5xl ml-4 font-bold`}>Grind</h4>
                    </Link>
                </div>
                {navRoutes.firstTier.map((item) => (
                    <NavComp key={item.id} {...item} />
                ))}
            </div>
            <Outlet />
        </>
  )
}

export default Aside