const rootElement = document.querySelector("#root").insertAdjacentHTML("beforeend", `
  <form class="login-box">
  <span class="material-symbols-outlined">
  login
  </span>
    <input class="input-user" type="username" placeholder="username" name="username">
    <input class="input-user" type="password" placeholder="password" name="password">
    <p class="forgot"><a href="#">Forgot password?</a></p>
    <button id="submit">Log in</button>

    <div class="options-text">
      <h6>Or sign in with </h6>
    </div>
    <div class="options-button">
      <button id="fb"><img src="assets/fb-icon-color.png"/></button>
      <button id="google"><img src="assets/google-icon-color.png"/></button>
      <button id="x"><img src="assets/x-icon-black.png"/></button>
    </div>
  </form>
  `)




