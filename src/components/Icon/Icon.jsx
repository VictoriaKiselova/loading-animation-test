const Icon = ({
  sprite = "/symbol-defs.svg",
  id,
  width = 24,
  height = 24,
  className = "",
  onClick,
  role = "img",
}) => {
  const href = `${sprite}#${id}`;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      role={role}
      aria-hidden={!role}>
      <use href={href} xlinkHref={href} />
    </svg>
  );
};

export default Icon;
