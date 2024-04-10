import styled from "styled-components";

export const NotificationCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 8px;
  background-color: #fff;
  color: ${(props) => {
    switch (props.$type) {
      case "GENERAL":
        return "blue";
      case "ACTIVITY":
        return "gray";
      case "IMPORTANT":
        return "#f00000";
      default:
        return "gray";
    }
  }};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const NotificationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 15px;
  font-size: ${(props) =>
    props.$variant === "announcements" ? "18px" : "16px"};
  color: #333;
`;

export const NotificationBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    text-align: left;
    flex-direction: column;
    gap: 8px;
  }
`;

export const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Message = styled.p`
  width: 100%;
  text-align: left;
  margin: 0;
  font-size: 14px;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.$variant === "announcements" ? "flex-start" : "flex-end"};
  gap: 2px;
  font-size: 10px;
  color: #999;
`;

export const UnreadDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #ff0000;
  border-radius: 50%;
  display: inline-block;
  margin-top: 2px;
  margin-right: 8px;
  position: relative;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${(props) => {
    switch (props.$type) {
      case "GENERAL":
        return "blue";
      case "UPDATES":
        return "green";
      case "IMPORTANT":
        return "#f00000";
      case "URGENT":
        return "#f00000";
      case "WARNING":
        return "orange";
    }
  }};
`;
