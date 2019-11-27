import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sageMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sageMiddleware];

const store = createStore(rootReducer, middlewares);

sageMiddleware.run(rootSaga);

export default store;
