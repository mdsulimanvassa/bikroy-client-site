import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Context} from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser] = useContext(Context);
  let location = useLocation();
    if (loggedInUser.email || sessionStorage.getItem('token')) {
        return children;
    }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;