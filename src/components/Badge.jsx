export default function Badge({ variant, children }) {
  console.log(variant);
  let variantClass = variant && `${variant}-badge`;

  return (
    <>
      <h1 className={variantClass}>{children}</h1>
    </>
  );
}
