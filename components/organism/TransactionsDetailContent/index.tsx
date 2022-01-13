import Row from "./Row";
import TransactionItem from "./TransactionItem";

export default function TransactionsContentDetail() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #GG001
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <TransactionItem />
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Purchase Details
                </h2>
                <Row title="Your Game ID" desc="masayoshizero" />
                <Row title="Order ID" desc="#GG001" />
                <Row title="Item" desc="250 Diamonds" />
                <Row title="Price" desc="Rp 42.280.500" />
                <Row title="Tax (10%)" desc="Rp 4.228.000" />
                <Row title="Total" desc="Rp 55.000.600" active />
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                <Row title="Your Account Name" desc="Masayoshi Angga Zero" />
                <Row title="Type" desc="Worldwide Transfer" />
                <Row title="Bank Name" desc="Mandiri" />
                <Row title="Bank Account Name" desc="PT Store GG Indonesiai" />
                <Row title="Bank Number" desc="1800 - 9090 - 2021" />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="#"
                  role="button"
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
