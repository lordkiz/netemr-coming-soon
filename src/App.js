import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Header from './components/Header';
import Layout from './components/Layout';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="size1 bg0 where1-parent">
        		<div className="flex-c-m bg-img1 size2 where1 overlay1 where2 respon2">
                    <div style={{ float: 'right'}}>
                        <h3 style={{ color: '#FFF'}}>NetEMR</h3>
                    </div>
        			<div>
                        <Image responsive src={require('./assets/images/main-image.png')} />
        			</div>
        		</div>

        		<div className="size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1">

                    <div style={{ paddingTop: 200 }} />

        			<div style={{ paddingLeft: 25, paddingRight: 15 }} className="p-t-50 p-b-60">
        				<p className="m1-txt2 p-b-36 text-dark">
                            Hospitals, Get Ready. We Are Coming!
        				</p>
                        <p className="m1-txt1 p-b-36 text-dark">
                            NetEMR makes it easy for hospitals and medical centres to set up and customize their EMR in the cloud.
        				</p>
        			</div>
                    <div style={{ paddingLeft: 2 }}>
                        <ul>
                            <li>
                                <span className='list-icon'><i className='fa fa-tachometer'/></span> Feature Packed
                            </li>
                            <li>
                                <span className='list-icon'><i className='fa fa-wpforms'/></span> Autogenerate HMO forms
                            </li>
                            <li>
                                <span className='list-icon'><i className='fa fa-users'/></span> Automated patient followups
                            </li>
                            <li>
                                <span className='list-icon'><i className='fa fa-line-chart'/></span> A.I powered actionable insights
                            </li>
                            <li>
                                <span className='list-icon'><i className='fa fa-plus'/></span> And so much more!
                            </li>
                        </ul>
                    </div>
        		</div>
        	</div>

        );
    }
}

export default App;
