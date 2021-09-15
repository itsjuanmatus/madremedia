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
    const handleRouteChange = (url:any) => {
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
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link href="/">MADRE MEDIA</Link>
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
