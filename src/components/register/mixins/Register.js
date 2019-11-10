//natives
import React, {Component} from 'react';

//components
import Form from '../childrens/form/mixins/Form';

//request
import index_r from '../../../requests/index';

export default class Register extends Component {

  constructor(props) {
      super(props);

      this.state = {
        nome: '',
        genero: '',
        tipo: '',
        personagem: '',
        personagens: [],
        pers: []
      }

      this.setState = this.setState.bind(this);

  }

  async componentDidMount() {
    var pers = await index_r.getPeople();
    this.setState({pers:JSON.parse(pers).results});
  }

  handleChange = (name, e) => {
    var form = this.state;
    form[name] = e.target.value;
    this.setState(form);

    if (this.state.genero !== '') {
      var array = [];
      this.state.pers.forEach(element => {
        if (element.gender === this.state.genero)
          array.push(element.name);
      });
      this.setState({personagens: array})
    }
  };

  render() {
    return(
        <div>
          <Form {...this}/>
        </div>
    );
  }

}