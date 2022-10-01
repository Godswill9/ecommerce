import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header'
import "./homepage.css"

export default function Homepage() {
    const itemsArray=useRef()
    const backgroundArray=useRef()
    const redirect=useNavigate()

    useEffect(()=>{
        let val=100
        let counter=0
        let arr=itemsArray.current.childNodes
        setInterval(()=>{
            counter++
            if(counter===arr.length) counter=0
            let newOutput=val*counter
            if(itemsArray===undefined) return;
            else{
            arr.forEach((item, index) => {
            item.style.transform=`translateY(-${newOutput}%)`
            });
            }
        }, 2000)
          },[itemsArray])
    // useEffect(()=>{
    //     let counter=0
    //     // let arr=["/images/laptop6.webp","/images/headset1.jpeg"]
    //     // let arr=["blue", "red", "black"]
    //     let arr=[""]
    //     setInterval(()=>{
    //         counter++
    //         if(counter===arr.length) counter=0
    //         if(backgroundArray===undefined) return;
    //         else{
    //             backgroundArray.current.style.background=`${arr[counter]}`
    //         }
    //     }, 3000)
    //       },[backgroundArray])

  return (
    <div>
        <Header/>
        <div className='Home'>
            <div ref={backgroundArray} className='hero'>
                <div className='part1'>
                 <h1>Get the best deals of 
                <div ref={itemsArray} className="products">
                    <div>Laptops</div>
                    <div>iPhones</div>
                    <div>Gadgets</div>
                </div> 
             here</h1>
                 <p>Find affordable laptops, iPhones, tablets, that fits your style</p>
                 <button>Shop now</button>
                </div>
                {/* <div className='part2'>
                    <div className='imageCont'>
                        <div className='laptop'>
                            <img src="/images/laptop6.webp"></img>
                            <span>Go to Laptops</span>
                        </div>
                        <div className='inner'>
                        <div className='Gadgets'>
                            <img src="/images/earpods.jpeg"></img>
                            <span>Go to Gadgets</span>
                        </div>
                        <div className='Phones'>
                            <img src="/images/phone.jpeg"></img>
                            <span>Go to Phones</span>
                        </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='announce'>
               The new iPhone14 would be 30% off by 2am tonight, (show only to registered users)
            </div>
            <div className='billboard'>
                <div className='indiv'>
                    <img src="/images/iphoneBackground.jpeg"></img>
                    <div><button onClick={()=>redirect('/findPhones')}>View phones</button></div>
                </div>
                <div className='indiv'>
                    <img src="/images/laptop2.jpeg"></img>
                    <div><button onClick={()=>redirect('/findLaptops')}>View laptops</button></div>
                </div>
                <div className='indiv'>
                    <img src="/images/earpods.jpeg"></img>
                    <div><button onClick={()=>redirect('/findGadgets')}>View gadgets and accessories</button></div>
                </div>
                <div className='indiv'>
                    <img src="/images/fixLaptops.jpeg"></img>
                    <div><button onClick={()=>redirect('/repairs')}>fix your pc</button></div>
                </div>
            </div>
            <div className='flashSales'>
                <div className='innerr'>
                <h1>Flash Sales</h1>
                <div className='flash'>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/iphone6.webp'></img>
                                <span>10% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">iPhone 14pro</div>
                                <div className='formerPrice'>$400</div>
                                <div className='newPrice'>$390</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/phone.jpeg'></img>
                                <span>5% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">Samsung s9</div>
                                <div className='formerPrice'>$235</div>
                                <div className='newPrice'>$230</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/laptop1.jpeg'></img>
                                <span>13% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">Mac book pro laptop</div>
                                <div className='formerPrice'>$300</div>
                                <div className='newPrice'>$289</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/laptop4.jpeg'></img>
                                <span>33% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">HP Portable laptop</div>
                                <div className='formerPrice'>$120</div>
                                <div className='newPrice'>$114</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                </div>
                    <div className='big_timer'>
                        <span>FlashSale Offers end by</span>
                        <span>05:10:2023</span>
                    </div>
            </div>
            </div>
            <div className='advertSec'>
                <div className='innerr'>
                <h1>Trending deals</h1>
                <div className='flash'>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/laptops5.jpeg'></img>
                                <span>10% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">Del ultra</div>
                                <div className='formerPrice'>$200</div>
                                <div className='newPrice'>$190</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/laptop3.jpeg'></img>
                                <span>5% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">Lenovo</div>
                                <div className='formerPrice'>$140</div>
                                <div className='newPrice'>$135</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/iphones.jpeg'></img>
                                <span>13% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">iPhone 7</div>
                                <div className='formerPrice'>$120</div>
                                <div className='newPrice'>$114</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/headset1.jpeg'></img>
                                <span>33% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">Sharp headset</div>
                                <div className='formerPrice'>$40</div>
                                <div className='newPrice'>$39</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/laptops5.jpeg'></img>
                                <span>10% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">Del ultra</div>
                                <div className='formerPrice'>$200</div>
                                <div className='newPrice'>$190</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/laptop3.jpeg'></img>
                                <span>5% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">Lenovo</div>
                                <div className='formerPrice'>$140</div>
                                <div className='newPrice'>$135</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/iphones.jpeg'></img>
                                <span>13% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">iPhone 7</div>
                                <div className='formerPrice'>$120</div>
                                <div className='newPrice'>$114</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                    <div className='indiv'>
                            <div className='up'>
                                <img src='/images/headset1.jpeg'></img>
                                <span>33% off</span>
                            </div>
                            <div className='more'>
                               <div className="name">Sharp headset</div>
                                <div className='formerPrice'>$40</div>
                                <div className='newPrice'>$39</div>
                            </div>
                            <div className='hovered'>
                                <button>Save (icon)</button>
                                <button>add to carts</button>
                            </div>
                    </div>
                </div>
            </div>
            </div>
            {/* footer */}
            <div className='getInTouch'>
                <div className="inner">
                    <h1>Subscribe to our newsletter to recieve updates about new products</h1>
                    <form>
                       <input type="email" placeholder='Email'></input><br></br>
                       <button>Send me updates</button>
                    </form>
                    <div className='more'>
                        <h4>Follow us on our social media platforms</h4>
                        <div className="links">
                            <i class="bi bi-telegram"></i>
                            <i class="bi bi-telegram"></i>
                            <i class="bi bi-telegram"></i>
                            <i class="bi bi-telegram"></i>
                            <i class="bi bi-telegram"></i>
                        </div>
                    </div>
                    <div className='copyright'>
                       <span>Copyright privacy; all rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
