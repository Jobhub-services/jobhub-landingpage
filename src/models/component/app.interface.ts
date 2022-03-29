import { CSSProperties } from 'styled-components';

export interface IconProps {
	size?: number;
	color?: string;
}

export interface AppProps {
	basename: string;
}

export type StandardProps = {
	className?: string;
	style?: CSSProperties;
	children?: React.ReactNode;
};

export interface LogoProps extends StandardProps {
	link?: string;
	src?: string;
}
