import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { CardItem } from '@/models/component/carousel.interface';

export const cardSize = {
	width: 320,
	height: 300,
};

const CardCarouselStyled = styled.div`
	border: 2px solid ${colors.GRAY_BASE};
	padding: 15px;
	border-radius: 8px;
	margin: 0 10px;
	width: ${cardSize.width}px;
	height: ${cardSize.height}px;
	background-color: ${colors.WHITE};
	text-align: center;
`;

const CardImg = styled.img`
	width: 85px;
	height: 85px;
	margin-top: 5px;
	margin-bottom: 10px;
	border-radius: 50px;
	object-fit: cover;
	border: 2px solid ${colors.GRAY_BASE};
`;

const CardTitle = styled.h3`
	margin: 0;
`;
const CardDescription = styled.p`
	margin: 10px 0 0 0;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const CardCarousel = ({ item }: { item?: CardItem } = { item: {} }) => {
	return (
		<CardCarouselStyled>
			<CardImg src={item?.img} />
			<CardTitle>{item?.headName}</CardTitle>
			<CardDescription>{item?.description}</CardDescription>
		</CardCarouselStyled>
	);
};

export default CardCarousel;
