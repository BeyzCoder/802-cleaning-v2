import React, { useEffect, useRef } from 'react';

const ElfsightWidget = () => {
  const elfsightRef = useRef(null);

  useEffect(() => {
    // Load Elfsight script dynamically
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    // Initialize the widget once the script is loaded
    script.onload = () => {
      // if (typeof ElfsightPlatform !== 'undefined') {
      //   ElfsightPlatform.initialize();
      // }

      let resizeTimeout;
      const observer = new ResizeObserver(entries => {
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(() => {
          for (let entry of entries) {
            // Handle the resize event
          }
        }, 100);
      });

				if (elfsightRef.current) {
					observer.observe(elfsightRef.current);
				}

				// Clean up observer on component unmount
				return () => {
					if (observer && elfsightRef.current) {
						observer.unobserve(elfsightRef.current);
					}
				};
		};
  }, []);

  return <div ref={elfsightRef} className="elfsight-app-d8e862e1-3c01-4400-90bf-bcaa2e2d5f9d"></div>;
};

export default ElfsightWidget;