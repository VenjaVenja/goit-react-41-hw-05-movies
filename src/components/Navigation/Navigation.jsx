// import { NavLink } from 'react-router-dom';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movie</Link>
    </nav>
  );
};
