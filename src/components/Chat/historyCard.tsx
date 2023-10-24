import { FunctionComponent } from "react";

interface HistoryChatProps {
  title: string;
  record: string;
}

const HistoryChat: FunctionComponent<HistoryChatProps> = (
  props: HistoryChatProps
) => {
  const { title, record } = props;
  return (
    <>
      <div className="w-full my-3 shadow p-3 bg-neutral rounded-lg">
        <h3 className="text-lg font-semibols">{title}</h3>
        <p className="text-sm font-medium text-gray-500">{record}</p>
      </div>
    </>
  );
};

export default HistoryChat;
