import React from 'react';
import './Loader.scss';

import * as Types from 'components/types';

type Props = {
	percent: number;
	size?: number;
	width?: number;
};

export const Loader = (props: Props) => {
	const base: string = 'loader';

	const {percent = 0, size = 50, width = 4} = props;

	const radius: number = (size - width) / 2;
	const circum = 2 * radius * Math.PI;
	const draw = (percent * circum) / 100;

	return (
		<svg
			className={base}
			style={{strokeDasharray: `${draw} 999`, strokeWidth: width}}
			viewBox={`0 0 ${size} ${size}`}
			width={size}
			height={size}
		>
			<circle cx={size / 2} cy={size / 2} r={radius} />
		</svg>
	);
};
