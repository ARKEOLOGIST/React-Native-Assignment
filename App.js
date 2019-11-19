import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Quiz from './components/Quiz';
import Option from './components/Option';
import { Icon } from './assets/up.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { optionz : [{id: 1,value: 'Taj Mahal',style:'none'},{id: 2,value: 'Agra',style:'none'},{id: 3,value: 'Mughal',style:'none'},{id: 4,value: 'The Great',style:'none'}],timer: 60, presentTeam: 1, correctAnswer: 4,answered: false }
    this.clickHandler.bind(this);
  }
  
  componentDidMount(){
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
  }
  
  componentDidUpdate(){
    if(this.state.timer === 0 && this.state.presentTeam === 1)
    { 
      this.state.optionz.map((toDo) => {
        toDo.style = 'none';
        return toDo;
      }); 
      this.setState({ timer: 60, presentTeam: 2, answered: false});
    }
    else if (this.state.timer === 0 && this.state.presentTeam === 2)
    {
        this.state.optionz.map((toDo) => {
          toDo.style = 'none';
          return toDo;
        }); 
        this.setState({ timer: 60, presentTeam: 2, answered: false});
    }
  }

  reset = () => {
    if (this.state.answered == true)
    {
      this.setState({answered: false});
      this.state.optionz.map((toDo) => {
      toDo.style = 'none';
      return toDo;
    }); 
  }
  }

  clickHandler = (id) => {
    const Index = this.state.optionz.findIndex(p => {
      return p.id === id;
    })
    const opt = {
      ...this.state.optionz[Index]
    };
    let type = ['red','green'];
    if (this.state.answered == false)
    {
    if (opt.id === this.state.correctAnswer)
    {
      opt.style = type[1];
    }
    else
    {
      opt.style = type[0];
    }
    }
    const td = [...this.state.optionz];
    td[Index] = opt;
    this.setState({optionz: td,answered: true});
}


render() {
  let p = this.state.presentTeam;
  options = (
  this.state.optionz.map((toDo) => {
    let s = toDo.id;
    return <TouchableOpacity key={toDo.id} onPress={this.clickHandler.bind(this,s)}><Option 
    key={toDo.id}
    id={toDo.id}
    kind={toDo.style}
    corr={this.state.correctAnswer}
    ans={this.state.answered}
    >{toDo.value}</Option></TouchableOpacity>
  }));
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.timer}>{this.state.timer}</Text>
      </View>
      <View style={styles.score}>
          <View style={styles.distance}><Text style={p==1?styles.border1:styles.border2}>Team A : 12</Text></View>
          <View style={styles.distance}><Text style={p==2?styles.border1:styles.border2}>Team B : 11</Text></View>
      </View>
      <View style={{ width: '80%'}}>
          <Quiz>Akbar</Quiz>
      </View>
      <View style={{ paddingTop: 10, width: '70%' }}>
         {options}
      </View>
      <View style={{paddingTop: 20}}>
      <TouchableOpacity onPress={this.reset.bind(this)}>
      <Image source={Icon} style={{borderRadius: 50}}/>
      </TouchableOpacity>
      <Text style={{ color: 'white', textAlign: 'center'}}>PASS (2)</Text>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    paddingTop : 40,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
  },
  timer: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  border1: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'cyan',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 3,
    paddingBottom: 3,
    color: 'white'
  },
  border2: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'green',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 3,
    paddingBottom: 3,
    color: 'white'
  },
  distance: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
    paddingBottom: 30
  }
});
