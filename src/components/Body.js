import React from 'react';
import { useStore } from '../stores/root';
import { useObserver } from 'mobx-react-lite';

function Body() {
  const store = useStore();
  function increase() {
    store.ui.increase();
  }

  return useObserver(() => (
    <div>
      <p>{store.ui.foobar}</p>
      <button onClick={increase}>Increase!</button>
    </div>
  ));
}

export default Body;
