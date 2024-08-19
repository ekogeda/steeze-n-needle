import React from 'react';

const Badge = ({ children, variant = 'default', size = 'md', rounded = false }) => {
	const baseStyle = `inline-flex items-center justify-center font-semibold text-white`;

	const sizeClasses = {
		sm: 'px-2 py-1 text-xs',
		md: 'px-3 py-1.5 text-sm',
		lg: 'px-4 py-2 text-base',
	};

	const variantClasses = {
		default: 'bg-primary',
		light: 'bg-primary-light',
		dark: 'bg-primary-dark',
	};

	const roundedClasses = rounded ? 'rounded-full' : 'rounded-md';

	const combinedClasses = `${baseStyle} ${sizeClasses[size]} ${variantClasses[variant]} ${roundedClasses}`;

	return <span className={combinedClasses}>{children}</span>;
};

export default Badge;
