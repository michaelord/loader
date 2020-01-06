import React from 'react';
import './Spinner.scss';

import * as Types from 'components/types';

type Props = {};

export const Spinner = (props: Props) => {
	const base: string = 'spinner';

	return (
		<span className={base}>
			<span />
			<span />
			<span />
			<span />
		</span>
	);
};
