import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import {Table} from 'semantic-ui-react';
import Loader from '../components/Loader';
import styles from '../styles/routes_styles/TablePage.css';

@inject('viewerStore')
@observer

class TablePage extends React.Component {
    constructor(props){
        super(props);
    }

    handleSort = clickedColumn => () => {
        if (this.props.viewerStore.column !== clickedColumn) {
            this.props.viewerStore.setColumn(clickedColumn);
            this.props.viewerStore.setDirection('ascending');
            this.props.viewerStore.sortTableData();
            return
        }
        this.props.viewerStore.setDirection(this.props.viewerStore.direction === 'ascending' ? 'descending' : 'ascending');
        this.props.viewerStore.sortTableData();
    };

    showHeaderCells(){
        let resultArray = [];
        let i = 0;
        for (let prop in this.props.viewerStore.tableData[0]){
            resultArray.push(
                <Table.HeaderCell
                    key={i++}
                    sorted={this.props.viewerStore.column === prop ? this.props.viewerStore.direction : null}
                    onClick={this.handleSort(prop)}
                >
                    {prop!="date" ? prop.substring(2).toUpperCase() : prop.toUpperCase()}
                </Table.HeaderCell>
            );
        }
        return resultArray;
    }

    showBodyRow(item){
        let resultArray = [];
        let i = 0;
        for (let prop in item){
            resultArray.push(
                <Table.Cell key={i++}>{item[prop]}</Table.Cell>
            );
        }
        return resultArray;
    }

    showBodyCells(){
        return this.props.viewerStore.tableData.map((item, index)=>
            <Table.Row key={index}>
                {this.showBodyRow(item)}
            </Table.Row>
        );
    }

    showTable(){
        if(!this.props.viewerStore.inProgress){
            if(!this.props.viewerStore.error){
                return (
                    <Table sortable celled fixed>
                        <Table.Header>
                            <Table.Row>
                                {this.showHeaderCells()}
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.showBodyCells()}
                        </Table.Body>
                    </Table>
                );
            } else {
                return (<div className="error-msg">{this.props.viewerStore.error}</div>);
            }
        } else {
            return <Loader/>;
        }
    }

    render() {
        return (
            <div className="table-page">
                <h3>Table Page</h3>
                {this.showTable()}
            </div>
        );
    }
}
export default  TablePage;
