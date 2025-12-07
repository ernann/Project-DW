function showProfile(profileNumber) {
  const profiles = document.querySelectorAll(".description-area");
  const buttons = document.querySelectorAll(".btn-primary");
  const timeline1 = document.querySelector(".profile1-timeline");

  // Reset semua profile dan tombol
  profiles.forEach((profile) => profile.classList.remove("active"));
  buttons.forEach((btn) => btn.classList.remove("active-btn"));

  // Aktifkan profile dan tombol yang dipilih
  document.getElementById("profile" + profileNumber).classList.add("active");
  buttons[profileNumber - 1].classList.add("active-btn");

  // Timeline hanya tampil untuk Profile 1
  if (profileNumber === 1) {
    timeline1.style.display = "block";
  } else {
    timeline1.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showProfile(1); // default tampil profile 1
});
