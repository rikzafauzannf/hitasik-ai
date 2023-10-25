import { FunctionComponent } from "react";
import Image from "next/image";
interface CardSuggestProps {
  title: string;
  description?: string;
  listcontent: string;
  iconsMe: string;
}

const CardSuggest: FunctionComponent<CardSuggestProps> = (
  props: CardSuggestProps
) => {
  const { title, description, listcontent, iconsMe } = props;
  return (
    <>
      <div className="card border border-double border-secondary shadow-lg hover:shadow-secondary w-full">
        <div className="card-body gap-1">
          <div className="flex gap-3 items-center">
            <Image src={iconsMe} alt="" width={50} height={50} />
            <h5 className="text-2xl font-bold">{title}</h5>
          </div>
          {description && (
            <p className="text-sm text-gray-500 font-light">{description}</p>
          )}
          <ul>
            {listcontent.split("\n").map((item, index) => (
              <li
                key={index}
                className="hover:bg-gray-200 bg-gray-500 px-4 py-2 rounded-md text-lg font-light text-white my-3 hover:text-black"
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
