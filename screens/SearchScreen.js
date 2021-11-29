import React from 'react';
import { Text, View , ScrollView, FlatList } from 'react-native';
import db from "../config.js"

export default class Searchscreen extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        allTransactions : [],
        lastVisibleTransaction : null
      }
    }
    componentDidMount = async () =>{
      const query = await db.collection("transactions").get()
      query.docs.map((doc) => {
        this.setState({
          allTransactions : [...this.state.allTransactions , doc.data()]
        })
      })
    }
    fetchMoreTransaction = async () => {
      const query = await db.collection("transactions").startAfter(this.state.lastVisibleTransaction).limit(10).get()
      query.doc.map((doc) => {
        this.setState({
          allTransactions : [...this.state.allTransactions , doc.data()],
          lastVisibleTransaction : doc
        })
      })
    }
    render() {
      return (
       
      );
    }
  }