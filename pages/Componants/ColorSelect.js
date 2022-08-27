import React, { useState,useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
function ColorSelect() {
    const dropdownList = [
        {id: 0, name: 'black', code: '#000'},
        {id: 1, name: 'white', code: '#fff'},
        {id: 2, name: 'Silver', code: '#D5D5DC'},
        {id: 3, name: 'Grey', code: '#7B7B7B'},
        {id: 4, name: 'Blue', code: '#356799'},
        {id: 5, name: 'Maroon', code: '#660900'},
        {id: 6, name: 'Red', code: '#CC1200'},
        {id: 7, name: 'Yellow', code: '#FFD147'},
        {id: 8, name: 'Green', code: '#3D7B66'},
        {id: 9, name: 'Brown', code: '#5A4F3D'},
        {id: 10, name: 'Gold', code: '#CC9900'},
        {id: 11, name: 'Beige', code: '#E1C699'},
        {id: 12, name: 'Orange', code: '#F99147'},
        {id: 13, name: 'Purple', code: '#800080'},
        {id: 14, name: 'Other', code: '#000'},
    ];
    const [dropdown, setdropdown] = useState([]);

    const dropdownListClick = (e) => {
      console.log("filteredList",dropdownList[e].name);
      setdropdown([dropdownList[e]])
    };
    
    useEffect(() => {
      console.log("dropdown",dropdown);
      if (dropdown === undefined || dropdown.length == 0) {
        console.log('array is empty');
        setdropdown([{id: 0, name: 'Choose Color'}]);
      }
      if (dropdown.length > 0) {
        console.log('array is NOT empty');
      }
    }, [dropdown])

  return (
    <>
        <Dropdown className="color_picker">
            <Dropdown.Toggle id="dropdown-basic" className="color_picker_toggle"> 
            <span>{JSON.stringify(dropdown.name)}</span>          
            {dropdown.map(item => {
            return <>
                {item.name.length < 0 ? <span>Choose Color</span> : <span>{(item.name)}</span> }
            </>;
        })}
            </Dropdown.Toggle>
            <Dropdown.Menu className="color_list">
                {dropdownList.map((value,i) => {
               return (
                 <>                   
                   <Dropdown.Item className="color_item" href="#/action-1" onClick={() => dropdownListClick(i)}
                     key={value.id} id={value.id}>
                        <div className="dropItemSpn">
                            <span style={{backgroundColor: value.code}}></span>
                        </div>
                        <span>{value.name}</span>
                     </Dropdown.Item>
                 </>
               );
             })}
            </Dropdown.Menu>
        </Dropdown>
     </>
  )
}

export default ColorSelect