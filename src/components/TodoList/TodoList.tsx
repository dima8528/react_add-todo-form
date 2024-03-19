import { DataItem } from "../../types/DataItem";
import { TodoInfo } from "../TodoInfo";

type Props = {
  dataFromServer: DataItem[];
}

export const TodoList: React.FC<Props> = ({ dataFromServer }) => (
  <section className="TodoList">
    {dataFromServer.map(dataItem => (
      <TodoInfo dataItem={dataItem} key={dataItem.id} />
    ))}
  </section>
);
