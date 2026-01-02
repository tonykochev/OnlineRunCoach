import { Link } from "react-router"
import { CalendarDays, Bell, User } from "lucide-react"
import { useState } from "react"

const NavBar = () => {
    const [selectedWeek, setSelectedWeek] = useState("Week 1")
  return (
  <header className='bg-base-300 border-b border-base-content/10'>
    <div className='mx-auto max-w-6xl p-4'>
        <div className='relative flex items-center justify-between'>

            
            <div className="flex items-center gap-4"> 
            <h1 className='text-3xl, font-bold text-primary front-mono tracking-tight'>OnlineRunningCoach</h1>
            


            {/* Profile */}
            <button className="btn btn-ghost btn-cirlce">
                <User className="size-5 text-primary"/>
            </button>

            {/* Notifications */}
            <button className="btn btn-ghost btn-circle">
                <Bell className="size-5 text-primary" />
            </button>
            </div>

        {/* CENTER */}
        <div className="absolute left-1/2 -translate-x-1/2">
            <div className="dropdown dropdown-center">
                <div 
                    tabIndex={0} 
                    role="button" 
                    className="btn btn-ghost rounded-field m-1">{selectedWeek}</div>
                <ul 
                    tabIndex="-1" 
                    className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm left-1/2 -translate-x-1/2"
                    >
                    <li>
                        <button onClick={() => setSelectedWeek ("Week 1")}>
                            Week 1
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setSelectedWeek ("Week 2")}>
                            Week 2
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setSelectedWeek ("Week 3")}>
                            Week 3
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        {/* CENTER */}
        <div className="ml-auto">
            <Link to={"/create"} className="btn btn-ghost">
                <CalendarDays className="size-7 text-primary"/>
            </Link>
        </div>


            <div className="flex items-center gap-4">
                
            </div>
        </div>
    </div>
  </header>
  )
}
export default NavBar
