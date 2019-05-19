import React, { Component } from "react";
import * as API from "../api";
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        character: null
    }
  }

  componentWillReceiveProps(nextProps) {
      if(this.props.id != nextProps.id) {
        API.getCharacter(nextProps.id).then(data => {
          this.setState({character: data.data.results[0]});
        });
      }
  }

  componentDidMount() {
    let characterId = this.props.id;
    API.getCharacter(characterId).then(data => {
      this.setState({character: data.data.results[0]});
    });
  }
  render() {
      console.log(this.state.character)
    return (
        <div>
            {this.state.character &&
            <div>
                <h2 className="detailName">{this.state.character.name}</h2>
                <img className="detailImg" src={`${this.state.character.thumbnail.path}.${this.state.character.thumbnail.extension}`} alt="detail" />
                <div>{this.state.character.description !== "" ? this.state.character.description : "Description empty"} </div>
                <ul>
                    {this.state.character.urls.length && this.state.character.urls.map((item, index) => {
                        return <li key={index}><a href={item.url}>{item.type}</a></li>
                    })} 
                </ul>
            </div>
            }
        </div>
    )
  }
}
