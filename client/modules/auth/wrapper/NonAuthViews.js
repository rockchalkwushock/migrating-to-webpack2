import { UserAuthWrapper } from 'redux-auth-wrapper';

const VisibleOnlyIfNotUser = UserAuthWrapper({
  authSelector: state => state.auth.user,
  wrapperDisplayName: 'VisibleOnlyIfNotUser',
  predicate: user => !user,
  failureRedirectPath: '/'
});

// const NonAuthViews = VisibleOnlyIfNotUser(({ children }) => children);
//
// export default NonAuthViews;

export default VisibleOnlyIfNotUser;
