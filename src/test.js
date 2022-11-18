import React,{useState} from 'react';
import img1 from './images.jpg'
import img2 from './snowfall.jpg'
import icn1 from './icon.jpg'
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
            <div style={{display:'flex',flexDirection:'column',backgroundColor:'#ecf4f2',minHeight:'500px'}}>
                <div style={{width:'80%',marginLeft:'10%'}}>
                <div style={{display:'flex',flexDirection:'row',minHeightL:'100px',padding:'2%',
                fontFamily:'monospace', fontWeight:'bold'}}>
                    
                    <div style={{marginLeft:'-20px' , fontFamily:'Chilanka',fontSize:'30px',fontWeight:'bold'}}>Travel</div>
                    <nav style={{marginTop:'10px',display:'flex',flexDirection:'row'}}>
                    <div style={{marginLeft:'200px',color:'skyblue'}}>Home</div>
                    <div style={{marginLeft:'20px'}}>About</div>
                    <div style={{marginLeft:'20px'}}>Packages</div>
                    <div style={{marginLeft:'20px'}}>Contact Us</div>
                    <div style={{marginLeft:'20px'}}>FAQ</div>
                    </nav>
                    <div>
                        <button style={{background:'blue', borderRadius:'10%',marginLeft:'250px',padding:'2%',
                         fontWeight:'bold', color:'white', width:'25%',borderColor:'blue'}} 
                        onClick={handleClick1}>Register</button>
                    </div>
                </div>
                <div style={{minHeight:'50px'}}></div>
                <div style={{display:'flex',flexDirection:'row',minHeightL:'700px'}}>
                    <div style={{width:'50%',display:'flex', flexDirection:'row'}}>
                        <div><img src={img1} style={{width:'110%',height:'360px' ,borderRadius:'40%',
                        borderColor:'white',borderStyle:'solid',borderWidth:'5px'}}/></div>
                        <div  style={{display:'flex',flexDirection:'column'}}>
                        <div style={{height:'100px'}}></div>
                        <div><img src={img2} style={{width:'90%',height:'300px',zIndex:'1',marginLeft:'-45%',
                        borderRadius:'40%',borderColor:'white', borderStyle:'solid',borderWidth:'5px'}}/></div>
                        </div>
                    </div>
                   
                    <div  style={{width:'50%',display:'flex',flexDirection:'column',fontFamily:'monospace',textAlign:'left'}}>
                        <div style={{fontWeight:'bold',fontSize:'13px',color:'lightblue'}}>Book Now</div>
                        <div style={{fontSize:'40px',fontFamily:'Times',fontWeight:'bold'}}>Let's Enjoy Your Trip</div>
                        <div style={{fontSize:'40px',fontFamily:'Times',fontWeight:'bold'}}>With TripGoal</div>
                        <div style={{width:'100%',fontSize:'9px',marginTop:'20px',lineHeight:'1.6'}}>
                            <div>Thinking of taking a break from every day's busy life? Planning to go</div>
                            <div>out of the country with your loved ones to have some fun and quality</div>
                            <div>time in a cost effective way?</div>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <button style={{fontWeight:'bold',background:'blue', borderRadius:'10%',padding:'2%',
                             color:'white', width:'25%',borderColor:'blue',marginTop:'5%'}} 
                             onClick={handleClick2}>Start Now</button>
                        </div>
                    </div>
                </div>
                <div style={{minHeight:'100px'}}></div>

                </div>
            </div>
            <form style={{display:'flex',flexDirection:'row',minHeight:'100px',padding:'2%',marginTop:'-6%', 
            marginLeft:'20%', width:'50%',textAlign:'center',fontFamily:'monospace'}}
            onSubmit={handleClick3}>
                    <div style={{padding:'2%',background:'white',width:'25%',borderRadius:'18%',marginRight:'-3%'}}>
                        <select onChange={handleSelect} style={{backgroundColor:'white',borderColor:'white',
                        marginTop:'10%',padding:'5%',fontWeight:'bold'}} value={value1}>
                        <option selected>Location </option>
                        <option>Kashmir</option>
                        <option>Goa</option></select>
                        <div style={{marginLeft:'-12%'}}>{value1}</div>
                    </div>
                    <div style={{padding:'2%',background:'white',width:'25%'}}>
                        <select style={{backgroundColor:'white',borderColor:'white',marginTop:'10%',padding:'5%',
                        fontWeight:'bold'}} onChange={handleSelect1} value={value2}>
                        <option selected>Your Category </option>
                        <option>AC</option>
                        <option>Non-AC</option></select>
                        <div style={{marginLeft:'-33%'}}>{value2}</div>
                    </div>
                    <div style={{padding:'2%',background:'white',width:'25%',zIndex:'1'}}>
                        <select style={{backgroundColor:'white',borderColor:'white',marginTop:'10%',padding:'5%',
                        fontWeight:'bold'}} onChange={handleSelect2} value={value3}>
                        <option selected>Total Person </option>
                        <option>1</option><option>2</option>
                        <option>3</option><option>4</option>
                        <option>5</option></select>
                        <div style={{marginLeft:'-25%'}}>{value3}</div>
                    </div>
                    <button style={{padding:'2%',background:'blue',width:'25%',borderRadius:'18%',zIndex:'0',marginLeft:'-3%'
                    ,borderColor:'blue'}}>
                        <div style={{display:'flex',flexDirection:'column',width:'100%',color:'white',fontWeight:'bold'
                        ,marginTop:'10%',marginLeft:'9%'}}>
                            <div><img src={icn1} style={{width:'15px',height:'15px'}}/></div>
                            <div style={{marginTop:'5%'}}>Book Now</div>
                        </div>
                    </button>
            </form>
            <div style={{backgroundColor:'#F2F3F4',marginTop:'-6%'}}>
                
                <div style={{display:'flex',flexDirection:'column',minHeightL:'500px',textAlign:'center',
                fontFamily:'monospace'}}>
                    <div style={{fontSize:'30px' ,marginTop:'9%',fontFamily:'Times',fontWeight:'bold'}}>
                        Discover The Most</div>
                    <div style={{marginTop:'-0%',fontSize:'30px',fontFamily:'Times',fontWeight:'bold'}}>
                        Engaging Places</div>
                    
                    <div style={{marginTop:'20px',fontSize:'9px'}}>It is a long established fact that a reader 
                    will be whole world took</div>
                    <div style={{fontSize:'9px'}}>then we make tour for world best tour</div>
                </div>
                <div style={{minHeight:'50px'}}></div>
            </div>
        </>
    )
}

export default React.memo(Test);