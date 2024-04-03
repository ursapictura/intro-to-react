import React from 'react';
import Counter from '../components/Counter';

export default function CounterList() {
  const counterTitles = [{ title: 'Counter 1' }, { title: 'Counter 2' }, { title: 'Counter 3' }, { title: 'Counter 4' }];

  return (
    <>
      {counterTitles.map((tl) => <Counter title={tl.title} />)}
    </>
  );
}
