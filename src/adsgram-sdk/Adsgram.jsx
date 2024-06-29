import React, { useState, useEffect } from 'react';
import {Button} from "@telegram-apps/telegram-ui";

const Adsgram = ({ blockId,className, debug = false }) => {
  const [adController, setAdController] =useState(null);
  const [showPromise, setShowPromise] = useState(null);

  useEffect(() => {
    const initAdsgram = async () => {
      const AdController = window.Adsgram.init({ blockId, debug });
      setAdController(AdController);
    };

    initAdsgram();
  }, [blockId, debug]);

  const handleShowAd = async () => {
    if (!adController) return;

    try {
      const result = await adController.show();
      setShowPromise(result);
      if (result.done) {
        // User watched the ad till the end
        // Your code to reward user
      }
    } catch (error) {
      console.error('Error showing ad:', error);
      setShowPromise({ done: false, error: true });
    } finally {
      // Optional: Additional action after ad finishes
    }
  };

  return (
      <div className={className}>
        {showPromise ? (
            <div>
              Ad finished: {showPromise.done ? 'Watched' : 'Skipped'}
            </div>
        ) : (
            <Button onClick={handleShowAd}>Show Ad</Button>
        )}
      </div>
  );
};

export default Adsgram;
