import { useState,useEffect } from "react";
import '../../styles/ourTeam.css';
import { voldet } from "../../jsonFiles/volunteerList";
function OurTeam(){
    
    return(
        <>
        <div>
            <h1>our Team</h1>
        </div>
        <div>
        <table className="table-fill">
          <thead>
          <tr >
            <th className="text-left">Name</th>
            <th className="text-left">Team</th>
            <th className="text-left">Mail ID</th>
          </tr>
          </thead>
          <tbody>
        
        {
          voldet.map((item,ind)=><tr key={ind}><td >{item.Name}</td>
                                    <td className="text-left">{item.Team}</td>  
                                    <td className="text-left"><a href='mailto:${item.Mail}'>{item.Mail}</a></td>
                              </tr>)
        }
        </tbody>
        </table>
        
      </div>
      </>
    );
}
export default OurTeam;