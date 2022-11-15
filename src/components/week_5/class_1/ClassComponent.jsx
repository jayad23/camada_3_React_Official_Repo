import React, { Component } from 'react';
const names = ["Pedro", "Juan", "Camilo"];
class ClassComponent extends Component {

  state = {
    index: 0,
    message: "",
    name: null
  }

  incrementCount = () => {
    this.setState({ index: this.state.index + 1 });
  }

  //1ER MÉTODO DE CICLO DE VIDA - AL MONTARSE EL COMPONENTE
  componentDidMount() {
    this.setState({ message: "Saludos a la camada 3", name: names[this.state.index] })
    //LLAMADOS INICIALES A API'S.
  }

  //2DO MÉTODO DE CICLO DE VIDA - AL ACTUALIZARSE EL COMPONENTE
  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      this.setState({ name: names[(this.state.index + 1) % names.length] })
    }
  }

  render() {
    //console.log("count", this.state.index);
    return (
      <div>
        <h1>El nombre es: {this.state.name}</h1>
        <p>La cuenta va en: {this.state.index}</p>
        <p>El mensaje es: {this.state.message}</p>
        <button onClick={() => this.incrementCount()}>Incrementar Index</button>
      </div>
    );
  }
}

export default ClassComponent;
