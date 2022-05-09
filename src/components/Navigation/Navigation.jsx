import { Link, NaviWrapper } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NaviWrapper>
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movies</Link>
    </NaviWrapper>
  );
};
