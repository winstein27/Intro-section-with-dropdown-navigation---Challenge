import { useState, useEffect } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setWidth(window.screen.width);
    });

    resizeObserver.observe(document.body);
  }, []);

  return width;
};

export default useViewport;
