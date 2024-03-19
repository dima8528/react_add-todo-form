import './App.scss';

import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { TodoList } from './components/TodoList';
import { UserInfo } from './components/UserInfo';
import { DataItem } from "./types/DataItem";

export const App = () => {
  const dataFromServer: DataItem[] = todosFromServer.map(todo => {
    const user = usersFromServer.find(usr => usr.id === todo.userId);

    return { ...todo, user };
  })

  return (
    <div className="App">
      <h1>Add todo form</h1>

      <UserInfo usersFromServer={usersFromServer} />

      <TodoList dataFromServer={dataFromServer} />
    </div>
  );
};
