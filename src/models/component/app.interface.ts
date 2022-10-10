import { CSSProperties } from 'styled-components';

export interface MasterContextProps {
	scrolled?: boolean;
	collapsed?: boolean;
}

export interface PIconProps {
	width?: string;
	height?: string;
	color?: string;
}

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
