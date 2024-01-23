import { Link, useLocation } from 'react-router-dom';

export const OneMovie = ({ result }) => {
  const location = useLocation();
  
  return (
    <Link
      to={location.pathname === '/' ? `movies/${result.id}` : `${result.id}`}
      state={location}
    >
      <li>{result.title}</li>
    </Link>
  );
};

export default OneMovie;
