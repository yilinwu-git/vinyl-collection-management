import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddVinyl from '../components/AddVinyl';
import VinylsList from '../components/VinylsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditVinyl from '../components/EditVinyl';

import VinylsContext from '../context/VinylsContext';

const AppRouter = () => {

    const [vinyls, setVinyls] = useLocalStorage("vinyls", []);

    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content">
            <VinylsContext.Provider value={{ vinyls, setVinyls }}>
                <Switch>
                    <Route 
                        render={(props) => (
                            <VinylsList {...props} vinyls={vinyls} setVinyls={setVinyls} />
                        )}
                        path="/" 
                        exact={true}
                    />
                    <Route 
                        render={(props) => (
                            <AddVinyl {...props} vinyls={vinyls} setVinyls={setVinyls} />
                    )}
                    path="/add-vinyl" 
                    />
                    <Route
                        render={(props) => (
                            <EditVinyl {...props} vinyls={vinyls} setVinyls={setVinyls} />
                        )}
                        path="/edit/:id"
                    />
                    <Route component={() => <Redirect to="/" />} />                
                </Switch>
            </VinylsContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    );
  };
  
export default AppRouter;

