import React from "react";
import "./calender.css";
export default function Scheduletimes() {
  return (
    <div className="calen">
    <div className="container">
      {/* <h1 className="h1">SCHEDULE YOUR MEET </h1> */}
      <div className="day-column">
        <h2>Add Your Business hours</h2>
        <ul>
          <li>
            <div className="day-name"><input type="checkbox"/>Monday</div>
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
                To
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox"/>Tuesday</div>
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
                To
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox"/>Wednesday</div>
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
                To
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox"/>Thursday</div>
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
                To
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox"/>Friday</div>
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
                To
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>   
          </li>
        </ul>
        <button className="xyz">Finish</button>
      </div>
    </div>
    </div>
  );
}