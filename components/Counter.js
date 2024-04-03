import React from 'react';
import { PropTypes } from 'prop-types';

export default function Counter({ title }) {
  const [value, setValue] = React.useState(0);

  const handleClick = (action) => {
    switch (action) {
      case 'Increment':
        setValue((prevState) => prevState + 1);
        break;
      case 'Decrement':
        setValue((prevState) => prevState - 1);
        break;
      case 'Reset':
        setValue(0);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <h2>{value}</h2>
      <button className="btn btn-success" type="button" onClick={() => handleClick('Increment')}>Increment</button>
      {value === 0 ? ('') : (<button className="btn btn-danger" type="button" onClick={() => handleClick('Decrement')}>Decrement</button>)}
      <button className="btn btn-warning" type="button" onClick={() => handleClick('Reset')}>Reset</button>
    </>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'Title of the Counter',
};
