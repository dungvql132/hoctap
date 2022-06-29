import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {pathRoutes,toRoute} from "./path.routers"

export function CommonRouter() {
    return (
        <>
            <Router>
                <Switch>
                    {pathRoutes.map((value,index)=>{
                        return (
                            <Route exact path={value.path} key={''+index}>
                                {toRoute(value)}
                            </Route>
                        )
                    })}
                </Switch>
            </Router>
        </>
    )
}

export default CommonRouter;