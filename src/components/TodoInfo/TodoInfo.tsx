import { DataItem } from "../../types/DataItem";

type Props = {
  dataItem: DataItem;
}

export const TodoInfo: React.FC<Props> = ({ dataItem }) => {
  return (
    <article data-id={dataItem.id} className="TodoInfo TodoInfo--completed" key={dataItem.id}>
      <h2 className="TodoInfo__title">{dataItem.title}</h2>

      <a className="UserInfo" href="mailto:Sincere@april.biz">
        {dataItem.user?.name}
      </a>
    </article>
  );
};
