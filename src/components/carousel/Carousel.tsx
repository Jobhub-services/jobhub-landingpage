import { useEffect, useState } from 'react';
import { FlexBox } from 'staak-ui';
import styled, { css } from 'styled-components';
import CardCarousel, { cardSize } from '@/components/carousel/CardCarousel';
import { colors } from '@/assets/theme';
import { CardItem } from '@/models/component/carousel.interface';

const cardwidth = cardSize.width + 20;

const cardsInlineSize = 3;

const Container = styled.div`
	width: ${cardwidth * cardsInlineSize}px;
	overflow: hidden;
	margin: auto;
`;
const CarouselStyled = styled(FlexBox)`
	width: max-content;
	transition: 0.3s ease;
`;

const Indicators = styled(FlexBox)`
	margin-top: 20px;
`;

const IndicatorItem = styled.span<{ active?: boolean }>`
	display: block;
	width: 14px;
	height: 14px;
	background-color: ${colors.BLACK_10};
	margin: 0 5px;
	border-radius: 20px;
	cursor: pointer;
	${({ active }) =>
		active &&
		css`
			background-color: ${colors.PURPLE_BASE};
			cursor: default;
		`}
`;

const Carousel = ({ items }: { items: CardItem[] } = { items: [] }) => {
	const [currentItem, setCurrentItem] = useState(0);
	const [cardsLimit, setCardsLimit] = useState(Math.min(items.length, cardsInlineSize));

	useEffect(() => {
		setCardsLimit(Math.min(items.length, cardsInlineSize));
	}, [items]);

	const generateIndicators = () => {
		const indicators: any[] = [];
		const indicatorNumber = Math.ceil(items.length / cardsLimit);
		for (let index = 0; index < indicatorNumber; index++) {
			indicators.push(<IndicatorItem key={index} onMouseDown={() => handleSelectItem(index)} active={index === currentItem} />);
		}
		return indicators;
	};

	const _getTranslateValue = () => {
		const startIndex = currentItem * cardsLimit;
		const itemLength = items.length;
		const _index = itemLength - startIndex > cardsLimit ? startIndex : items.length - cardsLimit;
		return _index * cardwidth;
	};

	const generateCards = () => {
		const cards: any[] = [];
		for (let index = 0; index < items.length; index++) {
			cards.push(<CardCarousel key={index} item={items[index]} />);
		}
		return cards;
	};

	const handleSelectItem = (index) => {
		if (index === currentItem) return;
		setCurrentItem(index);
	};
	return (
		<div>
			<Container>
				<CarouselStyled style={{ transform: `translateX(-${_getTranslateValue()}px)` }}>{generateCards()}</CarouselStyled>
			</Container>
			<Indicators>{generateIndicators()}</Indicators>
		</div>
	);
};

export default Carousel;
