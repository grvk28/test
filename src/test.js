import React,{useState} from 'react';
import img1 from './images/images.jpg'
import img2 from './images/snowfall.jpg'
import icn1 from './images/icon.jpg'
import './tCSS.css';
//import {Link,NavLink} from 'react-router-dom' left due to installation issue #tried
let data=[];
function Test(){
    let [value1,Setvalue1]=useState('Select');
    let [value2,Setvalue2]=useState('Select');
    let [value3,Setvalue3]=useState('Select');
    let [list,Setlist]=useState(data);
    let handleSelect=e=>{
        Setvalue1(e.target.value);
    }
    let handleSelect1=e=>{
        Setvalue2(e.target.value);
    }
    let handleSelect2=e=>{
        Setvalue3(e.target.value);
    }
    let handleClick1=(e)=>{
        console.log('click1')
    }
    let handleClick2=(e)=>{
        console.log('click2')
    }
    let addJr=()=>{
        let copy=[...list];
        copy=[...copy,{'userid':1,"Location":value1,"Category":value2,'Persons':value3}];
        Setlist(copy)
        console.log(copy);
        Setvalue1('Select')
        Setvalue2('Select')
        Setvalue3('Select')
    }
    let handleClick3=(e)=>{
        console.log('click3',value1,value2,value3)
        e.preventDefault();
        if(value1!=='Select' && value2!=='Select' && value3!=='Select')
        addJr();
    }
    return(
        <>
            <div class='a' style={{display:'flex',flexDirection:'column',backgroundColor:'#ecf4f2',minHeight:'500px',minWidth:'100%'}}>
                <div class="aa" style={{width:'90%',marginLeft:'10%'}}>
                <div class="aaa" style={{display:'flex',flexDirection:'row',minHeightL:'100px',padding:'2%',
                fontFamily:'monospace', fontWeight:'bold',minWidth:'100%'}}>
                    <div class="aaaa" style={{minWidth:'25%',fontFamily:'Chilanka',fontSize:'100%',
                    fontWeight:'bold',textAlign:'left'}}>Travel</div>
                    <div class="aaab" style={{display:'flex',flexDirection:'row',minWidth:'40%'}}>
                        <div class="aaaba" style={{minWidth:'5%'}}>Home</div>
                        <div class="aaabb" style={{minWidth:'5%'}}></div>
                        <div class="aaabc" style={{minWidth:'15%'}}>About</div>
                        <div class="aaabd" style={{minWidth:'5%'}}></div>
                        <div class="aaabe" style={{minWidth:'15%'}}>Packages</div>
                        <div class="aaabf" style={{minWidth:'5%'}}></div>
                        <div class="aaabg" style={{minWidth:'15%'}}>Contact Us</div>
                        <div class="aaabh" style={{minWidth:'5%'}}></div>
                        <div class="aaabi" style={{minWidth:'15%'}}>FAQ</div>
                    </div>
                    
                    <div class="aaac" style={{minWidth:'25%'}}>
                        <button class="aaaca" style={{background:'blue', borderRadius:'10%',minWidth:'10%',
                        padding:'2%',maxHeight:'100%',fontWeight:'bold', color:'white',borderColor:'blue'}} 
                        onClick={handleClick1}>Register</button>
                    </div>
                    
                </div>
                <div class="aab" style={{minHeight:'50px'}}></div>
                <div class="aac" style={{display:'flex',flexDirection:'row',minHeightL:'700px'}}>
                    <div class="aaca" style={{width:'50%',display:'flex', flexDirection:'row'}}>
                        <div class="aacaa"><img src={img1} style={{width:'110%',height:'360px' ,borderRadius:'40%',
                        borderColor:'white',borderStyle:'solid',borderWidth:'5px'}}/></div>
                        <div class="aacab" style={{display:'flex',flexDirection:'column'}}>
                        <div class="aacac" style={{height:'100px'}}></div>
                        <div class="aacad"><img src={img2} style={{width:'90%',height:'300px',zIndex:'1',marginLeft:'-45%',
                        borderRadius:'40%',borderColor:'white', borderStyle:'solid',borderWidth:'5px'}}/></div>
                        </div>
                    </div>
                   
                    <div class="aacb" style={{width:'50%',display:'flex',flexDirection:'column',fontFamily:'monospace',textAlign:'left'}}>
                        <div class="aacba" style={{fontWeight:'bold',fontSize:'13px',color:'lightblue'}}>Book Now</div>
                        <div class="aacbb" style={{fontSize:'40px',fontFamily:'Times',fontWeight:'bold'}}>Let's Enjoy Your Trip</div>
                        <div class="aacbc" style={{fontSize:'40px',fontFamily:'Times',fontWeight:'bold'}}>With TripGoal</div>
                        <div class="aacbd" style={{width:'100%',fontSize:'9px',marginTop:'20px',lineHeight:'1.6'}}>
                            <div class="h002130">Thinking of taking a break from every day's busy life? Planning to go</div>
                            <div class="h002131">out of the country with your loved ones to have some fun and quality</div>
                            <div class="h002132">time in a cost effective way?</div>
                        </div>
                        <div class="aacbe" style={{marginTop:'20px'}}>
                            <button class="aacbea" style={{fontWeight:'bold',background:'blue', borderRadius:'10%',padding:'2%',
                             color:'white', width:'25%',borderColor:'blue',marginTop:'5%'}} 
                             onClick={handleClick2}>Start Now</button>
                        </div>
                    </div>
                </div>
                <div class="aad" style={{minHeight:'100px'}}></div>

                </div>
            </div>
            <div class="b" style={{backgroundColor:'#F2F3F4'}}>
            <form class="ba" style={{display:'flex',flexDirection:'row',minHeight:'100px',padding:'2%',marginTop:'-6%', 
            marginLeft:'20%', width:'50%',textAlign:'center',fontFamily:'monospace'}}
            onSubmit={handleClick3}>
                    <div class="baa" style={{padding:'2%',background:'white',width:'25%',borderRadius:'18%',marginRight:'-3%'}}>
                        <select class="100" onChange={handleSelect} style={{backgroundColor:'white',borderColor:'white',
                        marginTop:'10%',padding:'5%',fontWeight:'bold'}} value={value1}>
                        <option selected>Location </option>
                        <option>Kashmir</option>
                        <option>Goa</option></select>
                        <div style={{marginLeft:'-12%'}}>{value1}</div>
                    </div>
                    <div class="bab" style={{padding:'2%',background:'white',width:'25%'}}>
                        <select class="baba" style={{backgroundColor:'white',borderColor:'white',marginTop:'10%',padding:'5%',
                        fontWeight:'bold'}} onChange={handleSelect1} value={value2}>
                        <option selected>Your Category </option>
                        <option>AC</option>
                        <option>Non-AC</option></select>
                        <div class="111" style={{marginLeft:'-33%'}}>{value2}</div>
                    </div>
                    <div class="bac" style={{padding:'2%',background:'white',width:'25%',zIndex:'1'}}>
                        <select class="120" style={{backgroundColor:'white',borderColor:'white',marginTop:'10%',padding:'5%',
                        fontWeight:'bold'}} onChange={handleSelect2} value={value3}>
                        <option selected>Total Person </option>
                        <option>1</option><option>2</option>
                        <option>3</option><option>4</option>
                        <option>5</option>
                        </select>
                        <div class="121" style={{marginLeft:'-25%'}}>{value3}</div>
                    </div>
                    <button class="bad" style={{padding:'2%',background:'blue',width:'25%',borderRadius:'18%',zIndex:'0',marginLeft:'-3%'
                    ,borderColor:'blue'}}>
                        <div class="bada" style={{display:'flex',flexDirection:'column',width:'100%',color:'white',fontWeight:'bold'
                        ,marginTop:'10%',marginLeft:'9%'}}>
                            <div><img src={icn1} style={{width:'15px',height:'15px'}}/></div>
                            <div style={{marginTop:'5%'}}>Book Now</div>
                        </div>
                    </button>
            </form>
            </div>
            
            <div class="c" style={{backgroundColor:'#F2F3F4',marginTop:'-6%'}}>
                
                <div class="ca" style={{display:'flex',flexDirection:'column',minHeightL:'500px',textAlign:'center',
                fontFamily:'monospace'}}>
                    <div class="caa" style={{fontSize:'30px' ,marginTop:'9%',fontFamily:'Times',fontWeight:'bold'}}>
                        Discover The Most</div>
                    <div class="cab" style={{marginTop:'-0%',fontSize:'30px',fontFamily:'Times',fontWeight:'bold'}}>
                        Engaging Places</div>
                    
                    <div class="cac" style={{marginTop:'20px',fontSize:'9px'}}>It is a long established fact that a reader 
                    will be whole world took</div>
                    <div class="cad" style={{fontSize:'9px'}}>then we make tour for world best tour</div>
                </div>
                <div class="cb" style={{minHeight:'50px'}}></div>
            </div>
        </>
    )
}

export default React.memo(Test);