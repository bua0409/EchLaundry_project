export function success(
  title = "Error!",
  text = "Do you want to continue",
  icon = "error",
  confirmButtonText = "Cool"
) {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  });
}
