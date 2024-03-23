function showSignInForm() {
    document.querySelector(".form-container").innerHTML = `
    <div class="form-header">
          <button>
            <h1 id="sign-in" class="sign-in" onclick="showSignInForm()">Sign In</h1>
          </button>
          <button>
            <h1 id="sign-up" class="sign-up" onclick="showSignupForm()">Sign Up</h1>
          </button>
        </div>
      <form id="signInForm" action="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div class="form-group">
          <button type="submit">Sign In</button>
        </div>
        <div class="form-footer">
          <span>Don't have an account? <a href="#" class="sign-up" onclick="showSignupForm()">Sign up</a></span>
        </div>
      </form>
    `;
  }

  function showSignupForm() {
    document.querySelector(".form-container").innerHTML = `
    <div class="form-header">
          <button>
            <h1 id="sign-in" class="sign-in" onclick="showSignInForm()">Sign In</h1>
          </button>
          <button>
            <h1 id="sign-up" class="sign-up" onclick="showSignupForm()">Sign Up</h1>
          </button>
        </div>
      <form action="register">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" />
        </div>
        <div class="form-group">
          <button type="submit">Sign Up</button>
        </div>
        <div class="form-footer">
          <span>Already have an account? <a href="#" class="sign-in" onclick="showSignInForm()">Sign in</a></span>
        </div>
      </form>
    `;
  }