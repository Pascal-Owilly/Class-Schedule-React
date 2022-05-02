import React from "react";
import styled from "styled-components";
export const BodyGroup1 = ({}) => {
  return (
    <BodyGroupRoot>
      <Element1>
        <Element2>
          <Element3>
            <SilverFlexRow>
              <Text1>Session 1</Text1>
            </SilverFlexRow>
            <Image1 src={"https://file.rendit.io/n/DQqqKMjZvczKjRlNuSZT.svg"} />
          </Element3>
          <WhiteRectangle>
            <Text2>Edit</Text2>
            <Text3>Delete</Text3>
            <Deletesvgrepocom src={""} />
            <Image2 src={"https://file.rendit.io/n/q9IlhrhMXO4z6ahFVFBz.svg"} />
            <Image3 src={"https://file.rendit.io/n/78eHDdiZJQcoh6iJffOs.svg"} />
          </WhiteRectangle>
        </Element2>
        <Editsvgrepocom src={""} />
        <FlexColumn>
          <Text4>Ongoing Session</Text4>
          <Text5>Session name</Text5>
        </FlexColumn>
        <Element4>
          <WhiteRectangle1 />
          <Text6>Livelink</Text6>
        </Element4>
      </Element1>
      <FlexColumn1>
        <SilverRectangle alignSelf={"flex-start"}>
          <Text7 left={"45px"}>Session 1</Text7>
          <SilverRectangle1>
            <Text8>Session 6</Text8>
            <Image4 src={"https://file.rendit.io/n/dgSrqR9q8XfQ3TxHhUi3.svg"} />
            <Text9>9.00 pm - 10.00am</Text9>
          </SilverRectangle1>
        </SilverRectangle>
        <SilverRectangle2>
          <Text10>Session 1</Text10>
          <SilverRectangle3>
            <Text11>Session 5</Text11>
            <Image5 src={"https://file.rendit.io/n/SjP9p6sSL9571tks4uKr.svg"} />
            <Text12>2.00 pm - 3.00pm</Text12>
          </SilverRectangle3>
        </SilverRectangle2>
      </FlexColumn1>
      <FlexColumn2>
        <SilverRectangle alignSelf={"inherit"}>
          <Text7 left={"44px"}>Session 1</Text7>
          <SilverRectangle1>
            <Text8>Session 6</Text8>
            <Image4 src={"https://file.rendit.io/n/szSIH5YJiXuolfv9eqWP.svg"} />
            <Text15>11.00 pm - 12.00am</Text15>
          </SilverRectangle1>
        </SilverRectangle>
        <SilverRectangle alignSelf={"inherit"}>
          <Text7 left={"44px"}>Session 1</Text7>
          <SilverRectangle1>
            <Text8>Session 6</Text8>
            <Image4 src={"https://file.rendit.io/n/szSIH5YJiXuolfv9eqWP.svg"} />
            <Text18>4.00 pm - 5.00pm</Text18>
          </SilverRectangle1>
        </SilverRectangle>
      </FlexColumn2>
    </BodyGroupRoot>
  );
};
const BodyGroupRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  min-width: 1126px;
`;
const Element1 = styled.div`
  width: 490.59px;
  height: 266px;
  position: relative;
  flex-grow: 1;
  margin: 0px 36.41px 0px 0px;
`;
const Element2 = styled.div`
  width: 232px;
  height: 258px;
  position: absolute;
  top: 4px;
  left: 258.59px;
`;
const Element3 = styled.div`
  width: 232px;
  height: 76px;
  position: absolute;
`;
const SilverFlexRow = styled.div`
  height: 27.2px;
  background-color: #c4c4c4;
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  padding: 16.29px 49.35px 32.51px 36.65px;
`;
const Text1 = styled.div`
  width: 143px;
  height: 27.2px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
`;
const Image1 = styled.img`
  width: 48.9px;
  height: 65.2px;
  position: absolute;
  top: 5.43px;
  left: 183.21px;
`;
const WhiteRectangle = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 227px;
  height: 180px;
  background-color: #ffffff;
  position: absolute;
  top: 75.04px;
  left: -1px;
`;
const Text2 = styled.div`
  width: 182px;
  height: 40.1px;
  font-size: 32px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  top: 22.33px;
  left: 27.51px;
`;
const Text3 = styled.div`
  width: 182px;
  height: 40.1px;
  font-size: 32px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  top: 74.58px;
  left: 20.38px;
`;
const Deletesvgrepocom = styled.img`
  width: 40.7px;
  height: 37.3px;
  position: absolute;
  top: 60.59px;
  left: 178.21px;
`;
const Image2 = styled.img`
  width: 40.7px;
  height: 37.3px;
  position: absolute;
  top: 74.58px;
  left: 172.11px;
`;
const Image3 = styled.img`
  width: 40.7px;
  height: 37.3px;
  position: absolute;
  top: 23.26px;
  left: 160.88px;
`;
const Editsvgrepocom = styled.img`
  width: 40.7px;
  height: 40px;
  position: absolute;
  top: 106px;
  left: 181.22px;
`;
const FlexColumn = styled.div`
  height: 164px;
  background-image: url("https://file.rendit.io/n/zHuyvfgJjw3nNbdJJrnO.svg");
  background-size: cover;
  position: absolute;
  top: 16px;
  display: flex;
  flex-direction: column;
  gap: 27.89px;
  justify-content: center;
  align-items: center;
  padding: 0px 9.76px 0px 12.24px;
`;
const Text4 = styled.div`
  width: 204px;
  height: 41.9px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
`;
const Text5 = styled.div`
  width: 181px;
  height: 56.3px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  align-self: flex-start;
  margin: 0px 0px 0px 9.16px;
`;
const Element4 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 259px;
  height: 75px;
  position: absolute;
  top: 191px;
`;
const WhiteRectangle1 = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  width: 224px;
  height: 73px;
  background-color: #ffffff;
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 10px;
`;
const Text6 = styled.div`
  width: 191px;
  height: 30px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  color: #151eff;
  position: absolute;
  top: 23px;
  left: 67.83px;
`;
const FlexColumn1 = styled.div`
  width: 281px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 35px;
  flex-grow: 1;
  align-items: center;
  padding: 2px 0px;
  margin: 0px 41px 0px 0px;
`;
const Text9 = styled.div`
  width: 234px;
  height: 27px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  top: 58px;
`;
const SilverRectangle2 = styled.div`
  width: 281px;
  height: 87px;
  background-color: #c4c4c4;
  position: relative;
`;
const Text10 = styled.div`
  width: 175px;
  height: 31.1px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  top: 18.64px;
  left: 45px;
`;
const SilverRectangle3 = styled.div`
  width: 281px;
  height: 87px;
  background-color: #c4c4c4;
  position: absolute;
  border-radius: 10px;
`;
const Text11 = styled.div`
  width: 175px;
  height: 31.1px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  top: 5.19px;
  left: 7px;
`;
const Image5 = styled.img`
  width: 59.9px;
  height: 74.6px;
  position: absolute;
  top: 6.21px;
  left: 220px;
`;
const Text12 = styled.div`
  width: 234px;
  height: 27px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  top: 54px;
  left: 9px;
`;
const FlexColumn2 = styled.div`
  width: 277px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 34px;
  flex-grow: 1;
  align-items: center;
`;
const Text15 = styled.div`
  width: 234px;
  height: 27px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  top: 59px;
  left: 2px;
`;
const Text18 = styled.div`
  width: 234px;
  height: 27px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  top: 57px;
  left: 7px;
`;
const SilverRectangle = styled.div`
  width: 277px;
  height: 90px;
  background-color: #c4c4c4;
  position: relative;
  align-self: ${(props) => props.alignSelf};
`;
const Text7 = styled.div`
  width: 172px;
  height: 32.1px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  top: 19.29px;
  left: ${(props) => props.left};
`;
const SilverRectangle1 = styled.div`
  width: 277px;
  height: 90px;
  background-color: #c4c4c4;
  position: absolute;
`;
const Text8 = styled.div`
  width: 172px;
  height: 32.1px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  top: 5.37px;
  left: 7px;
`;
const Image4 = styled.img`
  width: 59.1px;
  height: 77.1px;
  position: absolute;
  top: 6.43px;
  left: 217px;
`;
