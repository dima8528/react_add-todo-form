import { User } from "../../types/User";

type Props = {
  usersFromServer: User[];
}

export const UserInfo: React.FC<Props> = ({ usersFromServer }) => {
  return (
    <form action="/api/todos" method="POST">
      <div className="field">
        <input type="text" data-cy="titleInput" />
        <span className="error">Please enter a title</span>
      </div>

      <div className="field">
        <select data-cy="userSelect">
          <option value="0" key={0} disabled>
            Choose a user
          </option>

          {usersFromServer.map(user => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <span className="error">Please choose a user</span>
      </div>

      <button type="submit" data-cy="submitButton">
        Add
      </button>
    </form>
  );
};
