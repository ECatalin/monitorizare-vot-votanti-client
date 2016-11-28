import React from 'react';
import styled from 'styled-components';

// @TODO: Move each of the following styled components into separate files.
const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  opacity: 0.7;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextWrapper = styled.div`
  align-self: center;
`;

const RowWrapper = styled.div`
  background: #FFCC00;
  color: #5F288D;
  padding: 25px;
  height: 100%;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  box-sizing: border-box;

  &:nth-child(-n+2) > .row-wrap {
    background: #5F288D;
    color: #FFF;
    > .text-wrap > .item-title {
      font-size: 50px;
    }
  }
`;

export default function StatsItem(props) {
  return (
    <Wrapper className="col-md-6 col-xs-12">
      <RowWrapper className="row row-wrap">
        <TextWrapper className="col-md-6 col-xs-12 text-wrap" >
          <Title className="item-title"> {props.title} </Title>
        </TextWrapper>

        <TextWrapper className="col-md-6 col-xs-12">
          <Subtitle> {props.subtitle} </Subtitle>
        </TextWrapper>
      </RowWrapper>
    </Wrapper>
  );
}

StatsItem.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
};
