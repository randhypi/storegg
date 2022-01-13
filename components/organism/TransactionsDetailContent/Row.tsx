import cx from "classnames";

interface RowProps {
  title: string;
  desc: string;
  active?: boolean;
}

export default function Row(props: Partial<RowProps>) {
  const { title, desc, active } = props;
  const classActive = cx({
    "purchase-details ": true,
    "color-palette-4": active,
  });
  return (
    <p className="text-lg color-palette-1 mb-20">
      {title} <span className={classActive}>{desc}</span>
    </p>
  );
}
