import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 30,
    textAlign: "center",
  },
});

const Container = ({ children }) => {
  const st = useStyles();

  return <div className={st.container}>{children}</div>;
};

export default Container;
