import {observable, action} from 'mobx';
import Api from '../Api';

class ViewerStore {
    @observable inProgress = false;
    @observable error = '';
    @observable metaData = [];
    @observable chartData = [];
    @observable tableData = [];
    @observable column = null;
    @observable direction = null;

    setColumn(column = null){
        this.column = column;
    }

    setDirection(direction = null){
        this.direction = direction;
    }

    sortTableData(){
        let arr = this.tableData.slice();
        let that = this;
        arr.sort(function compare(a, b) {
            let val1 = null;
            let val2 = null;
            if(that.column == 'date'){
                val1 = new Date(a['date']);;
                val2 = new Date(b['date']);;
            } else {
                val1 = a[that.column];
                val2 = b[that.column];
            }
            if(that.direction == 'ascending'){
                return val1 - val2;
            } else {
                return val2 - val1;
            }
        });
        this.tableData = arr;
    }

    @action pullFinancialData() {
        this.inProgress = true;
        this.error = '';
        return Api('/query?apikey=demo&function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT')
            .then(action('then', (data) => {
                if(data["Meta Data"]){
                    this.metaData = [];
                    for (let prop in data["Meta Data"]){
                        this.metaData.push({name: prop, value: data["Meta Data"][prop]});
                    }
                }
                if(data["Time Series (Daily)"]){
                    this.chartData = [];
                    for (let keyDate in data["Time Series (Daily)"]){
                        data["Time Series (Daily)"][keyDate]["date"] = keyDate;
                        this.chartData.push(data["Time Series (Daily)"][keyDate]);
                    }
                }
                this.tableData = this.chartData.slice();
                this.inProgress = false;
            }))
            .catch(action('catch', ({error}) => {
                this.error = error;
                this.inProgress = false;
            }))
    }
}
export default new ViewerStore();
