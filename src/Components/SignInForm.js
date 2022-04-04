import React from 'react';

export default function SignInForm({ email, setEmail, password, setPassword, handleSubmit }) {
  return (
    <div>
      <form className="sign-in" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
