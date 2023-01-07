import styled from "styled-components";

const ItemComp = ({ companyInfo }) => {
  return (
    <ItemBox>
      {companyInfo.map((item, index) => (
        <div key={`info-container-${index}`}>
          <div key={`first-info-${index}`}>
            <img src={item.imgSrc} alt="" key={`info-img-${index}`} />
          </div>
          <div key={`second-info-${index}`}>{item.title}</div>
          <div key={`third-info-${index}`}>{item.info}</div>
          <div key={`fourth-info-${index}`}>{item.buttonInner}</div>
        </div>
      ))}
    </ItemBox>
  );
};

export default ItemComp;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  padding: 15px 0;
  & > div {
    width: 32%;
    & > div {
      padding: 10px 0;
      &:nth-child(2) {
        font-weight: 700;
      }
    }
    & > div:last-child {
      display: inline-block;
      cursor: pointer;
      position: relative;
      border-bottom: 3px solid gray;
      padding: 5px 0;
      &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      }
      &:hover::after {
        width: 100%;
        border-bottom: 3px solid black;
      }
    }
  }
`;
