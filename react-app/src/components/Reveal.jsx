import { useEffect, useRef, useState } from 'react';

const motionAllowed =
  typeof window !== 'undefined' &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fades its element in once when it scrolls into view. Does nothing under reduced motion. */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(!motionAllowed);

  useEffect(() => {
    if (shown || !ref.current) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [shown]);

  const classes = [className, motionAllowed && 'reveal', motionAllowed && shown && 'in'].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={classes || undefined} {...rest}>
      {children}
    </Tag>
  );
}
