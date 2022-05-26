import { StyledList } from "./StyledUsers";
import User from "./User";

export default ({ list, isAdmin }) => {
  return (
    <StyledList>
      {list?.map((user) => (
        <User userInfo={user} isAdmin={isAdmin} />
      ))}
    </StyledList>
  );
};
