import { usePrivy } from '@privy-io/react-auth';

const LoginButton = () => {
	const privy = usePrivy();
	return (
		<button
			className={`button ${privy.authenticated ? 'error' : ''}`}
			onClick={() =>
				privy.authenticated ? privy.logout() : privy.login()
			}
			disabled={!privy.ready}
		>
			{privy.authenticated ? 'Logout' : 'Login'}
		</button>
	);
};

export default LoginButton;
