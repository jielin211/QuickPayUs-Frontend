import { Col, Input, Row } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { Link } from "react-router-dom";
import {
  FileProtectOutlined,
  QuestionCircleTwoTone,
  ContactsTwoTone,
} from "@ant-design/icons";
import * as Styled from "./Support.styled";

const { Search } = Input;

const Support = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div>
      <Styled.BgTop>
        <Styled.StyledH1>How can we help?</Styled.StyledH1>
        <Styled.StyledSearch
          placeholder="Input search text"
          allowClear
          onSearch={onSearch}
          size="middle"
        />
      </Styled.BgTop>

      <div style={{ background: "#f4f4f4", height: "100%" }}>
        <Styled.TopicWrapper>
          <Styled.StyledH2>
            Choose a topic to help us route your request quickly.
          </Styled.StyledH2>
          <Styled.StyledRow justify={"space-between"}>
            {/* Col */}
            <Styled.StyledCol lg={7} sm={12}>
              <Link to="/support/ticket">
                <Styled.IconWrapper>
                  <FileProtectOutlined />
                </Styled.IconWrapper>
                <Styled.ItemTitleWrapper>
                  Ticket Submission
                </Styled.ItemTitleWrapper>
              </Link>
            </Styled.StyledCol>
            <Styled.StyledCol lg={7} sm={12}>
              <Link to="/support/feedback">
                <Styled.IconWrapper>
                  <QuestionCircleTwoTone />
                </Styled.IconWrapper>
                <Styled.ItemTitleWrapper>Feedback</Styled.ItemTitleWrapper>
              </Link>
            </Styled.StyledCol>
            <Styled.StyledCol lg={7} sm={12}>
              <Link to="/support/contact">
                <Styled.IconWrapper>
                  <ContactsTwoTone />
                </Styled.IconWrapper>
                <Styled.ItemTitleWrapper>
                  Contact Information
                </Styled.ItemTitleWrapper>
              </Link>
            </Styled.StyledCol>
          </Styled.StyledRow>
        </Styled.TopicWrapper>
      </div>
    </div>
  );
};

export default Support;
