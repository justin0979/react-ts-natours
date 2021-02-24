import Button from "&components/Button";

export default () => {
  return (
    <header id="header" className="header">
      <div className="logo-box">
        <img
          src="/src/img/logo-white.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">
            Outdoors
          </span>
          <span className="heading-primary-sub">
            is where life happens
          </span>
        </h1>
        <Button
          href="#header"
          class="btn btn-white btn-animated"
        >
          Discover our tours
        </Button>
      </div>
    </header>
  );
};
