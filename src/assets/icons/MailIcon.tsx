import { PIconProps } from '@/models/component/app.interface';

const MailIcon = ({ width, height, color }: PIconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M35.83333,28.66667c-11.25167,0 -20.49835,8.67167 -21.43001,19.70833l71.59668,38.66081l71.59668,-38.66081c-0.93167,-11.03667 -10.17835,-19.70833 -21.43001,-19.70833zM14.33333,60.52474v61.30859c0,11.86083 9.63917,21.5 21.5,21.5h100.33333c11.86083,0 21.5,-9.63917 21.5,-21.5v-61.30859l-69.11914,37.37305c-0.78833,0.43 -1.65169,0.64388 -2.54753,0.64388c-0.89583,0 -1.75919,-0.21388 -2.54753,-0.64388z"></path>
				</g>
			</g>
		</svg>
	);
};
MailIcon.defaultProps = {
	width: '20px',
	height: '20px',
	color: 'black',
};
export default MailIcon;
