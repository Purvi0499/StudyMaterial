const styles = {
  default: {
    background: "red",
    width: "100px",
  },
  greenBut: {
    background: "green",
    width: "100px",
  },
};
function Hocred(props) {
  return <h2 style={styles.default}>Red{<props.cmp />}</h2>;
}
export default Hocred;
function Hocgreen(props) {
  return <h2 style={styles.greenBut}>Green{<props.cmp />}</h2>;
}
export { Hocgreen };
function Hocblue(props) {
  return (
    <h2 style={{ background: "blue", width: "100px" }}>Blue{<props.cmp />}</h2>
  );
}
export { Hocblue };
