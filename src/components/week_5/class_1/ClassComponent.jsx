import React, { Component } from 'react';
const names = ["Pedro", "Juan", "Camilo"];
class ClassComponent extends Component {

  state = {
    index: 1,
    message: "",
    name: null,
    character: null
  }

  getData = async () => {
    fetch(`https://rickandmortyapi.com/api/character/${this.state.index}`)
      .then(res => res.json())
      .then(resp => {
        //console.log(resp)
        this.setState({ character: resp })
      })
  }

  incrementCount = () => {
    this.setState({ index: this.state.index + 1 });
  }

  //1ER MÉTODO DE CICLO DE VIDA - AL MONTARSE EL COMPONENTE
  componentDidMount() {
    this.setState({ message: "Saludos a la camada 3", name: names[this.state.index] })
    this.getData();
    //LLAMADOS INICIALES A API'S.
  }

  //2DO MÉTODO DE CICLO DE VIDA - AL ACTUALIZARSE EL COMPONENTE
  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      this.getData();
    }
  }

  render() {
    console.log("count", this.state.character);
    return (
      <div>
        <p>INDEX : {this.state.index}</p>
        <h1>El nombre es: {this.state.character?.name}</h1>
        <img src={this.state.character?.image} />
        <button onClick={() => this.incrementCount()}>Incrementar Index</button>
      </div>
    );
  }
}

export default ClassComponent;
