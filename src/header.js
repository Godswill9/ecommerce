import React, { useState } from 'react'
import "./header.css"

export default function Header() {
    const [header, setHeader]=useState("0px")
    const [dropdown, setDropdown]=useState("0px")
    const handleMenu=()=>{
       if(header==="0px")setHeader("")
       else if(header==="")setHeader("0px")
    }
    const handleDrop=()=>{
       if(dropdown==="0px")setDropdown("10.2em")
       else if(dropdown==="10.2em")setDropdown("0px")
    }
  return (
    <div className='Header'>
        <div className='logo'>
            <img src='/images/laptop1.jpeg'></img>
            <div className='texts'>
                <h3>My</h3>
                <span>Store</span>
            </div>
        </div>
        <div className='compView' >
            <div className='innerDiv'>
            <div className='link'>
                <div className='linkHead'>Gadgets <i class="bi bi-chevron-down"></i></div>
                <div className='linkBody'>
                    <a href='#'><div>Phone pouches</div></a>
                    <a href='#'><div>Screen guards</div></a>
                    <a href='#'><div>Laptop covers</div></a>
                    <a href='#'><div>visit page</div></a>
                </div>
            </div>
            <div className='link'>
                <div className='linkHead'>Laptops</div>
                {/* <div className='linkBody'>
                    <a href='#'><div>Phone pouches</div></a>
                    <a href='#'><div>Screen guards</div></a>
                    <a href='#'><div>Laptop covers</div></a>
                    <a href='#'><div>visit page</div></a>
                </div> */}
            </div>
            <div className='link'>
                <div className='linkHead'>Phones</div>
                {/* <div className='linkBody'>
                    <a href='#'><div>Phone pouches</div></a>
                    <a href='#'><div>Screen guards</div></a>
                    <a href='#'><div>Laptop covers</div></a>
                    <a href='#'><div>visit page</div></a>
                </div> */}
            </div>
         </div>
         <div className='moreSec'>
            <div className='link'>
                <div className='linkHead'><i class="bi bi-chat-dots"></i></div>
            </div>
            <div className='link'>
                <div className='linkHead'><i class="bi bi-cart4"></i></div>
            </div>
            <div className='link'>
                <div className='linkHead'><i class="bi bi-box-arrow-left"></i></div>
            </div>
         </div>
        </div>
        <div className='MobileView'>
            <div className='icon' onClick={handleMenu}> {header==="0px"?<i class="bi bi-list"></i> : <i class="bi bi-x"></i>}</div>
            <div className='wrapper'></div>  
            <div className='dropdown' style={{height:header}}>
                <div className='first'>
            <div className='link'>
                <div className='linkHead' onClick={handleDrop}>Gadgets <i class="bi bi-chevron-down"></i></div>
                <div className='linkBody' style={{height:dropdown}}>
                    <a href='#'><div>Phone pouches <i class="bi bi-arrow-right-short"></i></div></a>
                    <a href='#'><div>Screen guards <i class="bi bi-arrow-right-short"></i></div></a>
                    <a href='#'><div>Laptop covers <i class="bi bi-arrow-right-short"></i></div></a>
                    <a href='#'><div>visit page <i class="bi bi-arrow-right-short"></i></div></a>
                </div>
            </div>
            <div className='link'>
                <a href="#"><div className='linkHead'>Laptops <i class="bi bi-arrow-right"></i></div></a>
            </div>
            <div className='link'>
               <a href="#"><div className='linkHead'>Phones <i class="bi bi-arrow-right"></i></div></a>
            </div>
         </div>
     <div  className='second'>
         <div className='moreSec'>
            {/* <div className='link'> */}
                <div className='linkHead'><i class="bi bi-chat-dots"></i></div>
            {/* </div> */}
            {/* <div className='link'> */}
                <div className='linkHead'><i class="bi bi-cart4"></i></div>
            {/* </div> */}
            {/* <div className='link'> */}
                <div className='linkHead'><i class="bi bi-box-arrow-left"></i></div>
            {/* </div> */}
         </div>
     </div>
    </div>
    </div>
    </div>
  )
}
