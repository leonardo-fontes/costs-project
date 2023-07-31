import { Link } from "react-router-dom";

function LinkButton({ to, texto, className }) {
  return <Link className={className} to={to}> {texto}</Link>;
}

export default LinkButton;
