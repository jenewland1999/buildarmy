export default function classNames(
  ...classes: (false | null | undefined | string)[]
) {
  return classes.filter(Boolean).join(" ");
}
