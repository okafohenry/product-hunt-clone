import React from 'react';
import {IndexPage, ProductReview} from './pages'
import {Switch, Route} from 'react-router-dom';

const App= () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={IndexPage} />
        <Route path='/products/:product_id' component ={ProductReview} />
      </Switch>
    </div>
  );
}

export default App;
