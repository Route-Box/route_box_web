import { useState } from 'react';

interface CheckListItem {
  id: string;
  text: string;
  checked: boolean;
}

const useCheckList = (initialItems: CheckListItem[]) => {
  const [items, setItems] = useState<CheckListItem[]>(initialItems);

  const toggleCheck = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: true } : { ...item, checked: false }
      )
    );
  };

  return {
    items,
    toggleCheck,
  };
};

export default useCheckList;
