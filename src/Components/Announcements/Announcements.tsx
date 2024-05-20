import { Layout, Skeleton, Empty } from "antd";
import { NotificationCard } from "../NotificationCard";

import { useAnnouncements } from "./useAnnouncements";
import * as Styled from "./Announcements.styled";

const { Content } = Layout;

export const Announcements: React.FC = () => {
  const { announcements, isLoading, isFetching, currentPage, setCurrentPage } =
    useAnnouncements();

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Announcements</Styled.Title>
      </Styled.Header>
      <Content className="announce-content">
        <div>
          {(isLoading || isFetching) && (
            <>
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
            </>
          )}
          {announcements &&
            announcements?.data.map((announcements) => (
              <NotificationCard
                cardItem={announcements}
                key={announcements._id}
                variant="announcements"
              />
            ))}
          {announcements?.length === 0 && (
            <div>
              <Empty description={"No notifications found"} />
            </div>
          )}
        </div>
        <Styled.LoadMoreButtonContainer>
          {announcements?.totalPages > currentPage && (
            <Styled.LoadMoreButton
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
              }}
            >
              Load More
            </Styled.LoadMoreButton>
          )}
          {announcements?.totalPages === currentPage && currentPage !== 1 && (
            <Styled.NoMoreData>No more announcements to load</Styled.NoMoreData>
          )}
        </Styled.LoadMoreButtonContainer>
      </Content>
    </Styled.Container>
  );
};
