export function App(props) {
  return <section {...props} className={`relative ${props.className}`} />;
}

function Container(props) {
  return (
    <div
      {...props}
      className={`container | relative h-full w-full ${props.className}`}
    />
  );
}

function Body(props) {
  return <div {...props} className={`${props.className}`} />;
}

function Header(props) {
  return (
    <header
      {...props}
      className={`w-full sticky top-0 z-50 ${props.className}`}
    />
  );
}

function Footer(props) {
  return <footer {...props} className={`${props.className}`} />;
}

function Absolute(props) {
  return (
    <div {...props} className={`absolute inset-0 z-[60] ${props.className}`} />
  );
}

App.Container = Container;
App.Header = Header;
App.Footer = Footer;
App.Absolute = Absolute;
App.Body = Body;
