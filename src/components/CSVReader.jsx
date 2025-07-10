<<<<<<< HEAD
import React, { useState } from "react";
import { useCSVReader, lightenDarkenColor, formatFileSize } from "react-papaparse";

const GREY = "#CCC";
const GREY_LIGHT = "rgba(255, 255, 255, 0.4)";
const DEFAULT_REMOVE_HOVER_COLOR = "#A01919";
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(DEFAULT_REMOVE_HOVER_COLOR, 40);
const GREY_DIM = "#686868";

const styles = {
  zone: {
    alignItems: "center",
    border: `2px dashed`,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
  file: {
    background: "linear-gradient(to bottom, #aaa, #aaa)",
    borderRadius: 20,
    display: "flex",
    height: 60,
    width: 120,
    position: "relative",
    zIndex: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  info: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
  },
  size: {
    borderRadius: 3,
    marginBottom: "0.5em",
    justifyContent: "center",
    display: "flex",
  },
  name: {
    borderRadius: 3,
    fontSize: 12,
    marginBottom: "0.5em",
  },
  progressBar: {
    bottom: 14,
    position: "absolute",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  zoneHover: {
    borderColor: GREY_DIM,
  },
  default: {
    borderColor: GREY,
  },
  remove: {
    height: 23,
    position: "absolute",
    right: 6,
    top: 6,
    width: 23,
  },
};

export default function CSVReader(props) {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [removeHoverColor, setRemoveHoverColor] = useState(DEFAULT_REMOVE_HOVER_COLOR);

  return (
    <CSVReader
      config={props.config}
      onUploadAccepted={(results) => {
        //call the ondrop function from the props, passing the results.
        props.onDrop(results.data);
        setZoneHover(false);
      }}
      onDragOver={(event) => {
        event.preventDefault();
        setZoneHover(true);
      }}
      onDragLeave={(event) => {
        event.preventDefault();
        setZoneHover(false);
      }}
    >
      {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps, Remove }) => (
        <>
          <div
            {...getRootProps()}
            style={{
              ...styles.zone,
              ...(zoneHover ? styles.zoneHover : {}),
            }}
          >
            {acceptedFile ? (
              <>
                <div style={styles.file}>
                  <div style={styles.info}>
                    <span style={styles.size}>{formatFileSize(acceptedFile.size)}</span>
                    <span style={styles.name}>{acceptedFile.name}</span>
                  </div>
                  <div style={styles.progressBar}>
                    <ProgressBar />
                  </div>
                  <div
                    {...getRemoveFileProps()}
                    style={styles.remove}
                    onMouseOver={(event) => {
                      event.preventDefault();
                      setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
                    }}
                    onMouseOut={(event) => {
                      event.preventDefault();
                      setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR);
                    }}
                  >
                    <Remove color={removeHoverColor} />
                  </div>
                </div>
              </>
            ) : (
              "Drop CSV file here or click to upload"
            )}
          </div>
        </>
      )}
    </CSVReader>
  );
}
=======
import React, { useState, useEffect } from "react";
import { useCSVReader, lightenDarkenColor, formatFileSize } from "react-papaparse";
import { Box, Typography, useTheme } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

/*
 * These colors define our remove button states. The light version is
 * calculated rather than hardcoded - a small touch that ensures
 * consistent color relationships no matter what base color we use.
 * 
 * Sometimes it's these little details that make a component feel polished.
 */
const DEFAULT_REMOVE_HOVER_COLOR = "#A01919";
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(DEFAULT_REMOVE_HOVER_COLOR, 40);

/*
 * This component has evolved from a simple file input to a polished
 * upload zone that maintains state between wizard steps. It's a good
 * example of how components grow with requirements while trying to
 * keep their core purpose clear.
 * 
 * The journey to this version taught us about:
 * - Proper event handling with third-party libraries
 * - State persistence in multi-step forms
 * - The value of simple solutions (sessionStorage vs complex state)
 */
export default function CSVReader({ config, onDrop, onRemove }) {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [removeHoverColor, setRemoveHoverColor] = useState(DEFAULT_REMOVE_HOVER_COLOR);
  const [storedFile, setStoredFile] = useState(null);
  const theme = useTheme();

  /*
   * On mount, we check sessionStorage for file details. This lets us
   * restore the preview when users navigate back to this step.
   * 
   * It's a simple solution that works well - sometimes the best
   * approaches don't need complex state management. The fact that
   * it "just works" is a feature, not a bug.
   */
  useEffect(() => {
    const fileName = sessionStorage.getItem('csvFileName');
    const fileSize = sessionStorage.getItem('csvFileSize');
    if (fileName && fileSize) {
      console.log('Restoring file preview:', fileName);
      setStoredFile({
        name: fileName,
        size: parseInt(fileSize, 10)
      });
    }
  }, []);

  return (
    <CSVReader
      config={config}
      onUploadAccepted={(results, file) => {
        console.log('File accepted:', file.name);
        onDrop(results.data);
        setZoneHover(false);
        setStoredFile(file);
        // Store file details for persistence between steps
        sessionStorage.setItem('csvFileName', file.name);
        sessionStorage.setItem('csvFileSize', file.size.toString());
      }}
      onDragOver={(event) => {
        event.preventDefault();
        setZoneHover(true);
      }}
      onDragLeave={(event) => {
        event.preventDefault();
        setZoneHover(false);
      }}
    >
      {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps, Remove }) => (
        <Box
          {...getRootProps()}
          sx={{
            border: '2px dashed',
            borderColor: zoneHover ? '#f5a815' : 'rgba(255, 255, 255, 0.1)',
            borderRadius: 1,
            p: 3,
            minHeight: 150,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease-in-out',
            position: 'relative',
          }}
        >
          {(acceptedFile || storedFile) ? (
            <Box sx={{ textAlign: 'center', position: 'relative', width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                <CloudUpload sx={{ color: '#f5a815', fontSize: 24, mr: 1 }} />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" sx={{ color: '#fff' }}>
                    {acceptedFile?.name || storedFile?.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {formatFileSize(acceptedFile?.size || storedFile?.size)}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: '100%', px: 2 }}>
                {acceptedFile && <ProgressBar />}
              </Box>
              {/* 
               * The remove button's event handling taught us about working with
               * third-party libraries. Instead of fighting the library's patterns,
               * we adapted to work with them. A good reminder that sometimes
               * the best solution is to follow the path of least resistance.
               */}
              <Box
                sx={{
                  position: 'absolute',
                  right: -8,
                  top: -8,
                  cursor: 'pointer',
                  color: removeHoverColor,
                  transition: 'color 0.2s ease-in-out',
                  '&:hover': { color: REMOVE_HOVER_COLOR_LIGHT },
                }}
                {...getRemoveFileProps({
                  onClick: (e) => {
                    console.log('Removing file');
                    setStoredFile(null);
                    sessionStorage.removeItem('csvFileName');
                    sessionStorage.removeItem('csvFileSize');
                    // Notify parent that file was removed
                    onRemove?.();
                  }
                })}
              >
                <Remove />
              </Box>
            </Box>
          ) : (
            <Box sx={{ textAlign: 'center' }}>
              <CloudUpload
                sx={{
                  fontSize: 40,
                  color: 'rgba(255, 255, 255, 0.5)',
                  mb: 1,
                  transition: 'color 0.2s ease-in-out',
                  ...(zoneHover && { color: '#f5a815' })
                }}
              />
              <Typography variant="body1" sx={{ color: '#fff' }}>
                Drop CSV file here
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                or click to browse
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </CSVReader>
  );
}
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
