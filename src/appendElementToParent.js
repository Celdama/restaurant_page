const appendElementToParent = (parent, ...args) => {
  args.forEach((arg) => {
    parent.appendChild(arg.el);
  });
};

export default appendElementToParent;
