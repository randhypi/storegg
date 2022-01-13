import Link from "next/link";
import cx from "classnames";

interface TransactionsItemProps {
  title: "All Trx" | "Success" | "Pending" | "Failed";
  active?: boolean;
}

export default function TransactionsItem(
  props: Partial<TransactionsItemProps>
) {
  const { title, active } = props;
  const classStatus = cx({
    "btn btn-status rounded-pill text-sm  me-3": true,
    "btn-active": active,
  });
  return (
    <Link href="#">
      <a data-filter="*" className={classStatus}>
        {title}
      </a>
    </Link>
  );
}
