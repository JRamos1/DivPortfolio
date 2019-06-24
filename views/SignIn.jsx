var React = require('react');

class SignIn extends React.Component {
  render() {
    return (
        <form id="signin" name="signin" method="post" action="signin">
        <label for="email">Email Address</label>
        <input class="text" name="email" type="text" />
        <label for="password">Password</label>
        <input name="password" type="password" />
        <input class="btn" type="submit" value="Sign In" />
    </form>
  )}
}

module.exports = SignIn;