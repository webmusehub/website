import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const mousePosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      // Smooth animation with easing
      const deltaX = mousePosition.current.x - currentPosition.current.x;
      const deltaY = mousePosition.current.y - currentPosition.current.y;
      
      currentPosition.current.x += deltaX * 0.2;
      currentPosition.current.y += deltaY * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0) translate(-50%, -50%)`;
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Initialize position
    if (cursorRef.current) {
      currentPosition.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      cursorRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0) translate(-50%, -50%)`;
    }

    // Start animation loop
    requestRef.current = requestAnimationFrame(animate);

    // Track mouse movement
    window.addEventListener('mousemove', updateMousePosition, { passive: true });

    // Use event delegation for hover detection
    document.body.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-cursor-hover]')) {
        handleMouseEnter();
      }
    });

    document.body.addEventListener('mouseout', (e) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-cursor-hover]')) {
        handleMouseLeave();
      }
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor will-change-transform ${isHovering ? 'hover' : ''}`}
      style={{ 
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform'
      }}
    />
  );
};

export default CustomCursor;