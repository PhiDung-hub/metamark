import { Button, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ForgotPasswordModal from './ForgotPasswordModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export const WithLogin = (BaseComponent: React.FC) =>
  function Component(props: any) {
    const [authenticated, setAuthenticated] = useState(true);

    useEffect(() => {
      // check session, if authenticated, setAuthenticated(true)
      // the session checking logic, lets implement when backend is ready
    }, []);

    return (
      <div>
        <BaseComponent {...props} />
        {!authenticated && <AuthenticationModal />}
      </div>
    );
  };

enum AuthenticationModalAction {
  login,
  register,
  resetPassword, //update email and password
}

const AuthenticationModal = () => {
  const [actionState, setActionState] = useState<AuthenticationModalAction>(
    AuthenticationModalAction.login
  );

  var RenderContent = LoginModal;

  switch (actionState) {
    case AuthenticationModalAction.login: {
      RenderContent = LoginModal;
      break;
    }
    case AuthenticationModalAction.register: {
      RenderContent = RegisterModal;
      break;
    }
    case AuthenticationModalAction.resetPassword: {
      RenderContent = ForgotPasswordModal;
      break;
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      isOpen={true}
      onAfterOpen={() => {}}
      onRequestClose={() => {}}
      contentLabel='Example Modal'
      style={customStyles}
    >
      <RenderContent />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '35px',
          marginBottom: '20px',
        }}
      >
        {actionState === AuthenticationModalAction.login && (
          <Button
            variant='text'
            onClick={() =>
              setActionState(AuthenticationModalAction.resetPassword)
            }
          >
            Forgot password?
          </Button>
        )}
        {actionState !== AuthenticationModalAction.login && (
          <Button
            variant='text'
            onClick={() => setActionState(AuthenticationModalAction.login)}
          >
            Back to login
          </Button>
        )}
        <div
          style={{
            width: '400px',
            height: '0.5px',
            backgroundColor: '#dddddd',
            margin: '10px',
          }}
        ></div>
        {actionState === AuthenticationModalAction.login && (
          <div>
            No account?{' '}
            <Button
              variant='text'
              onClick={() => setActionState(AuthenticationModalAction.register)}
            >
              Sign up
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default LoginModal;
