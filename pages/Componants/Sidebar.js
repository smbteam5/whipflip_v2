import SidebarItem from "./SidebarItem"
import items from "../data/sidebar.json"

export default function Sidebar({openSideBar,setOpenSideBar}){
        
    return (
        openSideBar && 
        <div className="sidebar">
            <div className="sidebar-header">
                <span>Menu</span>
                <span className="close" onClick={()=>setOpenSideBar(false)}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.8 11.25L0.75 10.2L4.95 6L0.75 1.8L1.8 0.75L6 4.95L10.2 0.75L11.25 1.8L7.05 6L11.25 10.2L10.2 11.25L6 7.05L1.8 11.25Z" fill="#353442"/>
                    </svg>
                </span>
            </div>
            {items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}