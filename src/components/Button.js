import React from 'react';

const Button = ({ children, onClick, variant = 'default', size = 'md', disabled = false, rounded = false }) => {
	const baseStyle = `font-normal text-white focus:outline-none focus:ring-2 focus:ring-offset-2`;

	const sizeClasses = {
		sm: 'px-3 py-1 text-sm',
		md: 'px-4 py-2',
		lg: 'px-6 py-3 text-lg',
	};

	const variantClasses = {
		default: 'bg-primary hover:bg-primary-dark',
		light: 'bg-primary-light hover:bg-primary',
		dark: 'bg-primary-dark hover:bg-primary',
	};

	const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg';

	const roundedClass = rounded ? 'rounded-full' : 'rounded';

	const combinedClasses = `${baseStyle} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${roundedClass}`;

	return (
		<button onClick={onClick} className={combinedClasses} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
