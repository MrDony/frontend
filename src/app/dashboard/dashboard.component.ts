import { Component } from '@angular/core';
import { DUMMY_DATA } from '../constants';

interface LogEntry {
  log: string;
  priority: string;
  count: number;
  description: string;
}

interface TransformedLog {
  [key: string]: LogEntry[];
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  data = DUMMY_DATA

  parent_types:any = []
  divided_into_types:any = []

  unpacked_logs:any;
  unpacked_logs_keys:any = []

  loading = true

  filter_priority = ''
  filter_count = -1
  filter_type = 'OR'



  constructor(){
    //get logs from backend
    //unpack the logs
    this.loading = true;
    this.unpack(this.data)
    this.loading = false;
  }
  unpack(logs:any){
    this.unpacked_logs = this.transformJsonData(this.data)
    this.unpacked_logs_keys = Object.keys(this.unpacked_logs)
    console.log(this.unpacked_logs, this.unpacked_logs_keys)
  }

  fits_filter(log:any){
    if(this.filter_priority == '' && this.filter_count == -1)
      return true;
    if(this.filter_type == 'OR')
      if(log.count == this.filter_count || log.priority == this.filter_priority)
        return true
      else
        return false
    else
      if(log.count == this.filter_count && log.priority == this.filter_priority)
        return true
      else
        return false
  }

  changeFilterType(){
    this.filter_type = this.filter_type=='OR'?'AND':'OR'
  }

  transformJsonData(data: any): TransformedLog {
    let transformedData: TransformedLog = {};
    for (const logSource in data) {
        if (data.hasOwnProperty(logSource)) {
            transformedData[logSource] = [];

            for (const log in data[logSource]) {
                if (data[logSource].hasOwnProperty(log)) {
                    const entry = data[logSource][log];
                    transformedData[logSource].push({
                        log: log,
                        priority: entry.priority,
                        count: entry.count,
                        description: entry.description
                    });
                }
            }
        }
    }

    return transformedData;
  }


  calculateBackgroundColor(value: any): string {
    value = parseInt(value)
    const red = Math.round((10 - value) * 25.5); // Calculate red value (0-255)
    const green = Math.round((value / 10) * 255); // Calculate green value (0-255)
    if(value<3)
      return '#CC1111'
    if(value<6)
      return '#CCCC11'
    return '#11CC11'
  }
}
