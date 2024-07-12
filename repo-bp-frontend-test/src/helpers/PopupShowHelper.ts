export const handleOpenPopup = (popupId: string) => {
  const popup = document.getElementById(popupId);
  popup?.classList.add("open");
}

export const handleClosePopup = (popupId:string ) => {
  const popup = document.getElementById(popupId);
  popup?.classList.remove("open");

}
