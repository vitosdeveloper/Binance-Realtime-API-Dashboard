'use client';
import {
  decrement,
  increment,
  selectCount,
} from './lib/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './lib/hooks';

export default function Home() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
