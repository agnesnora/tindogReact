import "../styles/BadgeStyles/Badge.css";

export default function Badge({ variant, children }) {
  let variantClass = variant && `${variant}-badge`;

  return (
    <>
      <h1 className={variantClass}>{children}</h1>
    </>
  );
}
