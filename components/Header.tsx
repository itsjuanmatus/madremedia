import Link from "next/link";
import Hamburger from "./Hamburger";
import { useState, useEffect } from "react";
import { withRouter, useRouter } from "next/router";

function Header() {
  // state for menu button
  const [state, setState] = useState<any>({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // state for disabled buttons
  const [disabled, setDisabled] = useState(false);

  //useEffect for page changes

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      console.log(`App is changing to ${url}`);
      setState({ clicked: false, menuName: "Menu" });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  // determine if our menu button should be Disabled

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className=" ">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo cursor-pointer w-16">
              <Link href="/">
                <svg

                  viewBox="0 0 109 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M101.905 52.8793C102.512 50.4997 103.082 48.1957 103.537 45.8917C103.872 44.1848 104.075 42.4548 104.144 40.717L106.686 42.039C106.789 43.2176 106.954 44.3901 107.179 45.5517C107.596 47.7047 108.09 49.8198 108.697 51.8972C108.772 52.1075 108.836 52.3219 108.886 52.5393C108.913 52.6893 108.913 52.8426 108.886 52.9926V53.2948L106.42 53.6725L104.106 54.0502L101.412 54.4657V54.1257V53.5969C101.716 53.4458 101.792 53.2192 101.905 52.8793Z"
                    fill="#603913"
                  />
                  <path
                    d="M60.7031 7.74303C60.3616 5.89226 59.9064 3.96594 59.2614 1.39752L58.8441 0.339938V0L61.0066 0.339938L69.4671 1.62415L73.261 2.15294L86.464 42.0768L98.6425 6.04334L102.892 6.68545L104.295 6.8743L106.61 7.25201H106.875L108.469 7.47864V7.74303L108.279 8.53622C107.28 11.291 106.717 14.1834 106.61 17.1102L104.258 15.4483V16.2793C104.258 16.0526 104.258 15.8638 104.258 15.6749L91.2823 56.0898H91.0546L87.9815 56.543L73.0713 12.3511V46.3449C73.059 48.1428 73.2114 49.938 73.5266 51.7084C73.8681 53.3325 74.2475 55.1833 74.7407 57.2607L75.0442 58.1672V58.4693L73.0713 58.7715L61.0066 60.5845L58.8441 60.9245V60.5845L59.0717 59.5269C59.7167 57.1474 60.1719 55.0322 60.5134 53.1814C60.8566 51.2617 61.0217 49.3146 61.0066 47.3647V13.3709C61.0729 11.4897 60.9714 9.60635 60.7031 7.74303V7.74303Z"
                    fill="#603913"
                  />
                  <path
                    d="M7.13269 52.8793C6.48772 50.4997 5.95656 48.1957 5.50129 45.8917C5.14741 44.1878 4.94429 42.4563 4.89426 40.717L2.31438 42.039C2.24166 43.2187 2.08956 44.3923 1.85911 45.5517C1.40383 47.7047 0.91062 49.8198 0.341528 51.8972C0.238167 52.1006 0.161653 52.3164 0.113892 52.5393V52.9926V53.2948L2.57995 53.6725L4.89426 54.0502L7.6259 54.4657V54.1257C7.6259 54.1257 7.6259 53.7858 7.6259 53.5969C7.49621 53.3358 7.33017 53.0942 7.13269 52.8793V52.8793Z"
                    fill="#603913"
                  />
                  <path
                    d="M48.4867 7.74303C48.8281 5.89226 49.3214 3.96594 49.9284 1.39752L50.194 0.339938V0L47.9935 0.339938L39.533 1.62415L35.9667 2.15294L22.7637 42.0768L10.4334 6.04334L6.18421 6.68545L4.78046 6.8743L2.46615 7.25201H2.23851L0.607117 7.55418V7.81858L0.834753 8.61176C1.81863 11.3561 2.36897 14.2357 2.46615 17.148L4.85633 15.4861V16.317C4.85633 16.0904 4.85633 15.9015 4.85633 15.7127L17.7178 56.0898H18.0972L21.1324 56.543L35.9667 12.3511V46.3449C35.9671 48.144 35.802 49.9393 35.4735 51.7084C35.1699 53.3325 34.7526 55.1833 34.2973 57.2607L34.1456 58.2427V58.5449L36.1184 58.8471L48.1452 60.6601L50.3457 61V60.6601L50.0801 59.6025C49.4731 57.2229 48.9799 55.1077 48.6384 53.257C48.3139 51.3348 48.149 49.3893 48.1452 47.4402V13.4464C48.105 11.5393 48.2192 9.63195 48.4867 7.74303V7.74303Z"
                    fill="#603913"
                  />
                </svg>
              </Link>
            </div>
            <div className="menu">
              <button className="" disabled={disabled} onClick={handleMenu}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
}

export default withRouter(Header);
