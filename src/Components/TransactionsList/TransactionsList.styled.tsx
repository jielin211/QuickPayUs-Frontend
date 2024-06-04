import styled from "styled-components";
import { Select } from "antd";

export const Container = styled.div`
  padding: 17px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  // height: 100vh;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ListContainer = styled.div`
  background: var(--color-bg-container);
  padding: 24px;

  border-radius: 18px;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 16px;

  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
export const Title = styled.h1`
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  font-family: sans-serif;
  margin: 0px;
  padding-bottom: 0px;
  padding-left: 7px;
  @media screen and (max-width: 992px) {
    font-size: 20px;
    width: 100%;
    text-align: center;
    padding-bottom: 16px;
  }
`;
export const TableWrapper = styled.div`
  overflow-x: auto;
`;
export const PaginationWrapper = styled.div`
  margin-top: 20px;
  text-align: right;
`;
export const SelectOne = styled(Select)`
  width: 120px;
`;
export const SelectTwo = styled(Select)`
  width: 120px;
  margin-top: 0px;
`;
