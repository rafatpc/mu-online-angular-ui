import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <section class="top-bar">
        <div class="title">
            <div class="content">
                <div class="message">
                    <i class="fas fa-angle-double-right"></i>
                    WELCOME TO <span class="server-name">DarkPowerMu</span>, ENJOY YOUR STAY ~ SERVER TIME IS: <span class="time">14:48</span>
                </div>
                <div class="links">
                    <i class="fas fa-angle-double-right"></i>
                    <a href="#">home</a>
                    <i class="fas fa-angle-double-right"></i>
                    <a href="#">forum</a>
                    <i class="fas fa-angle-double-right"></i>
                    <a href="#">downloads</a>
                    <i class="fas fa-angle-double-right"></i>
                    <a href="#">vote</a>
                </div>
            </div>
        </div>
        <div class="information">
            <div class="content">
                DarkPowerMu: <strong class="status online">Online</strong> ~
                DarkPowerMu VIP: <strong class="status online">Online</strong> ~
                Castle Siege: <strong class="status offline">Offline</strong>
            </div>
        </div>
    </section>
    <header>
        <div class="logo">
            <img src="/assets/images/logo.png" alt="Mu Online Logo" />
        </div>
        <div class="login">
            <form action="" method="post">
                <h2><i class="fas fa-angle-double-right"></i> Members Login</h2>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <ul class="links no-bullet">
                    <li>
                        <a href="#" class="dark">New account</a>
                    </li>
                    <li>
                        <a href="#" class="dark">Lost password?</a>
                    </li>
                </ul>
                <div class="controls">
                    <div class="remember-me">
                        <div class="checkbox">
                        <div class="box">
                            <input type="checkbox" id="remember-me" name="remember" />
                            <i class="fas fa-check"></i>
                        </div>
                        <label for="remember-me">Keep me signed-in</label>
                    </div>

                    </div>
                    <div class="sign-in">
                        <button type="submit" class="button gray">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </header>
    <nav>
        <div class="background-fade"></div>
        <div id="main-menu" class="main">
            <a href="#/test">Home</a>
            <a href="#/test">Register</a>
            <div class="filler"></div>
        </div>
        <div id="sub-menu" class="submenu">
            <a href="#/test">sub</a>
            <i class="fas fa-angle-double-right"></i>
            <a href="#/test">menu</a>
            <i class="fas fa-angle-double-right"></i>
            <a href="#/test">items</a>
        </div>
    </nav>
    <main>
        <router-outlet></router-outlet>
    </main>
    <footer>
        <div class="quick-links">
            <a href="#home">home</a> -
            <a href="#statistics">statistics</a> -
            <a href="#downloads">downloads</a> -
            <a href="#vote">vote for us</a> -
            <a href="#webshop">webshop</a> -
            <a href="#site-map">site map</a>
        </div>
        <div class="credits">
            (c) XWeb 2009 [clone] | Front-end by RaFa | Design by Anthony
        </div>
    </footer>
    `,
    styles: []
})
export class AppComponent {
    title = 'SimpleAsThat';
}
