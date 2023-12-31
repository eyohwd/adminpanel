import React from 'react';
import "./featured.scss";
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded, MoreVert } from '@mui/icons-material';

const Featured = () => {
  return (
    <div className='featured'>
         <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVert fontSize='small'/>
         </div>
      <div className="bottom">
        
        <div className="featuredChart">
        <CircularProgressbar value={70} text={"70%"} stroke={3}/>
        </div>

        <p className="title">Total sale made today</p>
        <p className="amount">$480</p>
        <p className="desc">Previous transaction processing.time. Last payment may not be included.</p>
        <div className="summary">
            <div className="item">
                 <div className="itemTitle">Target</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpRounded fontSize="small"/>
                    <div className="resultAmount">$12k</div>
                </div>
            </div>

            <div className="item">
                 <div className="itemTitle">Last Week</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownRounded fontSize="small"/>
                    <div className="resultAmount">$124k</div>
                </div>
            </div>

            <div className="item">
                 <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpRounded fontSize="small"/>
                    <div className="resultAmount">$124k</div>
                </div>
            </div>

            
        </div>
      </div>
      
     
    </div>
  );
}

export default Featured;
