import { colors } from '@/assets/theme';
import { TypeAttributes } from '../types';

export const AppColors: { [key in TypeAttributes.Color]: { primary: string; secondry?: string; third?: string } } = {
	red: { primary: colors.PURPLE_BASE },
	purple: { primary: colors.PURPLE_BASE, secondry: colors.PURPLE_2, third: colors.PURPLE_3 },
	blue: { primary: colors.PURPLE_BASE },
	black: { primary: 'black' },
	white: { primary: colors.WHITE },
	gray: { primary: colors.GRAY_BASE },
};

export const CardFontSize: { [key in TypeAttributes.Size]: string } = {
	xs: '10px',
	sm: '14px',
	md: '18px',
	lg: '22px',
	xlg: '24px',
};
