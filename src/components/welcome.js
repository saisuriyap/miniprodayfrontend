// import React, { Component, useCallback, useState,useEffect } from 'react';
// import {useSelector } from 'react-redux';
// import axios from 'axios';
// import './welcome.css';
// const accessToken="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaGIiLCJpYXQiOjE2OTAxMjUxNjMsImV4cCI6MTY5MDEyNjYwM30.yNvsOPHBeSeFhhrRsRGZj_hHYrCpSmsMETFSM_hxsAM"
// // axios.interceptors.request.use(
// //   config =>{
// //     config.headers.authorization=`Bearer ${accessToken}`;
// //     return config;
// //   },
// //   error =>{
// //     return Promise.reject(error);
// //   }
// // );
// const authAxios =axios.create({
//   baseURL:"",
//   headers:{
//     Authorization: `Bearer ${accessToken}`,
//   },
// });
// function Userpage(){
//     const user=useSelector(state => state.user.value)
//     // [isSidebarVisible, setSidebarVisibility] = useState(false);
// //     user=useSelector(selectUser);

// //   handleMouseEnter(){
// //     setSidebarVisibility(true);
// //   };
// //   setSidebarVisibility(){
// //     this.setState({});
// //   }

// //   handleMouseLeave(){
// //     setSidebarVisibility(false);
// //   };
//     // state = {
//     //     currentDate: '',
//     //   };
    
//     //   componentDidMount() {
//     //     const currentDate = new Date().toLocaleDateString();
//     //     this.setState({ currentDate });
//     //   }
    

//   const openNav=()=>{
//     document.getElementById("sidenav").style.width="250px";
//     document.getElementById("welcome").style.transform = "translateX(120px)";
//   }
//   const closeNav=()=>{
//     document.getElementById("sidenav").style.width="0";
//     document.getElementById("welcome").style.transform = "translateX(0)";
//   }
//   const [scheduledData, setScheduledData]=useState([{
//     "email": "nikdgiljh1232@gmail.com",
//     "username": "niki",
//     "gender": "Male",
//     "mobileno": "8238238234",
//     "schedulerusername": "paul",
//     "time": "10:00:00",
//     "bookingdate": "2023-07-07"
// },{},{}]);
 

//   const fetchScheduledData = async () => {
//     try {
//       const response = await authAxios.get('http://localhost:8181/getclientinfo'); // Replace with your actual API endpoint
//       const responseData = response?.data;
//     if (responseData) {
//       setScheduledData(responseData);
//       console.log("Data fetched successfully:", responseData);
//     } else {
//       console.log("No data found in the response.");
//     }
//     } catch (error) {
//       console.log('Error fetching scheduled data:', error);
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.headers);
//     }
//   };
//   // useEffect(() => {
//   //   fetchScheduledData();
//   // }, []);
//       return (
//             // fetchScheduledData()
//           <div>
//       <nav className='user-nav'>
//           <button className="menu-button" onClick={openNav}>
//           &#9776;
//           </button>
//           <div className='create-new-meeting'>
            


//           </div>
//            {/* <div className="user-date">{currentDate}</div> */}
//         <div className="user-navbar" id='sidenav'>
      
//          <nav class="user-side-bar">
            
//          <button className="close-button" onsClick={closeNav}>x</button>
//            <ul>
//             {/* <li style={{color:"red"}}>{user.name} </li> */}
//            <li>Profile</li>
//            <li>URL</li>
//              <li>Contact</li>
//              <li>Settings</li>
//              <li>Statistics</li>
//            </ul>
//          </nav>
//         </div>

//       </nav>
          
//         <div id='welcome' className='user-content'>
//                 {/* <h1>Welcome Back! {user.name}</h1> */}
//                 <div className='your-meetings'>You have 2 meeting to Attend:</div>
//                 {scheduledData.map((meeting, index) => (
//           <div key={index} className='meeting-info-div'>
//             <div className='service-name'>Client Name : {meeting.username}</div>
//             <div className='service-name'>Gender : {meeting.gender}</div>
//             <div className='booked-time'>Time: {meeting.time}</div>
//             {/* Add other details based on your data structure */}
//             <div className='participant-profile'>
//               <div className='participant-profile-pic'>
//                 {/* <img className='participant-profile-pic' src={require("../photo/participant-profile.png")} alt="pic not found" /> */}
//               </div>
//               <div className='participant-name'>{meeting.participantName}</div>
//               <div className='user-choices'>
//                 <div className='user-reschedule'>reschedule</div>
//                 <div className='user-cancel'>cancel</div>
//               </div>
//             </div>
//           </div>
//         ))}

//                 <div className='meeting-info-div'>
//                     <div className='service-name'>Education</div>
//                     <div className='booked-time'>Time: 12:00AM - 12:30AM</div>
//                     <div className='participant-profile'>
//                     {/* <div className='participant-profile-pic'><img className='participant-profile-pic' src={require("../photo/participant-profile.png")} alt="pic not found" /></div> */}
//                         <div className='participant-name'>ANONYMOUS</div>
//                         <div className='user-choices'> 
//                                 <div className='user-reschedule'>reschedule</div>
//                                 <div className='user-cancel'>cancel</div>
//                         </div>

//                     </div>
//                 </div>
//         </div>

      
   

//       {/* Add the rest of your website content here */}
//     </div>
//   );
// }


// export default Userpage