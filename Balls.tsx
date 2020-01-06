import React from 'react';
import './Balls.scss';

import * as Types from 'components/types';

type Props = {};

export const Balls = (props: Props) => {
	const base: string = 'loader-balls';

	return (
		<span className={base}>
			<span />
			<span />
			<span />
		</span>
	);
};
