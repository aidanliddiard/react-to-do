import React from 'react';

export default function SignUpForm({
  email,
  setEmail,
  password,
  setPassword,
  handleSignUp,
  handleSignIn,
}) {
  return (
    <div>
      <form className="sign-up">
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}
