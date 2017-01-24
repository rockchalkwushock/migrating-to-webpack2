import { UserAuthWrapper } from 'redux-auth-wrapper';

const VisibleOnlyNoUser = UserAuthWrapper({
  authSelector: state => state.auth.user,
  wrapperDisplayName: 'VisibleOnlyIfNotUser',
  predicate: user => !user,
  failureRedirectPath: '/'
});

const NonAuthViews = VisibleOnlyNoUser(({ children }) => children);

export default NonAuthViews;
