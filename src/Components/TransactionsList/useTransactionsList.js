import { useEffect, useState, useCallback } from "react";
import { useGetTransactionsListQuery } from "../../Redux/slice";
import dayjs from "dayjs";
import { STATUS, TRANSACTION_TYPE } from "./constants";

export function useTransactionsList() {
  const oneMonthBackDate = dayjs().subtract(1, "month");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [transactionsList, setTransactionsList] = useState([]);
  const [transactionType, setTransactionType] = useState(
    TRANSACTION_TYPE.DEPOSIT
  );
  const [status, setStatus] = useState(STATUS.APPROVED);
  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs());
  const [from, setFrom] = useState(oneMonthBackDate.format("YYYY-MM-DD"));
  const [to, setTo] = useState(dayjs().format("YYYY-MM-DD"));

  const pageSize = 5;
  const currentData = transactionsList?.data;

  const transactionsListQuery = {
    transactionType: transactionType,
    status: status,
    page: currentPage,
    from: from,
    to: to,
  };
  const {
    data: listData,
    isLoading: isTransactionsListLoading,
    refetch,
    isError,
    isFetching,
    isSuccess,
  } = useGetTransactionsListQuery(transactionsListQuery);

  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const handleTransactionTypeChange = useCallback(
    (value) => {
      setTransactionType(value);
      refetch();
    },
    [refetch]
  );

  const handleStatusChange = useCallback(
    (value) => {
      setStatus(value);
      refetch();
    },
    [refetch]
  );

  const handlePageChange = useCallback(
    (page) => {
      setCurrentPage(page);
      refetch();
    },
    [refetch]
  );

  const handleStartDateChange = (date) => {
    if (date === null) {
      setFrom(oneMonthBackDate.format("YYYY-MM-DD"));
    } else {
      setFrom(dayjs(date).format("YYYY-MM-DD"));
    }
  };

  const handleEndDateChange = (date) => {
    if (date === null) {
      setTo(dayjs().format("YYYY-MM-DD"));
    } else {
      setTo(dayjs(date).format("YYYY-MM-DD"));
    }
  };

  const disabledDate = (current) => {
    return current < dayjs().subtract(1, "month").endOf("day");
  };
  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  });

  useEffect(() => {
    if (isFetching || isTransactionsListLoading) {
      setIsLoading(true);
      return;
    }

    if (isError) {
      setIsLoading(false);
      return;
    }

    if (isSuccess) {
      setIsLoading(false);
      setTransactionsList(listData || []);
    }
  }, [
    isFetching,
    isTransactionsListLoading,
    isError,
    isSuccess,
    transactionsList,
    listData,
  ]);

  useEffect(() => {
    refetch();
  }, [refetch, from, to]);

  const handleDateFormatter = (date) => {
    const dateObject = new Date(date);
    const utcOffsetMilliseconds = dateObject.getTimezoneOffset() * 60 * 1000;
    const adjustedDateObject = new Date(
      dateObject.getTime() + utcOffsetMilliseconds
    );
    const formatedDate = adjustedDateObject.toISOString().split("T")[0];
    return formatedDate;
  };

  const columns = [
    {
      title: "Original Amount",
      dataIndex: "originalAmount",
      sorter: (a, b) => a.originalAmount - b.amount,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Amount Fee",
      dataIndex: "feesAmount",
      sorter: (a, b) => a.feesAmount - b.feesAmount,
    },
    // Uncomment if needed only for admin
    // {
    //   title: "Customer",
    //   dataIndex: "customer",
    //   sorter: (a, b) => a.customer.localeCompare(b.customer),
    // },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date) => handleDateFormatter(date),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
      title: "Receiver Address",
      dataIndex: "receiverAddress",
      sorter: (a, b) => a.receiverAddress.localeCompare(b.receiverAddress),
    },
    {
      title: "Sender Address",
      dataIndex: "senderAddress",
      sorter: (a, b) => a.senderAddress.localeCompare(b.senderAddress),
    },
  ];

  return {
    isLoading,
    isFetching,
    transactionsList,
    currentData,
    columns,
    pageSize,
    currentPage,
    fromDate,
    toDate,
    setFromDate,
    setToDate,
    handlePageChange,
    handleTransactionTypeChange,
    handleStatusChange,
    handleStartDateChange,
    handleEndDateChange,
    disabledDate,
    disabledDateTime,
  };
}
