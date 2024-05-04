import styled from "styled-components";
import { Empty, Select } from "antd";  

export const Container = styled.div`
  padding: 30px;
  @media screen and (max-width: 768px) { 
    padding: 0px;
  }
  background-color: #fafafc;
`;

export const ListContainer = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
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
  @media screen and (max-width: 992px) {
    font-size: 20px;
    width:100%;
    text-align: center;
    padding-bottom: 16px;
  }
  `;
  export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding:10px;
    width: 100%;
    
  }
  `;
  export const searchField = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding:10px;
    width: 100%;
    
  }
  `;
  
  export const EmptyStateContainer = styled.div`
  padding: 20px;
  `;
  
  export const TableWrapper = styled.div`
  overflow: auto;  
  border-radius: 18px;
  `;  
  
  export const PaginationWrapper = styled.div`
  margin-top: 20px;  
  text-align: right;  
  `;
  
  export const EmptyState = styled(Empty)`
  span {
    color: #ff0000;
  }
  `;
  
  export const SelectStyled = styled(Select)` 
  width: 100%; 
`;


