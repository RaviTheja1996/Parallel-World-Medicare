import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const { authDetails, login, logout } = useContext(AuthContext);
  //   console.log(authDetails);
  // const handleLogout = () => {
  //   logout();
  // };

  return (
    // <Flex align="center" backgroundColor="gray.900" color="gray.50" p={4}>
    //   <Image src="../Images/parallel-world-medicare-high-resolution-color-logo.png"></Image>
    //   <Spacer></Spacer>
    // </Flex>
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/doctors">Doctors</NavLink>
      <NavLink to="/hospitals">Hospitals</NavLink>
      <NavLink to="/checkout">Checkout</NavLink>
      <NavLink to="/diagnostics">Diagnostics</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/plans">Plans</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </>
  );
}
