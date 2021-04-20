import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  link: {
    color: "red",
    fontSize: 30,
    fontWeight: "700",
    "&:not(:last-child)": {
      marginRight: 20,
    },
  },
  activLink: {
    color: "green",
  },
});

const Navigation = () => {
  const st = useStyles();
  return (
    <nav>
      <NavLink className={st.link} activeClassName={st.activLink} exact to="/">
        Home
      </NavLink>
      <NavLink
        className={st.link}
        activeClassName={st.activLink}
        exact
        to="/post"
      >
        Post
      </NavLink>
    </nav>
  );
};

export default Navigation;
