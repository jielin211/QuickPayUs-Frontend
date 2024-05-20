import { Table, Pagination, Select, Skeleton, DatePicker, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { STATUS, TRANSACTION_TYPE } from "./constants";
import * as Styled from "./TransactionsList.styled";
import { useTransactionsList } from "./useTransactionsList";

const { Option } = Select;

const TransactionsList: React.FC = () => {
  const {
    currentPage,
    pageSize,
    isLoading,
    isFetching,
    disabledDate,
    disabledDateTime,
    currentData,
    handleStartDateChange,
    handleEndDateChange,
    handleTransactionTypeChange,
    handleStatusChange,
    handlePageChange,
    transactionsList,
    columns,
  } = useTransactionsList();
  return (
    <Styled.Container>
      <Styled.ListContainer>
        <Styled.ListHeader>
          <Styled.Title>Transactions</Styled.Title>
          <Styled.FilterContainer>
            <Space size={10}>
              <DatePicker
                onChange={handleStartDateChange}
                disabledDate={disabledDate}
                disabledTime={disabledDateTime}
                placeholder="From"
                allowClear
                format={"DD-MM-YYYY"}
              />
              <DatePicker
                onChange={handleEndDateChange}
                placeholder="To"
                allowClear
                format={"DD-MM-YYYY"}
              />
            </Space>
            <Space size={10}>
              <Styled.SelectOne
                defaultValue={TRANSACTION_TYPE.DEPOSIT}
                onChange={handleTransactionTypeChange}
                placeholder="Transaction Type"
              >
                <Option value={TRANSACTION_TYPE.DEPOSIT}>Deposit</Option>
                <Option value={TRANSACTION_TYPE.WITHDRAWAL}>Withdrawal</Option>
                <Option value={TRANSACTION_TYPE.PROFIT}>Profit</Option>
                <Option value={TRANSACTION_TYPE.REFERRAL_CREDIT}>Credit</Option>
              </Styled.SelectOne>
              <Styled.SelectTwo
                defaultValue={STATUS.APPROVED}
                onChange={handleStatusChange}
                placeholder="Status"
              >
                <Option value={STATUS.APPROVED}>Approved</Option>
                <Option value={STATUS.PENDING}>Pending</Option>
                <Option value={STATUS.REJECTED}>Rejected</Option>
              </Styled.SelectTwo>
            </Space>
          </Styled.FilterContainer>
        </Styled.ListHeader>
        {isLoading || isFetching ? (
          <>
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
          </>
        ) : (
          <Styled.TableWrapper>
            <Table
              columns={columns}
              dataSource={currentData}
              pagination={false}
            />
          </Styled.TableWrapper>
        )}
        <Styled.PaginationWrapper>
          <Pagination
            defaultCurrent={1}
            total={transactionsList?.total || 0}
            pageSize={pageSize}
            current={currentPage}
            prevIcon={<LeftOutlined className="color-black" />}
            nextIcon={<RightOutlined className="color-black" />}
            onChange={handlePageChange}
            responsive={true}
          />
        </Styled.PaginationWrapper>
      </Styled.ListContainer>
    </Styled.Container>
  );
};

export default TransactionsList;
