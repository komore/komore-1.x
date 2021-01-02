import { defineElement } from '@komore/element';

/**
 * Layout header element
 */
export const LayoutHeader = defineElement({
  name: 'layout-header',
  styles: ({ css }) => css`
    :host {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      background-color: var(--komore-dark);
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 16px;
    }

    .logo > svg {
      width: 48px;
      height: 48px;
    }

    .icon {
      margin-left: 16px;
    }

    .icon > svg {
      width: 24px;
      height: 24px;
      fill: #ffffff;
      transition: fill 0.25s ease-in-out;
    }

    .icon:hover > svg {
      fill: var(--komore-primary);
    }

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      align-content: center;
    }

    nav {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-self: stretch;
      align-items: stretch;
      justify-content: flex-end;
    }

    nav > a {
      font-size: 18px;
      text-decoration: none;
      text-transform: uppercase;
      color: #ffffff;
      padding: 0px 16px;
    }

    nav > a:hover {
      opacity: 0.875;
    }

    komore-search-input {
      justify-self: flex-end;
      margin-left: 16px;
    }
  `,
  template: ({ html }) => html`
    <a class="logo" routerLink="/">
      <svg viewBox="0 0 1024 1024">
        <style>
          .c0 {
            fill: #fff59d;
          }
          .c1 {
            fill: #dce775;
          }
          .c2 {
            fill: #9ccc65;
          }
          .c3 {
            fill: #4caf50;
          }
          .sh {
            fill: rgba(0, 0, 0, 0.125);
          }
        </style>
        <path class="c0" d="M512,0l116,116l-116,116,l-116,-116z" />
        <path class="c1" d="M512,264l132,-132l116,116,l-248,248l-248,-248l116,-116z" />
        <path class="c2" d="M512,528l264,-264l116,116,l-380,380l-380,-380l116,-116z" />
        <path class="c3" d="M512,792l396,-396l116,116,l-512,512l-512,-512l116,-116z" />
      </svg>
    </a>
    <nav>
      <a href=""> Getting Started </a>
      <a href=""> Documentation </a>
    </nav>
    <komore-search-input></komore-search-input>
    <a class="icon twitter" href="https://twitter.com">
      <svg viewBox="0 0 50 49.7">
        <path
          d="
      M50,9.3c-1.8,0.8-3.8,1.4-5.9,1.6c2.1-1.3,3.7-3.3,4.5-5.7c-2,1.2-4.2,2-6.5,2.5c-1.9-2-4.5-3.2-7.5-3.2
	    c-5.7,0-10.3,4.6-10.3,10.3c0,0.8,0.1,1.6,0.3,2.3C16.1,16.7,8.5,12.6,3.5,6.4c-0.9,1.5-1.4,3.3-1.4,5.2c0,3.6,1.8,6.7,4.6,8.5
	    C5,20,3.4,19.6,2,18.8c0,0,0,0.1,0,0.1c0,5,3.5,9.1,8.2,10.1c-0.9,0.2-1.8,0.4-2.7,0.4c-0.7,0-1.3-0.1-1.9-0.2
	    c1.3,4.1,5.1,7,9.6,7.1c-3.5,2.8-7.9,4.4-12.7,4.4c-0.8,0-1.6,0-2.4-0.1c4.5,2.9,9.9,4.6,15.7,4.6c18.9,0,29.2-15.6,29.2-29.2
	    c0-0.4,0-0.9,0-1.3C46.9,13.2,48.6,11.4,50,9.3z"
        />
      </svg>
    </a>
    <a class="icon github" href="https://github.com/komore/komore">
      <svg viewBox="0 0 51.8 50.4">
        <path
          d="
      M25.9,0.2C11.8,0.2,0.3,11.7,0.3,25.8c0,11.3,7.3,20.9,17.5,24.3c1.3,0.2,1.7-0.6,1.7-1.2c0-0.6,0-2.6,0-4.8
      c-7.1,1.5-8.6-3-8.6-3c-1.2-3-2.8-3.7-2.8-3.7c-2.3-1.6,0.2-1.6,0.2-1.6c2.6,0.2,3.9,2.6,3.9,2.6c2.3,3.9,6,2.8,7.5,2.1
      c0.2-1.7,0.9-2.8,1.6-3.4c-5.7-0.6-11.7-2.8-11.7-12.7c0-2.8,1-5.1,2.6-6.9c-0.3-0.7-1.1-3.3,0.3-6.8c0,0,2.1-0.7,7,2.6
      c2-0.6,4.2-0.9,6.4-0.9c2.2,0,4.4,0.3,6.4,0.9c4.9-3.3,7-2.6,7-2.6c1.4,3.5,0.5,6.1,0.3,6.8c1.6,1.8,2.6,4.1,2.6,6.9
      c0,9.8-6,12-11.7,12.6c0.9,0.8,1.7,2.4,1.7,4.7c0,3.4,0,6.2,0,7c0,0.7,0.5,1.5,1.8,1.2c10.2-3.4,17.5-13,17.5-24.3
      C51.5,11.7,40.1,0.2,25.9,0.2z"
        />
      </svg>
    </a>
  `
});
