import { useEffect, useRef, useState } from "react";

export interface Props {
    formURL: string,
    autoResize?: boolean,
    autoFocus?: boolean,
    heightOffset?: number,
    initialHeight?: number,
    onSubmit?: () => void,
    formID?: string,
    style?: {[style: string]: string},
    className?: string
}

export default function JotFormEmbed({
    formURL,
    autoResize,
    autoFocus,
    heightOffset = 15,
    initialHeight = 540,
    onSubmit,
    formID,
    style = { },
    className
  }: Props) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [componentStyles, setComponentStyles] = useState({
        minHeight: initialHeight,
        height: initialHeight,
        overflow: 'hidden',
        border: 0,
        width: '100%'
    });
  
    useEffect(() => {
      const handleMessages = (content: any) => {
        if (!content) { return; }
        // Check if submission is completed.
        if (!!onSubmit && typeof content.data === 'object' && content.data.action === 'submission-completed') {
          onSubmit();
          return;
        }
  
        // From now on we only handle style related messages
        if (typeof content.data !== 'string') { return; }
        const [method, value, targetForm] = content.data.split(':');
        // eslint-disable-next-line eqeqeq
        if (formID && targetForm && targetForm != formID) { // If you want to use multiple form via embed you need to use formID
          return;
        }
  
        switch (true) {
          case method === 'scrollIntoView' && autoFocus:
            if (!!iframeRef.current && typeof iframeRef.current.scrollIntoView === 'function') {
              iframeRef.current.scrollIntoView();
            }
            break;
          case method === 'setHeight' && autoResize:
            setComponentStyles({ ...componentStyles, height: parseInt(value, 10) + heightOffset });
            break;
          case method === 'setMinHeight' && autoResize:
            setComponentStyles({ ...componentStyles, minHeight: parseInt(value, 10) + heightOffset });
            break;
          case method === 'reloadPage':
            try {
                !!iframeRef.current && !!iframeRef.current.contentWindow && iframeRef.current.contentWindow.location.reload();
            } catch (e) {
              console.log('failed to reload', e);
            }
            break;
          default:
            break;
        }
      };
  
      if (window.addEventListener) {
        window.addEventListener('message', handleMessages, true); // Capture
      } else {
        console.log("Unable to attach form event listener");
        
      }
      return () => {
        if (window.removeEventListener) {
          window.removeEventListener('message', handleMessages, true);
        }
      };
    }, []);
  
    return (
      <iframe
        ref={iframeRef}
        src={formURL}
        title="JotForm Form"
        style={{
          ...componentStyles,
          ...style
        }}
        className={className}
        allowFullScreen={true}
      />
    );
  };