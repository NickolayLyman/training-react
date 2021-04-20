import { Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';
import HomePage from './View/HomePage';
import PostPage from './View/PostPage';
import PageHeader from './components/AppBar/PageHeader';
import Container from './components/Container';
function App() {
  return (
    <Container>
      <PageHeader />
      <Switch>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/post">
            <PostPage />
          </Route>
        </Suspense>
      </Switch>
    </Container>
  );
}

export default App;
