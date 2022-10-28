import { connect } from "umi";

function MyPage(props) {
  const { user, dispatch } = props;
  console.log(user);
  const val = user.user.test;
  return (
    <div>
      <p>{val}</p>
    </div>
  );
}
const stateToProps = ({ user }) => {
  return {
    user,
  };
};
export default connect(stateToProps)(MyPage);
