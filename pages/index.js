import React, { useEffect, useRef, useState } from 'react';
import GrapesJS from 'grapesjs';
import gjsBasicBlocks from 'grapesjs-blocks-basic';
import { Container, Navbar } from 'react-bootstrap';
import Head from 'next/head';

function Editor() {
  const [editor, setEditor] = useState(null);
  const customDivRef = useRef(null);

  useEffect(() => {
    const customDiv = customDivRef.current;
    if (!customDiv) {
      console.error("Custom div element not found.");
      return;
    }

    const editorInstance = GrapesJS.init({
      container: customDiv,
      fromElement: true,
      width: "auto",
      storageManager: false,
      plugins: [gjsBasicBlocks],
      pluginsOpts: {
        gjsBasicBlocks: {},
      },
      blockManager : {
        appendTo : '#blocks'
      },
      layerManager : {
        appendTo : '#layer-container'
      },
      styleManager : {
        appendTo : '#style-container'
      },
      panels:{
        defaults:{}
      }
      
    });

    setEditor(editorInstance);

    return () => {
      if (editorInstance) {
        editorInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Builder Home Page</title>
      </Head>
      <div className="main-content">
        <Navbar bg="light" expand="lg">
          <Container fluid>devices basic</Container>
        </Navbar>
        <div ref={customDivRef} id="editor"></div>
      </div>
    </>
  );
}

export default Editor;
