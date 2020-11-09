import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="pokemon">
        <div>
          <p>{`name: ${data.name}`}</p>
          <p>{`type: ${data.type}`}</p>
        </div>
        <img src={data.image} alt={data.name} />
      </div>
    );
  }
}

export default Pokemon;
