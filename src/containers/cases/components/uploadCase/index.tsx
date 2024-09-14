import Button from "@/components/Button";
import { NEUTRAL, SECONDARY, pxToRem } from "@/theme";
import { Box, Stack, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DropAddIcon } from "../svgs/DropAddIcon";
import { InfoIcon } from "../svgs/InfoIcon";
import UploadedItemRow from "./UploadedItemRow";

export default function UploadcaseModal() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log("acceptedFiles", acceptedFiles);
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <Stack
      sx={{
        width: pxToRem(700),
        // height: pxToRem(738),
        padding: pxToRem(24),
        gap: pxToRem(25),
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Stack gap={pxToRem(5)}>
          <Typography
            variant="subtitle1"
            color={SECONDARY[500]}
            fontWeight={700}
            fontSize={pxToRem(28)}
          >
            Upload File
          </Typography>
          <Typography variant="body1" color={SECONDARY[300]}>
            Upload the Patient Dermascopic Image here
          </Typography>
        </Stack>
      </Stack>
      <Stack alignItems={"center"} height={"100%"}>
        <Stack
          gap={pxToRem(25)}
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={pxToRem(16)}
            width={"100%"}
            // sx={{ color: NEUTRAL[400] }}
          >
            <Box
              component={"input"}
              placeholder="Name"
              sx={{
                border: `1px solid rgba(201, 206, 206, 1)`,
                width: "100%",
                pl: pxToRem(15),
                height: pxToRem(48),
                borderRadius: pxToRem(16),
              }}
            />
            <Box
              component={"input"}
              placeholder="1458-CDAD"
              sx={{
                border: `1px solid rgba(201, 206, 206, 1)`,
                width: "100%",
                pl: pxToRem(15),
                height: pxToRem(48),
                borderRadius: pxToRem(16),
              }}
            />
          </Stack>

          <Box
            component="div"
            {...getRootProps()}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px dashed ${NEUTRAL[200]}`,
              height: "100%",
              minHeight: files.length ? pxToRem(189) : pxToRem(436),
              width: "100%",
              borderRadius: pxToRem(30),
            }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <Stack
                gap={pxToRem(16)}
                alignItems={"center"}
                justifyContent={"center"}
                >
                <DropAddIcon />
                <Typography variant="subtitle1" color={SECONDARY[300]}>
                  Drag & Drop or Click to Choose
                </Typography>
                <Stack direction={"row"} alignItems={"center"} gap={pxToRem(8)}>
                  <InfoIcon />
                  <Typography variant="subtitle2" color={SECONDARY[200]}>
                    PDF File, Max File Size : 50MB
                  </Typography>
                </Stack>
              </Stack>
            )}
          </Box>
          {Boolean(files.length) && (
            <Stack gap={pxToRem(8)} width={"100%"}>
              {files.map((item, index) => (
                <UploadedItemRow key={index} />
              ))}
            </Stack>
          )}
          <Button
            sx={{
              height: pxToRem(48),
              width: pxToRem(95),
              borderRadius: pxToRem(16),
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
