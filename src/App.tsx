import React from 'react';
import { Button } from './shared/Button';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { addElement, removeElement } from './redux/elementSlice';
import { AnimatePresence } from 'framer-motion';

import { motion } from 'framer-motion';
import { ListItem } from './shared/ListItem';
const App: React.FC = () => {
  const items = useAppSelector((state) => state.elementReducer.items);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Генерация случайного цвета
    dispatch(addElement(randomColor));
  };

  const handleDelete = () => {
    dispatch(removeElement());
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-center gap-20 py-10">
        <Button onClick={handleAdd}>Добавить</Button>
        <Button onClick={handleDelete}>Удалить</Button>
      </div>
      <div className="relative">
        <motion.ul layout className="absolute flex">
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <ListItem key={item.id} randomColor={item.randomColor} />
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </div>
  );
};

export default App;
