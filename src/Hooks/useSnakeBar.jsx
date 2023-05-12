import { useSnackbar } from "notistack";

export const useSnackBar = () => {
  const { enqueueSnackbar } = useSnackbar();
  const showPopUp = (message, variant) => {
    return (
      enqueueSnackbar(message, {
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        variant: variant,
        autoHideDuration: 2000,
      })
    )
  }

  return showPopUp
};
