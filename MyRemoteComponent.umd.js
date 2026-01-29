(function (root, factory) {
  root.MyRemoteComponent = factory(root.React, root.ReactDOM);
})(this, function (React, ReactDOM) {
  return function MyRemoteComponent(props) {
    const style = {
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      background: "#fff"
    };

    return React.createElement(
      "div",
      { style },
      React.createElement("h3", null, "Hello from GitHub Pages ✨"),
      React.createElement("div", null, "これは外部 UMD から読み込んでいます！"),
      React.createElement("pre", null, JSON.stringify(props.data || [], null, 2))
    );
  };
});
