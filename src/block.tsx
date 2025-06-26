import React from 'react';

interface BlockProps {
  title?: string;
  description?: string;
}

const Block: React.FC<BlockProps> = ({ title, description }) => {
  // Send completion event immediately since this is just a display block
  React.useEffect(() => {
    const sendCompletion = () => {
      window.postMessage({ 
        type: 'BLOCK_COMPLETION', 
        blockId: '685d294544b7adbdf3cb4fb8', 
        completed: true 
      }, '*');
      window.parent.postMessage({ 
        type: 'BLOCK_COMPLETION', 
        blockId: '685d294544b7adbdf3cb4fb8', 
        completed: true 
      }, '*');
    };
    
    sendCompletion();
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#333',
        textAlign: 'center',
        margin: 0,
        padding: '20px'
      }}>
        I'm FABIEN
      </h1>
    </div>
  );
};

export default Block;