import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import IMG2 from '../../assets/ava2.jpg';
import "./Single.scss";
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={IMG2} alt="avata" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Osaro Onaiwu</h1>

                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">osaro@gmail.com</span>
                </div>
                
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+234 803 895 9860</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Balogun street, opeki, Ipaja Lagos.</span>
                </div>

                

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Nigeria</span>
                </div>

              </div>
             </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <h2 className='title'>Last transactions</h2>
          <List/>
        </div>
      </div>
    </div>
  );
}

export default Single;
