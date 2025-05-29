import { useEffect, useState } from "react";

class Relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hora: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.atualizarHora(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  atualizarHora() {
    this.setState({ hora: new Date().toLocaleTimeString() });
  }

  render() {
    return <h1>Hora atual: {this.state.hora}</h1>;
  }
}



function Time() {
  // inicializar o horário sendo convertido para string com uma chave time, sendo um objeto
  const [time, setTime] = React.useState(new Date().toLocaleString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    });

    return () => clearInterval(timerId);
  }, 1000);

  return(
    <div>
      Hora atual: {time}
    </div>
  );
}

Time();

