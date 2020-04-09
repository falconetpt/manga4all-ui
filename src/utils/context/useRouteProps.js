import {useContext} from 'react';
import RoutePropsContext from '../context/RoutePropsContext';

function useRouteProps() {
    const routeProps = useContext(RoutePropsContext);
    return ({
        ...routeProps
    });
}

export default useRouteProps;