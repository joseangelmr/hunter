import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import timer from 'react-native-timer'
import PouchDB from 'pouchdb-react-native'

const localDB = new PouchDB('demo')
const remoteDB = new PouchDB('http://localhost:5984/demo');
const syncStates = ['change', 'paused', 'active', 'denied', 'complete', 'error'];

class Root extends Component {

  state = {
    data: [],
    docs: [],
    syncStatus: ''
  };

  initScan() {
    this.props.actions.initializingScan()
    timer.setInterval(
      this, 'scan', () => this.props.actions.startScan(), 2000
    );
  }

  stopScan() {
    timer.clearInterval(this, 'scan');
    this.props.actions.stopScan()
  }

  render() {

    console.log('this.props', this.props)

    return (
      <View style={{ flex: 1 }}>
        <Text>{'SCANS: ' + this.props.scan.scans}</Text>
        <Text>{'STATUS: ' + this.props.scan.status}</Text>
        <Text>{'Networks: ' + this.props.scan.lastScan.data.length}</Text>

        {
          this.props.scan.lastScan.data.map((network, i) => {
            return (
              <Text>
                {network['SSID'] + ' : ' + network['level']}
              </Text>
            )
          })
        }


        <Button
          onPress={() => requestAnimationFrame(() => this.initScan())}
          title={'Start Scan'}
          color="#841584"
          disabled={this.props.scan.status == "stopped" ? false : true}
        />

        <Button
          onPress={() => requestAnimationFrame(() => this.stopScan())}
          title={'Stop Scan'}
          color="#841584"
          disabled={this.props.scan.status == "stopped" ? true : false}
        />

      </View>
    );
  }
}

export default Root;
