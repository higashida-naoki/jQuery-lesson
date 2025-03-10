function togglePassword() {
  var passField = document.getElementById("password");
  var passIcon = document.getElementById("pass-icon");

  // パスワードの表示・非表示を切り替える
  passField.type = passField.type === "password" ? "text" : "password";

  // アイコンのクラスを切り替える
  passIcon.classList.toggle("fa-eye");
  passIcon.classList.toggle("fa-eye-slash");
}