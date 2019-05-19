import React, { Component } from "react";
import { SUPERHEROS_LOAD } from "../actions";
import { connect } from "react-redux";
import { ListItem } from './listItem';
import Detail from "./detail"
import { Container, Row, Col } from 'reactstrap'
class Listing extends Component {
    constructor() {
        super()
        this.state = {
            characterSelected: null
        }
    }
  componentDidMount() {
    this.props.SUPERHEROS_LOAD();
  }

  componentWillReceiveProps(newProps) {
    if(!newProps.loading && newProps.superheros.data.results) {
      this.setState({characterSelected: newProps.superheros.data.results[0].id})
    }
  }

  onCharacterSelect = (id) => {
    this.setState({characterSelected: id})
  }

  render() {
    let characters = this.props.superheros.data ? this.props.superheros.data.results : [];
    return (
      <Container>
        <Row>
            <Col lg={6}>
                {characters.map((item) => {
                    return(
                      <ListItem onCharacterSelect={(id) => this.onCharacterSelect(id)} key={item.id} item={item} />
                    )
                })}
            </Col>
            <Col lg={6}>
            {this.state.characterSelected && 
                <Detail id={this.state.characterSelected} />
              }
           </Col>
            </Row>
        </Container>

    );
  }
}

const mapStateToProps = state => {
  return {
    superheros: state.superheros.items,
    loading: state.superheros.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SUPERHEROS_LOAD: () => {
      dispatch(SUPERHEROS_LOAD());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);
