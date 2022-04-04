import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignUpForm from '../Components/SignUpForm';
import { signInUser, signUpUser } from '../services/users';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUpUser(email, password);
      //setCurrentUser = resp.email;
      history.push('/list');
    } catch (e) {
      setError(e.message);
    }
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      //setCurrentUser = resp.email;
      history.push('/list');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h3>Sign Up:</h3>
      {error && <p>{error}</p>}
      <SignUpForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSignUp={handleSignUp}
        handleSignIn={handleSignIn}
      />
    </div>
  );
}
