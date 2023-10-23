import { FunctionComponent } from "react";
interface CardSuggestProps {
  title: string;
  description?: string;
  listcontent: string;
}

const CardSuggest: FunctionComponent<CardSuggestProps> = (
  props: CardSuggestProps
) => {
  const { title, description, listcontent } = props;
  return (
    <>
      <div className="card border border-4 border-dashed border-secondary shadow-lg hover:shadow-secondary">
        <div className="card-body gap-1">
          <h5 className="text-2xl font-semibold">{title}</h5>
          {description && (
            <p className="text-sm text-gray-500 font-light">{description}</p>
          )}
          <hr />
          <ul>
            {listcontent.split("\n").map((item, index) => (
              <li
                key={index}
                className="hover:bg-secondary px-3 rounded-md text-lg font-medium text-gray-500 hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardSuggest;
