import { Table, Pagination, Select, Skeleton, Input, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import * as Styled from "./ReferralsList.styled"; 
import { REFERRAL_TYPE } from "./constants";
import { useReferralsList } from "./useReferralsList";
  
const { Option } = Select; 
 
const Referrals: React.FC = () => {
  const { 
    currentPage,
    pageSize,
    isLoading,
    isFetching,
    currentData,
    handleTypeChange,
    handleLevelChange,
    handlePageChange,
    handleSearch,
    columns,
    isSuccess,
    levels,
    referrals,
    type,
    directLevel,
  } = useReferralsList();
  return (
    <Styled.Container>
      <Styled.ListContainer>
        <Styled.ListHeader>
          <Styled.Title>Referrals</Styled.Title>
          <Styled.FilterContainer>
            <Space>
              <Input.Search
                placeholder="Search"
                onSearch={handleSearch}
                allowClear
              />
            </Space> 
            <Space size={10}>
              <Styled.SelectStyled
                defaultValue={REFERRAL_TYPE.DIRECT}
                onSelect={handleTypeChange}
              >
                <Option value={REFERRAL_TYPE.DIRECT}>Direct</Option>
                <Option value={REFERRAL_TYPE.INDIRECT}>Indirect</Option>
              </Styled.SelectStyled>
              {type === REFERRAL_TYPE.DIRECT && (
                <Styled.SelectStyled defaultValue={1}> 
                  <Option key={directLevel} value={directLevel}>
                    {"Level 1"}  
                  </Option>
                </Styled.SelectStyled>
              )}

              {type === REFERRAL_TYPE.INDIRECT && (
                <Styled.SelectStyled
                  defaultValue={2} 
                  onChange={handleLevelChange}
                >
                  {levels.map((level) => (
                    <Option key={level} value={level}>
                      {"Level " + level}
                    </Option>
                  ))}
                </Styled.SelectStyled>
              )}
            </Space>
          </Styled.FilterContainer>
        </Styled.ListHeader>
        {isLoading || isFetching ? ( // Show skeleton loader while data is loading
          <div>
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
          </div>
        ) : (  
          <Styled.TableWrapper>  
            <Table 
              columns={columns}
              dataSource={isSuccess ? currentData : []}
              pagination={false}
            />
          </Styled.TableWrapper> 
        )}
        <Styled.PaginationWrapper> 
          <Pagination
            defaultCurrent={1}
            total={referrals?.total}
            pageSize={pageSize} 
            current={currentPage} 
            prevIcon={<LeftOutlined className="color-red"/>} 
            nextIcon={<RightOutlined className="color-red"/>}  
            onChange={handlePageChange}
            responsive={true} 
          /> 
        </Styled.PaginationWrapper>
      </Styled.ListContainer>
    </Styled.Container>
  );
};

export default Referrals;
