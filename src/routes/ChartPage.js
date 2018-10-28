import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import {AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import Loader from '../components/Loader';
import styles from '../styles/routes_styles/ChartPage.css';

@inject('viewerStore')
@observer

class ChartPage extends React.Component {
    constructor(props){
        super(props);
    }
    showMetadata(){
        return this.props.viewerStore.metaData.map((item, index)=>
           <div key={index}>
               <span className="item-title">{item.name}:</span>
               <span> {item.value}</span>
           </div>
        );
    }
    showChart(){
        if(!this.props.viewerStore.inProgress){
            if(!this.props.viewerStore.error) {
                return (
                    <AreaChart width={800} height={350} data={this.props.viewerStore.chartData.slice()}
                               margin={{top: 50, right: 0, bottom: 0, left: 0}}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Area type='monotone' dataKey='1. open' stroke='#8884d8' fillOpacity={1} fill="url(#colorUv)"/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="2 2"/>
                        <XAxis dataKey="date"/>
                        <YAxis allowDecimals={true} domain={[90, 'auto']}/>
                        <Tooltip />
                    </AreaChart>
                );
            } else {
                return (<div className="error-msg">{this.props.viewerStore.error}</div>)
            }
        } else {
            return (<Loader/>)
        }
    }

    render() {
        return (
            <div className="table-page">
                <h3>Chart Page</h3>
                {this.showMetadata()}
                {this.showChart()}
            </div>
        );
    }
}
export default  ChartPage;
