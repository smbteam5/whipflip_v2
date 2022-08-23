import { useState } from "react"

export default function SidebarItem({item}){
    //console.log("item",item.childrens)
    const [open, setOpen] = useState(false)    
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" onClick={() => setOpen(!open)}>
                    <span>
                        {item.title}    
                    </span> 
                    <i className="bi-chevron-down toggle-btn"></i>
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }
    else
    {
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {item.title}
            </a>
        )
    }
}