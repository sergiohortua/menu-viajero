import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function DialogDescription(props: Props) {
  const { open, item } = props;
console.log(item);
  return (
    <Dialog fullWidth maxWidth={"sm"} open={open}>
      <DialogTitle>{item.title}</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: '120px',
                height: '250px',
                borderRadius: "5px",
              }}
              image={item.image}
              alt="Descripcion"
            />
          </Grid>
          <Grid item xs={9} sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            <CardContent
              sx={{
               
                "&.MuiCardContent-root:last-child": {
                  padding: "20px auto 20px",
                },
              }}
            >
              <div
                style={{
                  // overflow: "hidden",
                  // maxWidth: "155px",
                  // height: "80px",
                  // margin: "0 0 20px 0",
                }}
              >
                <Typography
                  sx={{
                    // overflow: "hidden",
                    // textOverflow: "ellipsis",
                    // display: "-webkit-box",
                    // WebkitLineClamp: "3",
                    // WebkitBoxOrient: "vertical",
                  }}
                  variant="subtitle1"
                  align={"center"}
                >
                  {item.description}
                </Typography>
              </div>
              <Typography
                sx={{ marginTop: "25px" }}
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {item.price}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
