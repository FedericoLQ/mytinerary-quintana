import { useLocation, useNavigate, useParams } from "react-router-dom";
export function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = useParams();

    return (
      <Child {...props} params={id} navigate={navigate} location={location} />
    );
  };
}
