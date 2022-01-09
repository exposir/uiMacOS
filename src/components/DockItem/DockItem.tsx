import moduleCss from "./DockItem.module.scss";

function DockItem(props = { src: "" }) {
  const { src } = props;
  return <img className={moduleCss.DockItem} src={src} />;
}
export default DockItem;
