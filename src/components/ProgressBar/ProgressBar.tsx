import { usePageScroll } from '../hooks/usePageScroll';
import s from './ProgressBar.module.css';

export const ProgressBar = () => {
  const percent = usePageScroll();
  return <div style={{ width: `${percent}%` }} className={s.scroll} />;
};
