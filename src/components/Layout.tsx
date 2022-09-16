import MLFlowContainer from "./MLFlowContainer"
import SideBar from "./SideBar"

const Layout = () => {
  return (
    <div className="w-screen h-screen flex">
       <SideBar className="h-full w-32 p-2 overflow-y-scroll bg-slate-200" />
       <MLFlowContainer className="h-full grow"/>
       <div className="h-full w-64">
        
       </div>
    </div>
  )
}

export default Layout