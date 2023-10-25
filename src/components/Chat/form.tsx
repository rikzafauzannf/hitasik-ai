import React, { useState } from "react";

interface FormsProps {
  onAddItem: (item: string) => void;
}
const AddForm = ({ onAddItem }: FormsProps) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputValue) return;
          onAddItem(inputValue);
          setInputValue("");
        }}
      >
        <div className="flex gap-4 mt-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="w-20 btn btn-secondary">
            send
          </button>
        </div>
      </form>
    </>
  );
};
export default AddForm;

// const Forms = ({ onAddItem }) => {
//   const [newItem, setNewItem] = useState("");

//   const handleAddItem = () => {
//     onAddItem(newItem);
//     setNewItem("");
//   };
//   return (
//     <>
//       <div className="flex gap-4 mt-4">
//         <input
//           type="text"
//           value={newItem}
//           placeholder="Type here"
//           className="input input-bordered input-secondary w-full max-w-full"
//           onChange={(e) => setNewItem(e.target.value)}
//         />
//         <button onClick={handleAddItem} className="w-20 btn btn-secondary">
//           send
//         </button>
//       </div>
//     </>
//   );
// };

// export default Forms;
